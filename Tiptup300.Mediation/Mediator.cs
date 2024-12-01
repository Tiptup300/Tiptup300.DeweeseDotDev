using System.Collections.Immutable;
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
public class Mediator : IMediator
{
   private readonly RequestResolverDescriptorCollection _resolvers;
   private readonly MessageListenerDescriptorCollection _listeners;
   // TODO: Add logging to this class
   // add to Resolve and ReportMessage
   // I believe I'll have to pull this implementation class up to Tiptup300.DeweeseDotDev. Although for fugure YAGNI situations, maybe I'll want it somewhere else.
   // either way, it's a distraction for now. I'm happy with the current implemntation of logging and Mediator.

   public Mediator(RequestResolverDescriptorCollection resolverDescriptorCollection, MessageListenerDescriptorCollection listeners)
   {
      _resolvers = resolverDescriptorCollection;
      _listeners = listeners;
   }


   public async Task<TResponse> Resolve<TRequest, TResponse>(TRequest request)
      where TRequest : IRequest
      where TResponse : IRequestResponse
   {
      TResponse output;

      var resolverInstance = _resolvers.Resolvers.GetValueOrDefault((typeof(TRequest), typeof(TResponse)))
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