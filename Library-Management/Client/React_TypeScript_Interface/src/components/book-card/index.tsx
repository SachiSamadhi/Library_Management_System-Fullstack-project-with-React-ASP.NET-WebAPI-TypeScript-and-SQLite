import React, { useContext } from "react";
import { BookDataType } from "../../assets/data";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";
import { BookContext } from "../../context/book-context";

interface BookCardProps {
  book: BookDataType;
}

const BookCard = ({ book }: BookCardProps) => {
  const { dispatch } = useContext(BookContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };
  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "transparent", color: "#E0E0E0", my: 3, border: "none" }}
    >
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={book.thumbnail.regular.large}
              alt=""
              style={{ width: "400px", height: "180px", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="year of book"
                >
                 {book.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
               
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="book category"
                >
                 {book.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="book rating"
                >
                  {book.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography aria-label=" book rating" padding={0}>
              {book.title}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ position: "absolute", top: 0, right: 0 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: "1rem",
              }}
            >
              <Box
                sx={{
                  p: "1rem",
                  backgroundColor: "black",
                  borderRadius: "100%",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
                onClick={() => handleToggleBookmark(book.id)}
              >
                {book.isBookmarked ? (
                  <BookmarkIcon fill={"#E0E0E0"} />
                ) : (
                  <BookmarkEmptyIcon />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BookCard;
