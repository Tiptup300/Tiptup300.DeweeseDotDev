using System.Collections.Immutable;
using Tiptup300.DeweeseDotDev.Portfolio.Projects;
using Tiptup300.Mediation.Requests;

namespace Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client;

public class GetProjectsByPaginationResolver : IRequestResolver<GetProjectsByPagination.Request, GetProjectsByPagination.Response>
{
   private const int MAX_PAGE_SIZE = 100;

   private readonly IProjectRepository _projectRepository;

   public GetProjectsByPaginationResolver(IProjectRepository projectRepository)
   {
      _projectRepository = projectRepository;
   }

   public async Task<GetProjectsByPagination.Response> Resolve(GetProjectsByPagination.Request request)
   {
      GetProjectsByPagination.Response output;

      int pageNumber = Math.Max(request.PageNumber, 0);
      int pageSize = Math.Max(request.PageSize, MAX_PAGE_SIZE);
      var sortOrder = request.SortOrder ?? GetProjectsByPagination.SortOrder.DateDesc;

      var projects = await _projectRepository.GetAllProjects();

      if (pageNumber * pageSize > projects.Count)
      {
         throw new ArgumentException();
      }
      var paginatedProjects = PaginateProjects(projects, pageNumber, pageSize, sortOrder);

      output = new GetProjectsByPagination.Response(paginatedProjects.ToImmutableArray());

      return output;
   }

   private Project[] PaginateProjects(IEnumerable<Project> projects, int pageNumber, int pageSize, GetProjectsByPagination.SortOrder sortOrder)
   {
      Project[] output;

      IEnumerable<Project> sortedProjects;
      sortedProjects = sortOrder == GetProjectsByPagination.SortOrder.DateAsc
         ? projects.OrderBy(x => x.DateRange?.SortDate)
         : projects.OrderByDescending(x => x.DateRange?.SortDate);

      output = sortedProjects
         .Skip(pageNumber * pageSize)
         .Take(pageSize)
         .ToArray();

      return output;
   }
}
