
using Library.Contracts.Responses;
using MediatR;

namespace Library.Application.Queries.BookData.GetbooksById;

public record GetBooksByIdQuery(int Id) : IRequest<GetBooksByIdResponse>;

