
using Library.Contracts.Exceptions;
using Library.Domain.Entities;
using Library.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Library.Application.Commands.Library.DeleteBook
{
    public class DeleteBooksCommandHandler : IRequestHandler<DeleteBooksCommand,Unit>

    {
        private readonly LibraryDBContext _libraryDBContext;
        public DeleteBooksCommandHandler(LibraryDBContext libraryDBContext)
        {
            _libraryDBContext = libraryDBContext;
        }
        public async Task<Unit> Handle(DeleteBooksCommand request, CancellationToken cancellationToken)
        {
            var bookToDelete = await _libraryDBContext.Books.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
            if(bookToDelete is null)
            {
                throw new NotFoundException($"{nameof(Books)} with {nameof(Books.Id)}: {request.Id}" +
                                       $"was not found in database");
            }
            _libraryDBContext.Books.Remove(bookToDelete);
            await _libraryDBContext.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}
