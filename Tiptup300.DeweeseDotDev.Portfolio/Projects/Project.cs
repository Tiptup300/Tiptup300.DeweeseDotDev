namespace Tiptup300.DeweeseDotDev.Portfolio.Projects;

public record Project
(
  string ProjectId,
  string Title,
  string Description,
  IDateRange DateRange,
  IReadOnlyList<IFigure> Figures,
  IReadOnlyList<Link> Links,
  IReadOnlyList<string> Tags
);
