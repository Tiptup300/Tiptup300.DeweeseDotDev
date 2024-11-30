namespace Tiptup300.Mediation.Requests;

public class RequestResolverDescriptor
{
   public Type RequestType { get; }
   public Type ResponseType { get; }
   public IRequestResolver Resolver { get; }

   public RequestResolverDescriptor(IRequestResolver resolver)
   {
      if (resolver == null) throw new ArgumentNullException(nameof(resolver));

      var resolverType = resolver.GetType();
      var interfaceType = resolverType.GetInterfaces()
          .FirstOrDefault(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IRequestResolver<,>));

      if (interfaceType == null)
         throw new ArgumentException($"The provided resolver must implement IRequestResolver<,>.", nameof(resolver));

      RequestType = interfaceType.GetGenericArguments()[0];
      ResponseType = interfaceType.GetGenericArguments()[1];
      Resolver = resolver;
   }
}