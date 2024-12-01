using System.Collections.Immutable;
using System.Text.Json;
using Tiptup300.DeweeseDotDev.Portfolio.Projects;

namespace Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client.Json;

public interface IProjectJsonParser
{
   Project[] ParseProjects(string jsonStr);
}
internal class ProjectJsonParser : IProjectJsonParser
{
   public Project[] ParseProjects(string jsonStr)
   {
      Project[] output;

      var model = JsonSerializer.Deserialize<ProjectJsonModel[]>(jsonStr) ??
         throw new Exception("Failed to deserialize projects.");

      output = model.Select(model =>
      {
         return new Project(
            ProjectId: model.ProjectId ?? throw new Exception("Project Id not specified for project."),
            Title: model.Title ?? throw new Exception("Title not specified for project."),
            Description: model.Description ?? throw new Exception("Description not specified for project."),
            DateRange: ParseDateRange(model.DateRange ?? throw new Exception("Date Range not specified for project.")),
            Figures: _parseFigures(model.Figures ?? throw new Exception("Figures not specified for project.")),
            Links: _parseLinks(model.Links ?? throw new Exception("Links not specified for project.")),
            Tags: model.Tags ?? throw new Exception("Tags not specified for project.")
         );
      }).ToArray();

      return output;
   }

   private static ImmutableArray<Link> _parseLinks(LinkJsonModel[] links)
   {
      return links.Select(
         link => new Link(
            Type: link.Type ?? throw new Exception("Type not specified for link."),
            Description: link.Description ?? throw new Exception("Description not specified for link."),
            Uri: link.Uri ?? throw new Exception("Uri not specified for link."),
            OpenInSameWindow: link.OpenInSameWindow ?? throw new Exception("OpenInSameWindow not specified for link.")
         )
      ).ToImmutableArray();
   }

   private ImmutableArray<IFigure> _parseFigures(FigureJsonModel[] figures)
   {
      ImmutableArray<IFigure> output;

      output = figures.Select<FigureJsonModel, IFigure>(
         figure => figure.Type switch
         {
            nameof(ImageFigure) => new ImageFigure(
               uri: figure.Uri ?? throw new Exception("Uri not specified for figure"),
               caption: figure.Caption ?? throw new Exception("Caption not specified for figure"),
               width: figure.Width ?? throw new Exception("Width not specified for figure"),
               height: figure.Height ?? throw new Exception("Height not specified for figure"),
               isPrimary: figure.IsPrimary ?? throw new Exception("IsPrimary not specified for figure")
            ),
            nameof(YoutubeFigure) => new YoutubeFigure(
                  Uri: figure.Uri ?? throw new Exception("Uri not specified for figure"),
                  Caption: figure.Caption ?? throw new Exception("Caption not specified for figure")
               ),
            _ => throw new Exception()
         }).ToImmutableArray();

      return output;
   }

   public IDateRange ParseDateRange(DateRangeJsonModel model)
   {
      IDateRange output;

      output = model.Type switch
      {
         nameof(DayBasedDateRange) => new DayBasedDateRange(
            start: DateTime.Parse(model.Start ?? throw new Exception("Start not specified for date range.")),
            end: DateTime.Parse(model.End ?? throw new Exception("Start not specified for date range."))
         ),

         nameof(YearBasedDateRange) => new YearBasedDateRange(
            yearStart: model.YearStart ?? throw new Exception("Year start not specified for date range."),
            yearEnd: model.YearEnd
         ),

         _ => throw new Exception()
      };

      return output;
   }
}
