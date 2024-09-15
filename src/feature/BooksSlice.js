import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, title: "Love Bangladesh", author: "Jahid" },
        { id: 2, title: "Hate Bangladesh", author: "Nasri" },
        { id: 3, title: "Girl Love", author: "Apu" },
        { id: 4, title: "Block Boy", author: "Kasem" }
    ]
};

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBooks: (state, action) => {
            const id = action.payload
           state.books = state.books.filter(book => book.id !== id)
        }
    }
});

export const { showBooks, addBooks, deleteBooks } = booksSlice.actions;
export default booksSlice.reducer;
