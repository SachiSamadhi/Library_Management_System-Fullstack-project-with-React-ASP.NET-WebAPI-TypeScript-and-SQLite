using MediatR;

namespace Library.Application.Commands.Library.DeleteBook
{
    public record DeleteBooksCommand(int Id) : IRequest<Unit>;
   
}
