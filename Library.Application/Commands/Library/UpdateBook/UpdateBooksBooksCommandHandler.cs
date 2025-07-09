
using Library.Contracts.Exceptions;
using Library.Domain.Entities;
using Library.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Library.Application.Commands.Library.UpdateBook;

public class UpdateBooksBooksCommandHandler : IRequestHandler<UpdateBooksCommand, Unit>
{

    private readonly LibraryDBContext _libraryDBContext;
    public UpdateBooksBooksCommandHandler(LibraryDBContext libraryDBContext)
    {
        _libraryDBContext = libraryDBContext;
    }
    public async Task<Unit> Handle(UpdateBooksCommand request, CancellationToken cancellationToken)
    {
        var bookToUpdate = await _libraryDBContext.Books.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        if (bookToUpdate is null)
        {
            throw new NotFoundException($"{nameof(Books)} with {nameof(Books.Id)}: {request.Id}" +
                                       $"was not found in database");
        }
        bookToUpdate.Title = request.Title;
        bookToUpdate.Author = request.Author;
        bookToUpdate.Category = request.Category;
        

        _libraryDBContext.Books.Update(bookToUpdate);
        await _libraryDBContext.SaveChangesAsync(cancellationToken);

        return Unit.Value;
    }
}
