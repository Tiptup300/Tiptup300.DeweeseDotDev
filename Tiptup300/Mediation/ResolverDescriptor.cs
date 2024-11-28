namespace Tiptup300.Mediation;

public class ResolverDescriptor
{
   public Type RequestType { get; }
   public Type ResponseType { get; }
   public IResolver Resolver { get; }

   public ResolverDescriptor(IResolver resolver)
   {
      if (resolver == null) throw new ArgumentNullException(nameof(resolver));

      var resolverType = resolver.GetType();
      var interfaceType = resolverType.GetInterfaces()
          .FirstOrDefault(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IResolver<,>));

      if (interfaceType == null)
         throw new ArgumentException($"The provided resolver must implement IResolver<,>.", nameof(resolver));

      RequestType = interfaceType.GetGenericArguments()[0];
      ResponseType = interfaceType.GetGenericArguments()[1];
      Resolver = resolver;

      Validate();
   }

   private void Validate()
   {
      var resolverType = Resolver.GetType();
      var interfaceType = resolverType.GetInterfaces()
          .FirstOrDefault(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IResolver<,>));

      if (interfaceType == null)
         throw new InvalidOperationException($"The resolver does not implement IResolver<,>.");

      var genericArgs = interfaceType.GetGenericArguments();
      if (genericArgs[0] != RequestType || genericArgs[1] != ResponseType)
      {
         throw new InvalidOperationException(
             $"Resolver's generic types ({genericArgs[0].Name}, {genericArgs[1].Name}) " +
             $"do not match RequestType ({RequestType.Name}) and ResponseType ({ResponseType.Name}).");
      }
   }
}
