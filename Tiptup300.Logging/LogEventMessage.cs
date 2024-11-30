using Tiptup300.Mediation.Messages;

namespace Tiptup300.Logging;

public record LogEventMessage(LogEvent LogEvent) : IMessage;