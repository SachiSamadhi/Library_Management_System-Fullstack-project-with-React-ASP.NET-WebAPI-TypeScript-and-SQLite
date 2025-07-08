import type {BookDto} from "./booksDto.ts"

export interface GetBookResponse {
    bookDtos: BookDto[];
} 