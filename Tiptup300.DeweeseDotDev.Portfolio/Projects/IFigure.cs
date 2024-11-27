namespace Tiptup300.DeweeseDotDev.Portfolio.Projects;

public enum FigureType
{
   Image,
   YoutubeVideo
}

public interface IFigure
{
   bool IsPrimary { get; }
   FigureType FigureType { get; }
}

public record ImageFigure
(
   string ImageUri,
   string Caption,
   bool IsPrimary,
   int Width,
   int Height
) : IFigure
{
   public FigureType FigureType => FigureType.Image;
   public float Ratio => Width / Height;
}

public record YoutubeFigure
(
   string YoutubeUri
) : IFigure
{
   public FigureType FigureType => FigureType.YoutubeVideo;
   public bool IsPrimary => false;
}
