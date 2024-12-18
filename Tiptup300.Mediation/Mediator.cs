﻿using System.Collections.Immutable;
using Tiptup300.Mediation.Messages;
using Tiptup300.Mediation.Requests;

namespace Tiptup300.Mediation;

public interface IMediator
{
   Task<TResponse> Resolve<TRequest, TResponse>(TRequest request)
      where TRequest : IRequest
      where TResponse : IRequestResponse;

   Task ReportMessage<TMessage>(TMessage message)
      where TMessage : IMessage;
}
public class Mediator(RequestResolverDescriptorCollection resolverDescriptorCollection, MessageListenerDescriptorCollection listeners) : IMediator
{
   private readonly MessageListenerDescriptorCollection _listeners = listeners;

   public async Task<TResponse> Resolve<TRequest, TResponse>(TRequest request)
      where TRequest : IRequest
      where TResponse : IRequestResponse
   {
      TResponse output;

      var resolverInstance = resolverDescriptorCollection.Resolvers.GetValueOrDefault((typeof(TRequest), typeof(TResponse)))
         ?? throw new NotImplementedException($"Resolver not found for request type `{typeof(TRequest)}` & response type `{typeof(TResponse)}`");

      var resolver = resolverInstance as IRequestResolver<TRequest, TResponse>
         ?? throw new InvalidOperationException("Resolver failed to map");

      output = await resolver.Resolve(request);

      return output;
   }

   public async Task ReportMessage<TMessage>(TMessage message)
      where TMessage : IMessage
   {
      {
         var listenerInstances = _listeners.Listeners.GetValueOrDefault(typeof(TMessage))
            ?? throw new NotImplementedException($"Listener not found for message type `{typeof(TMessage)}`");

         var listeners = listenerInstances.Select(x => x as IMessageListener<TMessage> ?? throw new InvalidOperationException("Message failed to map"));

         var transmitTasks = listeners.Select(listener => listener.TransmitMessage(message));

         await Task.WhenAll(transmitTasks);
      }
   }
}