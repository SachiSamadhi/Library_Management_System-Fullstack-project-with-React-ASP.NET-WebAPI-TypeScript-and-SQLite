import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, {type ChangeEvent, useEffect, useState} from "react";
import type { bookDto } from "../../models/bookDto";
import apiConnector from "../../api/apiConnector";
import { Button, Form, Segment} from "semantic-ui-react";
import {Box, Link, Typography} from "@mui/material";
import BookTable from "./BookTable";

export default function BookForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState<bookDto | null>(null);
    
    

    useEffect(() => {
        if (id) {
            // Edit mode
            apiConnector.getBookById(id).then(fetchedBook => {
                setBook(fetchedBook ?? null);
            });
        } else {
            // Create mode
            setBook({
                id: undefined,
                title: '',
                author: '',
                category: '',
                createDate: ''
            });
        }
    }, [id]);

    console.log("ID from URL:", id);
    console.log("Book state:", book);
    function handleSubmit() {
        if (!book) return;

        if (!book.id) {
            apiConnector.createBook(book).then(() => navigate('/'));
        } else {
            apiConnector.editBook(book).then(() => navigate('/'));
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setBook(prev => prev ? { ...prev, [name]: value } : prev);
    }

    if (!book) return <div>Loading...</div>;

    return (
        <Segment clearing inverted>
            <Box width="100%">
                <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                  
                
               
           
            <form onSubmit={handleSubmit} autoComplete="off" className="ui inverted form">
                <Form.Input
                    placeholder="Title"
                    name="title"
                    value={book.title}
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder="Author"
                    name="author"
                    value={book.author}
                    onChange={handleInputChange}
                />
                <Form.Input
                    placeholder="Category"
                    name="category"
                    value={book.category}
                    onChange={handleInputChange}
                />
                <Typography fontWeight={300} mt={2}>
                    <Link href="/" underline="hover" sx={{ color: "#fff" }}>
                        Go to Home Page
                    </Link>
                </Typography>


                <Button floated="right" positive type="submit" content="Submit" />
                <Button as={NavLink} to="booktable/" floated="right" type="button" content="Cancel" />
            </form>
        </Typography>
            </Box>
        </Segment>
    );
}
