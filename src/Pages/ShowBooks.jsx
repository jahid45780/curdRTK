/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "../feature/BooksSlice";

const ShowBooks = () => {
    // Access state.books because the slice was added as 'books' in the store
    const books = useSelector((state) => state.booksReducer.books); 
    console.log(books);

     const dispatch = useDispatch()

    const handleDeleteBook = (id)=>{
        dispatch(deleteBooks(id))
    }
    
    return (
        <div>
            <h1 className=" text-3xl font-semibold mt-4 text-center" >Show Books</h1>
                 
            <table className="min-w-full divide-y divide-gray-200 shadow-md mt-4">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {books &&
      books.map((book) => {
        const { id, title, author } = book;
        return (
          <tr key={id} className="hover:bg-gray-100 transition-colors">
            <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">{title}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900">{author}</td>
           
           
            <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
              <button className="text-indigo-600 hover:text-indigo-900 px-4 py-2 border border-indigo-600 rounded-md mr-2">Edit</button>
             
             
              <button 
                onClick={()=>{handleDeleteBook(id)}}
              className="text-red-600 hover:text-red-900 px-4 py-2 border border-red-600 rounded-md">Delete</button>
            </td>
          </tr>
        );
      })}
  </tbody>
</table>



        </div>
    );
};

export default ShowBooks;
