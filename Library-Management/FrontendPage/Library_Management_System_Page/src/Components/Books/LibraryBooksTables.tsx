import { useEffect, useState } from "react";
import type { BookDto } from "../../Models/booksDto";
import apiConnector from "../../api/apiConnector";
import { Container, Button } from "semantic-ui-react";
import LibraryBooksItem from "./LibraryBooksItem.js"


export default function LibraryBooksTables() {

    const [book, setBook] = useState<BookDto[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const fetchedBooks = await apiConnector.getBooks();
            setBook(fetchedBooks);
        }

        fetchBooks();
    }, []);


    return (
        <>
            <Container className="container-style">
                <table className="ui inverted table">
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th>Id</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>CreateDate</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {book.length !== 0 && (
                        book.map((book, index) => (
                            <LibraryBooksItem key={index} book={book} />
                        ))
                    )}
                    <tbody>



                    </tbody>
                </table>
                <Button  floated="right" type="button" content="Create Book" positive />

            </Container>
        </>
    )
}