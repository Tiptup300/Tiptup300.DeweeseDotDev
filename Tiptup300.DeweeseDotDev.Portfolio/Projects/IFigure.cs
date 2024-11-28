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

public class ImageFigure : IFigure
{
   public string Uri { get; }
   public string Caption { get; }
   public int Width { get; }
   public int Height { get; }
   public bool IsPrimary { get; }

   public ImageFigure(string uri, string caption, int width, int height, bool? isPrimary = null)
   {
      Uri = uri;
      Caption = caption;
      Width = width;
      Height = height;
      IsPrimary = isPrimary ?? false;
   }

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
