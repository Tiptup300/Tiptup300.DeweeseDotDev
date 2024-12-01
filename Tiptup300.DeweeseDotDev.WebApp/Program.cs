using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Reflection;
using Tiptup300.DeweeseDotDev.Portfolio.Resolvers;
using Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client;
using Tiptup300.DeweeseDotDev.WebApp.Components;
using Tiptup300.DeweeseDotDev.WebApp.Services;
using Tiptup300.Mediation.Messages;
using Tiptup300.Mediation.Requests;

namespace Tiptup300.DeweeseDotDev.WebApp;

public class Program
{
   public static async Task Main(string[] args)
   {
      var builder = WebAssemblyHostBuilder.CreateDefault(args);
      builder.RootComponents.Add<App>("#app");
      builder.RootComponents.Add<HeadOutlet>("head::after");

      builder.Services

         .AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) })



         .AddMatchingImplementations([
            typeof(Program).Assembly,
            typeof(Tiptup300.Mediation.Mediator).Assembly,
            typeof(Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client.GetProjectByProjectIdResolver).Assembly,
            typeof(Tiptup300.Logging.ILogger).Assembly
         ])

         // TODO: Need to create a extension method that takes in stuff 
         .AddScoped<IRequestResolver<GetProjectByProjectId.Request, GetProjectByProjectId.Response>, GetProjectByProjectIdResolver>()
         .AddScoped<IRequestResolver<GetProjectsByPagination.Request, GetProjectsByPagination.Response>, GetProjectsByPaginationResolver>()
         .AddScoped<RequestResolverDescriptorCollection>(sp => new RequestResolverDescriptorCollection([
            sp.GetRequiredService<IRequestResolver<GetProjectByProjectId.Request, GetProjectByProjectId.Response>>(),
            sp.GetRequiredService<IRequestResolver<GetProjectsByPagination.Request, GetProjectsByPagination.Response>>(),
         ]))

         // TODO: Need to create an extension method to do this.
         .AddScoped<ErrorLogEventReceiver>()
         .AddScoped<MessageListenerDescriptorCollection>(sp => new MessageListenerDescriptorCollection([
            sp.GetRequiredService<ErrorLogEventReceiver>()
         ]));



      await builder.Build().RunAsync();
   }
}

public static class ServiceCollectionExtensions
{
   public static IServiceCollection AddMatchingImplementations(this IServiceCollection services, params Assembly[] assemblies)
   {
      if (assemblies == null || assemblies.Length == 0)
         throw new ArgumentException("At least one assembly must be provided.", nameof(assemblies));

      var interfaceImplementations = assemblies
         .SelectMany(assembly => assembly.GetTypes())
         .Where(type => type.Namespace is not null)
         .Where(type => type.IsClass && !type.IsAbstract) // Select non-abstract classes
         .Select(type => new
         {
            Implementation = type,
            Interface = type.GetInterface($"I{type.Name}")! // Find corresponding interface
         })
         .Where(pair => pair.Interface != null);// Keep only matches

      foreach (var pair in interfaceImplementations)
      {
         services.AddScoped(pair.Interface, pair.Implementation);
      }

      return services;
   }
}