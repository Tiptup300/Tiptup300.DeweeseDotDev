namespace Tiptup300.Logging;

public record LogEvent(Guid Guid, LoggingLevel LogLevel, string Message, DateTime OccurTime, Exception? Exception = null);

