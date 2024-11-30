using System.Collections.Immutable;

namespace Tiptup300.Mediation.Messages;

public class MessageListenerDescriptorCollection
{
   public readonly IReadOnlyDictionary<Type, IReadOnlyList<IMessageListener>> Listeners;

   public MessageListenerDescriptorCollection(IReadOnlyList<IMessageListener> listenerList)
   {
      if (listenerList == null) throw new ArgumentNullException(nameof(listenerList));

      Listeners = listenerList
          .Select(listener => new MessageListenerDescriptor(listener))
          .GroupBy(descriptor => descriptor.MessageType)
          .ToDictionary(
              descriptorGroup => descriptorGroup.Key,
              group => (IReadOnlyList<IMessageListener>)group.Select(desc => desc.Listener).ToImmutableList()
            );
   }
}