import { Grid, Paper } from "@mui/material";
import React from "react";
import { BookDataType } from "../../assets/data";

import BookCard from "../book-card";

interface BookListProps {
  recommendList: BookDataType[];
}

const BookList = ({ recommendList }: BookListProps) => {
  console.log("The recommendList is : ", recommendList);
  return (
    <Grid container spacing={2}>
      {recommendList.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <BookCard book={item} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
