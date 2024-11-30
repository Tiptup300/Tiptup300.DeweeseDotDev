using System.Collections.Concurrent;
using Tiptup300.Mediation;

namespace Tiptup300.Logging;

public class Logger : ILogger
{
   private ConcurrentBag<LogEvent> _logEvents = new ConcurrentBag<LogEvent>();

   private readonly IMediator _mediator;

   public Logger(IMediator mediator)
   {
      _mediator = mediator;
   }

   public void LogInfo(Func<string> message)
      => AddLogEvent(LoggingLevel.Info, message.Invoke());

   public void LogDebug(Func<string> message)
      => AddLogEvent(LoggingLevel.Debug, message.Invoke());

   public void LogTrace(Func<string> message)
      => AddLogEvent(LoggingLevel.Trace, message.Invoke());

   public void LogWarn(Func<string> message, Exception? ex = null)
      => AddLogEvent(LoggingLevel.Warn, message.Invoke(), ex);

   public void LogError(Func<string> message, Exception? ex = null)
      => AddLogEvent(LoggingLevel.Error, message.Invoke(), ex);

   private void AddLogEvent(LoggingLevel logLevel, string message, Exception? ex = null)
   {
      var logEvent = new LogEvent(
         Guid: Guid.NewGuid(),
         LogLevel: logLevel,
         Message: message,
         OccurTime: DateTime.Now,
         Exception: ex
      );
      _logEvents.Add(logEvent);
      _mediator.ReportMessage(new LogEventMessage(logEvent));
   }
}