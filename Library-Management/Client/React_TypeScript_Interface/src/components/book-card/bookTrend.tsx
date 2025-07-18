import React, { useContext } from "react";
import { BookDataType } from "../../assets/data";

import { Box, Card, CardContent, Stack, Typography, Grid } from "@mui/material";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";
import { BookContext } from "../../context/book-context";

interface BookTrendCardProps {
  book: BookDataType;
}

const BookTrendCard = ({ book }: BookTrendCardProps) => {
  const { dispatch } = useContext(BookContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOOGLE BOOKMARK", id });
  };

  return (
      <Card
          key={book.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
              <img
                  src={book.thumbnail.regular.large}
          alt=""
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0,0,0,0.6)"
          borderRadius="8px"
        />
        <Stack
          mt="6"
          spacing={0}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
          <Grid container alignItems="center" spacing={1}>
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
                  width: "1rem",
                  height: "1rem",
                  bg: "#E0E0E0",
                  borderRadius: "full",
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
                  width: "1rem",
                  height: "1rem",
                  bg: "#E0E0E0",
                  borderRadius: "full",
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
          <Typography color="#E0E0E0" padding={0} aria-label="book title">
            {book.title}
          </Typography>
        </Stack>
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              p: "1rem",
              backgroundColor: "black",
              borderRadius: "100%",
              cursor: "pointer",
              "&: hover": { opacity: 0.8 },
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
      </CardContent>
    </Card>
  );
};

export default BookTrendCard;
