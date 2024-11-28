using Tiptup300.DeweeseDotDev.Portfolio.Projects;
using Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client.Json;

namespace Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client;

public interface IProjectRepository
{
   Task<IReadOnlyList<Project>> GetAllProjects();
   Task<Project[]> GetProjectsFromServer();
}
public class ProjectRepository : IProjectRepository
{
   private IReadOnlyList<Project>? _projectsCache;
   private readonly HttpClient _httpClient;
   private IProjectJsonParser _projectJsonParser;

   public ProjectRepository(HttpClient httpClient, IProjectJsonParser projectJsonParser)
   {
      _httpClient = httpClient;
      _projectJsonParser = projectJsonParser;
   }

   public async Task<IReadOnlyList<Project>> GetAllProjects()
   {
      _projectsCache ??= await GetProjectsFromServer();

      return _projectsCache;
   }

   public async Task<Project[]> GetProjectsFromServer()
   {
      Project[] output;

      try
      {
         var response = await _httpClient.GetAsync("assets/projects.json");
         var responseStr = await response.Content.ReadAsStringAsync();

         output = _projectJsonParser.ParseProjects(responseStr) ??
            throw new Exception("Failed to deserialize projects.");
      }
      catch (Exception ex)
      {
         throw new Exception($"Failed to Get Projects: {ex.Message}", ex);
      }

      return output;
   }
}
