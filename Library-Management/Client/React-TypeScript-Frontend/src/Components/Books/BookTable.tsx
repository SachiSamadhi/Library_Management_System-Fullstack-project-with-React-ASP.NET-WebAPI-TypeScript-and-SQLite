import {useEffect, useState} from "react";
import type {bookDto} from "../../models/bookDto.ts";
import apiConnector from "../../api/apiConnector.ts";
import {Button, Container} from "semantic-ui-react";
import BookTableItem from "./BookTableItem.tsx";
import {NavLink} from "react-router-dom";

export default function LibraryBooksTables() {

    const [book, setBook] = useState<bookDto[]>([]);

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
                        <th>Category</th>
                        <th>CreateDate</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {book.length !== 0 && (
                        book.map((book, index) => (
                            <BookTableItem key={index} book={book} />
                        ))
                    )}
                </table>
                <Button  as={NavLink} to="createBook" floated="right" type="button" content="Create Book" positive />
            </Container>
        </>
    )
}