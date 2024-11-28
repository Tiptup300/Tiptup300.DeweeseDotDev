namespace Tiptup300.DeweeseDotDev.Portfolio.Projects;

public interface IDateRange
{
   string Description { get; }
   DateTime SortDate { get; }
}

public class DayBasedDateRange : IDateRange
{
   public DateTime Start { get; }
   public DateTime End { get; }

   public DayBasedDateRange(DateTime start, DateTime end)
   {
      Start = start;
      End = end;
   }

   public string Description => $"{Start:d} -> {End:d}";
   public DateTime SortDate => Start;
}

public class YearBasedDateRange : IDateRange
{
   public int YearStart { get; }
   public int YearEnd { get; }

   public YearBasedDateRange(int yearStart, int? yearEnd = null)
   {
      YearStart = yearStart;
      YearEnd = yearEnd ?? yearStart;
   }

   public string Description => YearStart == YearEnd
      ? $"{YearStart}-{YearEnd}"
      : $"{YearStart}";

   public DateTime SortDate => new DateTime(YearStart, 1, 1);
}