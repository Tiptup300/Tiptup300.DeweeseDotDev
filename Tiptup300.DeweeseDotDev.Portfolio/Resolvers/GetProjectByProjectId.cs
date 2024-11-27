using Tiptup300.DeweeseDotDev.Portfolio.Projects;
using Tiptup300.Mediation;

namespace Tiptup300.DeweeseDotDev.Portfolio.Resolvers;

public class GetProjectByProjectId
{
   public record Request
   (
      string ProjectId
   ) : IRequest;

   public record Response
   (
      Project Project
   ) : IResponse;
}
