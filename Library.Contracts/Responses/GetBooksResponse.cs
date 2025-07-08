using Library.Contracts.Dtos;

namespace Library.Contracts.Responses;

public record GetBooksResponse(List<BookDto> BookDtos);

