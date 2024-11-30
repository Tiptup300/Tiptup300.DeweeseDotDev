using Tiptup300.DeweeseDotDev.Portfolio.Projects;
using Tiptup300.Mediation.Requests;

namespace Tiptup300.DeweeseDotDev.Portfolio.Resolvers;

public class GetProjectsByPagination
{
   public enum SortOrder
   {
      DateAsc,
      DateDesc
   }

   public record Request
   (
      int PageNumber,
      int PageSize,
      SortOrder? SortOrder
   ) : IRequest;

   public record Response
   (
      IReadOnlyList<Project> Projects
   ) : IRequestResponse;
}