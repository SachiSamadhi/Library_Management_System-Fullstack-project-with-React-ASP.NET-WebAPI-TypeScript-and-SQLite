import {useEffect, useState} from "react";

import {Button, Container} from "semantic-ui-react";

import {NavLink} from "react-router-dom";
import { bookDto } from "../../models/bookDto";
import apiConnector from "../../api/apiConnector";
import BookTableItem from "./BookTableItem";
import {Link, Typography} from "@mui/material";

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
                        
                        
                    </tr>
                    </thead>
                    {book.length !== 0 && (
                        book.map((book, index) => (
                            <BookTableItem key={index} book={book} />
                        ))
                    )}
                </table>
                
                <Button  as={NavLink} to='createBook/' floated="right" type="button" content="Create Book" positive />
            </Container>
            <Typography fontWeight={300} mt={2}>
                <Link href="/" underline="hover" sx={{ color: "#fff" }}>
                    Go to Home Page
                </Link>
            </Typography>
        </>
    )
}