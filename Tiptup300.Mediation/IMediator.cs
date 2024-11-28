namespace Tiptup300.Mediation;

public interface IMediator
{
   Task<TResponse> Resolve<TRequest, TResponse>(TRequest request)
      where TRequest : IRequest
      where TResponse : IResponse;
}
public class Mediator : IMediator
{
   private readonly ResolverDescriptorCollection _resolvers;

   public Mediator(ResolverDescriptorCollection resolverDescriptorCollection)
   {
      _resolvers = resolverDescriptorCollection;
   }

   public async Task<TResponse> Resolve<TRequest, TResponse>(TRequest request)
      where TRequest : IRequest
      where TResponse : IResponse
   {
      TResponse output;

      var resolverInstance = _resolvers.Resolvers.GetValueOrDefault((typeof(TRequest), typeof(TResponse)))
         ?? throw new NotImplementedException($"Resolver not found for request type `{typeof(TRequest)}` & response type `{typeof(TResponse)}`");

      var resolver = resolverInstance as IResolver<TRequest, TResponse>
         ?? throw new InvalidOperationException("Resolver failed to map");

      output = await resolver.Resolve(request);

      return output;
   }
}
