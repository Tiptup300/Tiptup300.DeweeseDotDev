namespace Tiptup300.Logging;

public interface ILogger
{
   void LogDebug(Func<string> message);
   void LogError(Func<string> message, Exception? ex = null);
   void LogInfo(Func<string> message);
   void LogTrace(Func<string> message);
   void LogWarn(Func<string> message, Exception? ex = null);
}

