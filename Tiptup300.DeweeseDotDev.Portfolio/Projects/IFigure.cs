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

public class ImageFigure(string uri, string caption, int width, int height, bool? isPrimary = null) : IFigure
{
   public string Uri { get; } = uri;
   public string Caption { get; } = caption;
   public int Width { get; } = width;
   public int Height { get; } = height;
   public bool IsPrimary { get; } = isPrimary ?? false;

   public FigureType FigureType => FigureType.Image;
   public float Ratio => Width / Height;
}

public record YoutubeFigure
(
   string Uri,
   string Caption
) : IFigure
{
   public FigureType FigureType => FigureType.YoutubeVideo;
   public bool IsPrimary => false;
}
