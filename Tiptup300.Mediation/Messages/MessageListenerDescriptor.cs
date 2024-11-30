namespace Tiptup300.Mediation.Messages;

public class MessageListenerDescriptor
{
   public Type MessageType { get; }
   public IMessageListener Listener { get; }

   public MessageListenerDescriptor(IMessageListener listener)
   {
      if (listener == null) throw new ArgumentNullException(nameof(listener));

      var listenerType = listener.GetType();
      var listenerInterfaces = listenerType.GetInterfaces();
      var interfaceType = listenerInterfaces
         .FirstOrDefault(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IMessageListener<>));

      if (interfaceType is null)
         throw new ArgumentException("The provided listener must implement IMessageListener<>", nameof(listener));

      MessageType = interfaceType.GetGenericArguments()[0];
      Listener = listener;
   }
}
