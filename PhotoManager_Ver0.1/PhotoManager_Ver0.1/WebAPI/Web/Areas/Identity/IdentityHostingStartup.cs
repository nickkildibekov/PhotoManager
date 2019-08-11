using Microsoft.AspNetCore.Hosting;
using PhotoManager_Ver0._1.Areas.Identity;

[assembly: HostingStartup(typeof(IdentityHostingStartup))]
namespace PhotoManager_Ver0._1.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}