using Library.Application.Commands.Library.CreateBook;
using Library.Application.Commands.Library.DeleteBook;
using Library.Application.Commands.Library.UpdateBook;
using Library.Application.Queries.BookData.GetBooks;
using Library.Application.Queries.BookData.GetbooksById;

using Library.Contracts.Requests.Books;
using MediatR;
using Microsoft.AspNetCore.Components.Forms;

namespace Library_Management.Modules
{
    public static class BooksModules
    {
        public static void AddBooksEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapGet("/api/Books", async (IMediator mediator, CancellationToken ct) =>
            {
                var books = await mediator.Send(new GetBooksQuery(), ct);
                return Results.Ok(books);
            }).WithTags("Books");

            app.MapGet("/api/Books/{id}", async (IMediator mediator,int Id, CancellationToken ct) =>
            {
                var book = await mediator.Send(new GetBooksByIdQuery(Id),ct);
                return Results.Ok(book);
            }).WithTags("Books");
            app.MapPost("/api/Books", async (IMediator mediator, Library.Contracts.Requests.Books.CreateBooksRequest createBooksRequest, CancellationToken ct) =>
            {
                var command = new CreateBooksCommand(createBooksRequest.Title, createBooksRequest.Author, createBooksRequest.Category, createBooksRequest.Description);
                var result = await mediator.Send(command, ct);
                return Results.Ok(result);

            }).WithTags("Books");

            app.MapPut("/api/Books/{Id}", async(IMediator mediator, int Id, UpdateBooksRequest updateBooksRequest, CancellationToken ct) =>
            {
                var command = new UpdateBooksCommand(Id,updateBooksRequest.Title, updateBooksRequest.Author, updateBooksRequest.Category, updateBooksRequest.Description);
                var result = await mediator.Send(command, ct);
                return Results.Ok(result);
            }
            ).WithTags("Books");

            app.MapDelete("api/Books/{Id}",async(IMediator mediator, int Id, CancellationToken ct) =>
            {
                var command = new DeleteBooksCommand(Id);
                var result = await mediator.Send(command, ct);
                return Results.Ok(result);

            }).WithTags("Books");


        }
            
    }
}
