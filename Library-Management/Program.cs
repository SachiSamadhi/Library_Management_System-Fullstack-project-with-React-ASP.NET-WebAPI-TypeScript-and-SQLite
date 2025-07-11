using FluentValidation;
using Library.Application;
using Library.Application.Behaviors;
using Library.Contracts.Exceptions;
using Library.Infrastructure;
using Library_Management.Handlers;
using Library_Management.Modules;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;





var builder = WebApplication.CreateBuilder(args);






builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Add Database Context

builder.Services.AddDbContext<LibraryDBContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DbConnectionString"));
});



builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

builder.Logging.ClearProviders();
builder.Logging.AddConsole();


builder.Services.AddApplication();
builder.Services.AddExceptionHandler<ExceptionHandler>();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}




app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.UseRouting();
app.UseSwagger();
app.UseSwaggerUI();
app.AddBooksEndpoints();

app.Run();
