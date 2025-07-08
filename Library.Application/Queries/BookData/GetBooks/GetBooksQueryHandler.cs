

using Library.Contracts.Dtos;
using Library.Contracts.Responses;
using Library.Infrastructure;
using Mapster;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Library.Application.Queries.BookData.GetBooks;

public class GetBooksQueryHandler : IRequestHandler<GetBooksQuery,GetBooksResponse>
{
    private readonly LibraryDBContext _libraryDBContext;
    public GetBooksQueryHandler(LibraryDBContext libraryDBContext)
    {
        _libraryDBContext = libraryDBContext;
    }
    
    public async Task<GetBooksResponse> Handle(GetBooksQuery request, CancellationToken cancellationToken)
    {
        var books = await _libraryDBContext.Books.ToListAsync(cancellationToken);
        return books.Adapt<GetBooksResponse>();
    }
} 