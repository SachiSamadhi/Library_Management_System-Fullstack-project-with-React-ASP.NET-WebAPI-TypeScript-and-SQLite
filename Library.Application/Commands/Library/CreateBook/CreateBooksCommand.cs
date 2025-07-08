
using MediatR;

namespace Library.Application.Commands.Library.CreateBook;

public record CreateBooksCommand(string Title, string Author, string Category,string Description) : IRequest<int>;


