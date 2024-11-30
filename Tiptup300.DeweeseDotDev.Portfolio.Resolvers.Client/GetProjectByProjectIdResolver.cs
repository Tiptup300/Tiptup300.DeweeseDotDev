using Tiptup300.Mediation.Requests;

namespace Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client;

public class GetProjectByProjectIdResolver : IRequestResolver<GetProjectByProjectId.Request, GetProjectByProjectId.Response>
{
   private readonly IProjectRepository _projectRepository;

   public GetProjectByProjectIdResolver(IProjectRepository projectRepository)
   {
      _projectRepository = projectRepository;
   }

   public async Task<GetProjectByProjectId.Response> Resolve(GetProjectByProjectId.Request request)
   {
      GetProjectByProjectId.Response output;

      var projects = await _projectRepository.GetAllProjects();

      var project = projects.FirstOrDefault(x => x.ProjectId == request.ProjectId)
         ?? throw new Exception("Failed to locate project by ProjectId");

      output = new GetProjectByProjectId.Response(project);

      return output;
   }
}