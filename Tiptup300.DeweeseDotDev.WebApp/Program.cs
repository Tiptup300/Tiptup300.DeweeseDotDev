using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Tiptup300.DeweeseDotDev.Portfolio.Resolvers;
using Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client;
using Tiptup300.DeweeseDotDev.WebApp.Components;
using Tiptup300.Mediation;

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

         .AddScoped<IProjectRepository, ProjectRepository>()

         .AddScoped<IMediator, Mediator>()

         .AddScoped<ResolverDescriptorCollection>(sp => new ResolverDescriptorCollection([
            sp.GetRequiredService<IResolver<GetProjectByProjectId.Request, GetProjectByProjectId.Response>>(),
            sp.GetRequiredService<IResolver<GetProjectsByPagination.Request, GetProjectsByPagination.Response>>(),
         ]))

         .AddScoped<IResolver<GetProjectByProjectId.Request, GetProjectByProjectId.Response>, GetProjectByProjectIdResolver>()
         .AddScoped<IResolver<GetProjectsByPagination.Request, GetProjectsByPagination.Response>, GetProjectsByPaginationResolver>();

      await builder.Build().RunAsync();
   }
}
