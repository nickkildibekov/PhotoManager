using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.IO;

namespace Utils
{
    public static class FileUploadCheck
    {
        public static bool CheckImageFormat(IFormFile image)
        {
            var mimeTypes = new HashSet<string> {
                "image/jpg",
                "image/jpeg",
                "image/pjpeg",
                "image/gif",
                "image/x-png",
                "image/png"
            };
            var extensions = new HashSet<string>
            {
                ".jpg",
                ".png",
                ".gif",
                ".jpeg",
                ".jfif"
            };
            //-------------------------------------------
            //  Check the image mime types
            //-------------------------------------------
            if (!mimeTypes.Contains(image.ContentType.ToLower()))
            {
                return false;
            }

            //-------------------------------------------
            //  Check the image extension
            //-------------------------------------------
            var imageExtension = Path.GetExtension(image.FileName).ToLower();
            return extensions.Contains(imageExtension);
        }
    }
}
