import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { BookDataType } from "../../assets/data";

import BookTrendCard from "../book-card/bookTrend";

interface BookTrendListProps {
  trendingList: BookDataType[];
}

const BookTrendList = ({ trendingList }: BookTrendListProps) => {
  console.log("The trendingList is : ", trendingList);
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {trendingList.map((book) => (
        <Grid item key={book.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <BookTrendCard book={book} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default BookTrendList;
