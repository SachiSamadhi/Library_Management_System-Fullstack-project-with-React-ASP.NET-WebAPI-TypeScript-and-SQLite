import type { BookDto } from "./booksDto.ts"

export interface GetBookByIdResponse {
    bookDtos: BookDto;
}