import { Button } from "semantic-ui-react";
import type { BookDto } from "../../Models/booksDto"
import apiConnector from "../../api/apiConnector";

interface Props {
    book: BookDto;
}



export default function LibraryBooksItem({ book }: Props) {
    return (
        <>
            <tr className="center aligned">
                <td data-label="Id">{book.id}</td>
                <td data-label="Title">{book.title}</td>
                <td data-label="Author">{book.author}</td>
                <td data-label="Description">{book.description}</td>
                <td data-label="CreateDate">{book.createDate}</td>
                <td data-label="Category">{book.category}</td>
                <td data-label="Action">
                    <Button  color="yellow" type="submit">
                        Edit
                    </Button>
                    <Button type="button" negative onClick={async () => {
                        await apiConnector.deleteBook(book.id!);
                        window.location.reload();
                    }}>
                        Delete
                    </Button>
                </td>
            </tr>


        </>
    )
}