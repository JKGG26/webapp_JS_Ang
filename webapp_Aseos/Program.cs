using Microsoft.EntityFrameworkCore;
using webapp_Aseos.Data;

var builder = WebApplication.CreateBuilder(args);

// Get the configuration from the app settings.
var configuration = builder.Configuration;

// Set up the DB context.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200") // Reemplaza con el puerto donde corre Angular
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

// Build the application.
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "webapp_Aseos v1"));
}

// Use CORS
app.UseCors("AllowLocalhost");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();