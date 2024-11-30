using Tiptup300.Logging;
using Tiptup300.Mediation.Messages;

namespace Tiptup300.DeweeseDotDev.WebApp.Services;

public interface IErrorLogEventReceiver
{
   Func<LogEvent, Task>? ForwardMessages { get; set; }
   Task TransmitMessage(LogEventMessage message);
}

public class ErrorLogEventReceiver : IMessageListener<LogEventMessage>, IErrorLogEventReceiver
{
   public Func<LogEvent, Task>? ForwardMessages { get; set; }

   public Task TransmitMessage(LogEventMessage message)
   {
      if (message.LogEvent.LogLevel != LoggingLevel.Error)
      {
         return Task.CompletedTask;
      }
      ForwardMessages?.Invoke(message.LogEvent);

      return Task.CompletedTask;
   }
}