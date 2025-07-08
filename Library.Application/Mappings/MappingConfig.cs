using Library.Contracts.Responses;
using Library.Domain.Entities;
using Mapster;

namespace Library.Application.Mappings;

public class MappingConfig
{
    public static void Configure()
    {
        TypeAdapterConfig<List<Books>, GetBooksResponse>.NewConfig()
                 .Map(dest => dest.BookDtos, src => src);

        TypeAdapterConfig<Books, GetBooksByIdResponse>.NewConfig()
            .Map(dest => dest.BookDto, src => src);
    }
 }

