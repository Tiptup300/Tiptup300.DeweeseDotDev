namespace Tiptup300.Mediation;

public interface IResolver;

public interface IResolver<TRequest, TResponse> : IResolver
   where TRequest : IRequest
   where TResponse : IResponse
{
   Task<TResponse> Resolve(TRequest request);
}