
using MediatR;

namespace Library.Application.Commands.Library.UpdateBook;

public record UpdateBooksCommand(int Id, string Title, string Author, string Category, string Description) : IRequest<Unit>;


