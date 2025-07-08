using Library.Contracts.Responses;
using MediatR;


namespace Library.Application.Queries.BookData.GetBooks;

public record GetBooksQuery() : IRequest<GetBooksResponse>;

