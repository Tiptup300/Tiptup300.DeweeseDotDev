namespace Tiptup300.DeweeseDotDev.Portfolio.Projects;

public interface IDateRange
{
   string Description { get; }
   DateTime SortDate { get; }
}

public class DayBasedDateRange(DateTime start, DateTime end) : IDateRange
{
   public DateTime Start { get; } = start;
   public DateTime End { get; } = end;

   public string Description => $"{Start:d} -> {End:d}";
   public DateTime SortDate => Start;
}

public class YearBasedDateRange(int yearStart, int? yearEnd = null) : IDateRange
{
   public int YearStart { get; } = yearStart;
   public int YearEnd { get; } = yearEnd ?? yearStart;

   public string Description => YearStart == YearEnd
      ? $"{YearStart}-{YearEnd}"
      : $"{YearStart}";

   public DateTime SortDate => new(YearStart, 1, 1);
}