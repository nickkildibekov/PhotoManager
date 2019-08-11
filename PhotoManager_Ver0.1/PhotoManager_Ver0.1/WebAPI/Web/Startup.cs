using System;
using System.Text;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using AutoMapper;
using DataAccess.DbContext;
using DataAccess.Repositories;
using DTO;
using Entities.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using Services.Dislikes;
using Services.Likes;
using Services.Posts;
using Services.Users;
using Utils;

namespace PhotoManager_Ver0._1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            //Inject AppSettings
            services.Configure<ApplicationsSettings>(Configuration.GetSection("ApplicationSettings"));
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseLazyLoadingProxies().UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));
            services.AddIdentity<ApplicationUser, IdentityRole<Guid>>(options =>
                {
                    options.Password.RequiredLength = 6;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireDigit = false;
                })
                .AddDefaultUI(UIFramework.Bootstrap4)
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddNToastNotifyToastr()
                .AddJsonOptions(options =>
                    {
                        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                        var resolver = options.SerializerSettings.ContractResolver;
                        if (resolver != null)
                            (resolver as DefaultContractResolver).NamingStrategy = null;
                    });


            services.AddAutoMapper(typeof(Startup));
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));

            var key = Encoding.UTF8.GetBytes(Configuration["ApplicationSettings:JWT_Secret"]);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
            x.RequireHttpsMetadata = false;
            x.SaveToken = false;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            });
            

            //Autofac
            var containerBuilder = new ContainerBuilder();
            containerBuilder.RegisterType<HttpContextAccessor>().As<IHttpContextAccessor>().SingleInstance();

            containerBuilder.RegisterType<BaseRepository<Post>>().As<IRepository<Post>>();
            containerBuilder.RegisterType<BaseRepository<PostDto>>().As<IRepository<PostDto>>();
            containerBuilder.RegisterType<PostService>().As<IPostService>();

            containerBuilder.RegisterType<BaseRepository<Like>>().As<IRepository<Like>>();
            containerBuilder.RegisterType<BaseRepository<LikeDto>>().As<IRepository<LikeDto>>();
            containerBuilder.RegisterType<LikeService>().As<ILikeService>();

            containerBuilder.RegisterType<BaseRepository<Dislike>>().As<IRepository<Dislike>>();
            containerBuilder.RegisterType<BaseRepository<DislikeDto>>().As<IRepository<DislikeDto>>();
            containerBuilder.RegisterType<DisLikeService>().As<IDisLikeService>();

            containerBuilder.RegisterType<BaseRepository<ApplicationUser>>().As<IRepository<ApplicationUser>>();
            containerBuilder.RegisterType<BaseRepository<ApplicationUserDto>>().As<IRepository<ApplicationUserDto>>();
            containerBuilder.RegisterType<UserService>().As<IUserService>();

            containerBuilder.Populate(services);
            var container = containerBuilder.Build();
            return new AutofacServiceProvider(container);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseAuthentication();
            app.UseNToastNotify();
            app.UseCors("MyPolicy");
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "api/{controller=Home}/{id?}");
            });

        }
    }
}
