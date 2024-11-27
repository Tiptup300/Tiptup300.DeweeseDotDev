namespace Tiptup300.DeweeseDotDev.Portfolio.Projects;

public interface IDateRange
{
   string Description { get; }
   DateTime SortDate { get; }
}

public class DayBasedDateRange
(
   DateTime Start,
   DateTime End
) : IDateRange
{
   public string Description => $"{Start:d} -> {End:d}";
   public DateTime SortDate => Start;
}

public class YearBasedDateRange
(
   int YearStart,
   int? YearEnd
) : IDateRange
{
   public string Description => YearEnd.HasValue
      ? $"{YearStart}-{YearEnd}"
      : $"{YearStart}";

   public DateTime SortDate => new DateTime(YearStart, 1, 1);
}