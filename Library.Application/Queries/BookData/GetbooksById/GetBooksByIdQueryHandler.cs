
using Library.Contracts.Exceptions;
using Library.Contracts.Responses;
using Library.Domain.Entities;
using Library.Infrastructure;
using Mapster;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Library.Application.Queries.BookData.GetbooksById;

public class GetBooksByIdQueryHandler : IRequestHandler<GetBooksByIdQuery,GetBooksByIdResponse>
{
    private readonly LibraryDBContext _libraryDBContext;
    public GetBooksByIdQueryHandler(LibraryDBContext libraryDBContext)
    {
        _libraryDBContext = libraryDBContext;
    }


    public async Task<GetBooksByIdResponse> Handle(GetBooksByIdQuery request, CancellationToken cancellationToken)
    {
        var books = await _libraryDBContext.Books.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        if(books is null)
        {
            throw new NotFoundException($"{nameof(Books)} with {nameof(Books.Id)}: {request.Id}" +
                                        $"was not found in database");
        }
        return books.Adapt<GetBooksByIdResponse>();
    }
}
