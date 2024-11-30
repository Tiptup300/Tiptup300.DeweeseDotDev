namespace Tiptup300.Mediation.Requests;

public interface IRequestResolver;

public interface IRequestResolver<TRequest, TResponse> : IRequestResolver
   where TRequest : IRequest
   where TResponse : IRequestResponse
{
   Task<TResponse> Resolve(TRequest request);
}
