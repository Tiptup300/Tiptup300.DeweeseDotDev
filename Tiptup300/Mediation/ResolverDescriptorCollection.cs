namespace Tiptup300.Mediation;

public class ResolverDescriptorCollection
{
   public readonly IReadOnlyDictionary<(Type RequestType, Type ResponseType), IResolver> Resolvers;

   public ResolverDescriptorCollection(IReadOnlyList<IResolver> resolverList)
   {
      Resolvers = resolverList
         .Select(x => new ResolverDescriptor(x))
         .ToDictionary(
            element => (element.RequestType, element.ResponseType),
            element => element.Resolver
         );
   }
}
