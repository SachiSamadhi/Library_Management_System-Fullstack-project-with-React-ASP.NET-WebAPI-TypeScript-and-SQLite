
using Library.Domain.Entities;
using Library.Infrastructure;
using MediatR;


namespace Library.Application.Commands.Library.CreateBook;

public class CreateBooksCommandHandler : IRequestHandler<CreateBooksCommand, int>
{

    private readonly LibraryDBContext _libraryDBContext;
    public CreateBooksCommandHandler(LibraryDBContext libraryDBContext)
    
    {
        _libraryDBContext = libraryDBContext;
    }
  public async Task<int> Handle(CreateBooksCommand request, CancellationToken cancellationToken) 
    {
        var books = new Books
        {
            Title = request.Title,
            Author = request.Author,
            Category = request.Category,
            CreateDate = DateTime.Now.ToUniversalTime()
        };
        await _libraryDBContext.Books.AddAsync(books, cancellationToken);
        var Id = await _libraryDBContext.SaveChangesAsync(cancellationToken);

        return Id;
    }
}

