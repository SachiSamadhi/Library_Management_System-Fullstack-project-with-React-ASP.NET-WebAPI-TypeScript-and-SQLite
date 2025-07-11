import React, { useState, SetStateAction, useContext } from "react";
import Layout from "../../Layout";
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import { BookDataType } from "../../assets/data";
import { BookContext } from "../../context/book-context";
import BookTable from "../../components/Books/BookTable";
import MovieList from "../../components/movie-list";





const Bookmark = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<BookDataType[]>([]);
  const { state } = useContext(BookContext);
  const { books } = state;
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
      const newList = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search "
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
        <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
               Create New Books Inputs
            </Typography>
            < BookTable />
        </Box>
    </Layout>
      
          
      
        

  
  );
};

export default Bookmark;
