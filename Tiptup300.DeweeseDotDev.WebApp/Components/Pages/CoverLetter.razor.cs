using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace Tiptup300.DeweeseDotDev.WebApp.Components.Pages
{
   public partial class CoverLetter : ComponentBase
   {
      private readonly IJSRuntime _jsRuntime;

      public CoverLetter(IJSRuntime jsRuntime)
      {
         _jsRuntime = jsRuntime;
      }

      private string? businessName;
      private string? businessAddressLine;
      private string? businessCity;
      private string? jobTitle;
      private string? heardAbout;
      private string? jobReferenceLink;

      private void Print()
      {
         _jsRuntime.InvokeVoidAsync("window.print");
      }

   }
}
