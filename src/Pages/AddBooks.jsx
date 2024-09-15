import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../feature/BooksSlice";
import {  useNavigate } from "react-router-dom";

const AddBooks = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const numberOfBooks = useSelector((state) => state.booksReducer.books.length)

    const handleSubmit = (e)=>{
        e.preventDefault();
      const book = { id: numberOfBooks +1, title, author}
       dispatch(addBooks(book))
       navigate('/book-view', {replace:true})
    }

    return (
        <div>
             <form 
               onSubmit={handleSubmit}
             className=" flex justify-center items-center m-2">
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
           className=" w-72 border-2 border-gray-500 mr-3 mt-3"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
          className=" w-72 border-2 border-gray-500 mt-3"
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button className=" btn bg-green-500 p-3 rounded-md ml-3 mt-3" type="submit">Add Book</button>
      </form>
        </div>
    );
};

export default AddBooks;