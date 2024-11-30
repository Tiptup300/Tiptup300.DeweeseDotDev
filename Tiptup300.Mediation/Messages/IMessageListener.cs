namespace Tiptup300.Mediation.Messages;

public interface IMessageListener;

public interface IMessageListener<TMessage> : IMessageListener
   where TMessage : IMessage
{
   Task TransmitMessage(TMessage message);
}