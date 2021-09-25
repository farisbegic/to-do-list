using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using ToDoList.Application.Repositories;
using ToDoList.Application.Repositories.Base;
using ToDoList.Application.Services.Tasks;
using ToDoList.Infrastructure.Persistance;
using ToDoList.Infrastructure.Repositories;
using ToDoList.Infrastructure.Repositories.Base;
using ToDoList.WebAPI.Filters;

namespace ToDoList.WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ToDoListDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection"),
                    o => o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)
                )
            );
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ToDoList.WebAPI", Version = "v1" });
            });
            services.AddRouting(options => options.LowercaseUrls = true);
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddTransient<ITaskRepository, TaskRepository>();
            services.AddScoped<ITaskService, TaskService>();
            services.AddMvc(options => { options.Filters.Add<CustomExceptionHandler>(); });
            services.AddHttpContextAccessor();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDoList.WebAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
