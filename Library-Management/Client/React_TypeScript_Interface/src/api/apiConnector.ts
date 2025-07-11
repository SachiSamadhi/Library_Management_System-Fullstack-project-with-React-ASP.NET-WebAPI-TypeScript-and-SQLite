import axios, {type  AxiosResponse } from 'axios';
import {API_BASE_URL} from '../config';
import { bookDto } from '../models/bookDto';
import {getBookResponse} from "../models/getBookResponse";

const apiConnector = {

    getBooks: async (): Promise<bookDto[]> => {
        try {
            const response: AxiosResponse<getBookResponse> =
                await axios.get(`${API_BASE_URL}/Books`);

            const Books = response.data.bookDtos.map(book => ({
                ...book,
                createDate: book.createDate?.slice(0.10) ?? ""
            }));
            return Books;

        } catch (error) {
            console.log("Error fetching books:", error);
            throw error;
        }
    },

    createBook: async (book: bookDto): Promise<void> => {
        try {
            await axios.post<number>(`${API_BASE_URL}/Books`, book);

        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    editBook: async (book: bookDto): Promise<void> => {
        try {
            await axios.put<number>(`${API_BASE_URL}/Books/${book.id}`, book);
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

    getBookById: async (id: string): Promise<bookDto | undefined> => {
        try {
            const response: AxiosResponse<bookDto> = await axios.get(`${API_BASE_URL}/Books/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching book by id:", error);
            return undefined;
        }
    }
}
export default apiConnector;




