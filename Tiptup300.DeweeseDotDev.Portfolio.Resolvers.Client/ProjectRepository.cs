using System.Text.Json;
using Tiptup300.DeweeseDotDev.Portfolio.Projects;

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

   public ProjectRepository(HttpClient httpClient)
   {
      _httpClient = httpClient;
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

         output = JsonSerializer.Deserialize<Project[]>(responseStr) ??
            throw new Exception("Failed to deserialize projects.");
      }
      catch (Exception ex)
      {
         throw new Exception($"Failed to Get Projects: {ex.Message}", ex);
      }

      return output;
   }
}
