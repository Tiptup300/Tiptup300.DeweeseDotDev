using Tiptup300.Mediation;

namespace Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client;

public class GetProjectByProjectIdResolver : IResolver<GetProjectByProjectId.Request, GetProjectByProjectId.Response>
{
   private readonly ProjectRepository _projectRepository;

   public GetProjectByProjectIdResolver(ProjectRepository projectRepository)
   {
      _projectRepository = projectRepository;
   }

   public GetProjectByProjectId.Response Resolve(GetProjectByProjectId.Request request)
      => ResolveAsync(request).GetAwaiter().GetResult();

   public async Task<GetProjectByProjectId.Response> ResolveAsync(GetProjectByProjectId.Request request)
   {
      GetProjectByProjectId.Response output;

      var projects = await _projectRepository.GetAllProjects();
      var project = projects.FirstOrDefault(x => x.ProjectId == request.ProjectId)
         ?? throw new Exception("Failed to locate project by ProjectId");
      output = new GetProjectByProjectId.Response(project);

      return output;
   }
}