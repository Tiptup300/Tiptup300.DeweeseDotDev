namespace Tiptup300.Mediation;

public interface IResolver;

public interface IResolver<TRequest, TResponse> : IResolver
   where TRequest : IRequest
   where TResponse : IResponse
{
   TResponse Resolve(TRequest request);
   Task<TResponse> ResolveAsync(TRequest request);
}