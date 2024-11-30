namespace Tiptup300.Mediation.Requests;

public class RequestResolverDescriptorCollection
{
   public readonly IReadOnlyDictionary<(Type RequestType, Type ResponseType), IRequestResolver> Resolvers;

   public RequestResolverDescriptorCollection(IReadOnlyList<IRequestResolver> resolverList)
   {
      if (resolverList is null) throw new ArgumentNullException(nameof(resolverList));

      Resolvers = resolverList
         .Select(x => new RequestResolverDescriptor(x))
         .ToDictionary(
            descriptor => (descriptor.RequestType, descriptor.ResponseType),
            element => element.Resolver
         );
   }
}