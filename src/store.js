import { configureStore } from "@reduxjs/toolkit";
import booksReducer  from "./feature/BooksSlice";


const store = configureStore({
    reducer: {
        booksReducer:booksReducer, // Make sure the name matches the state path
    }
});

export default store;