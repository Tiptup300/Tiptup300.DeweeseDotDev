namespace Tiptup300.DeweeseDotDev.Portfolio.Resolvers.Client.Json;

internal record ProjectJsonModel
(
   string? ProjectId,
   string? Title,
   string? Description,
   DateRangeJsonModel? DateRange,
   FigureJsonModel[]? Figures,
   LinkJsonModel[]? Links,
   string[]? Tags
);

internal record DateRangeJsonModel
(
   string? Type,
   string? Start,
   string? End,
   int? YearStart,
   int? YearEnd
);

internal record FigureJsonModel
(
   string? Type,
   bool? IsPrimary,
   string? Uri,
   string? Caption,
   int? Width,
   int? Height
);

internal record LinkJsonModel
(
    string? Type,
    string? Description,
    string? Uri,
    bool? OpenInSameWindow
);