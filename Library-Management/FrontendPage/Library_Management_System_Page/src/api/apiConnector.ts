import type { AxiosResponse } from "axios";
import type { BookDto } from "../Models/booksDto.ts";
import type { GetBookResponse } from "../Models/getBookResponse";
import axios from "axios";
import { API_BASE_URL } from "../../config.ts";
import type { GetBookByIdResponse } from "../Models/getBookByIdResponse";

const apiConnector = {

    getBooks: async (): Promise<BookDto[]> => {
        try {
            const response: AxiosResponse<GetBookResponse> =
                await axios.get(`${API_BASE_URL}/Books`);

            const Books = response.data.bookDtos.map(Book => ({
                ...Book,
                    createDate: Book.createDate?.slice(0.10) ?? ""
            }));
            return Books;

        } catch (error) {
            console.log("Error fetching books:", error);
            throw error;
        }
    },

    createBook: async (book: BookDto): Promise<void> => {
        try {
            await axios.post<number>(`${API_BASE_URL}/Books`, book);

        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    editBook: async (book: BookDto): Promise<void> => {
        try {
            await axios.put<number>(`${API_BASE_URL}/Books`, book);
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    deleteBook: async (bookid: number): Promise<void> => {
        try {
            await axios.delete<number>(`${API_BASE_URL}/Books/${bookid}`);
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    getBookById: async (bookid: number): Promise<BookDto | undefined> => {
        try {
            const response = await axios.get<GetBookByIdResponse>(`${API_BASE_URL}/Books/${bookid}`);
            return response.data.bookDtos;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}
export default apiConnector;