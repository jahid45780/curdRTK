import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" bg-slate-200 p-5" >
            <nav className=" flex items-center justify-center gap-2 text-xl font-semibold" >
                <Link to={'/'} > <h1> Home | </h1> </Link>
                <Link to={'/book-view'} > <h1> Show Books | </h1> </Link>
                <Link to={'/add-books'} > <h1> Add Books | </h1> </Link>
            </nav>
        </div>
    );
};

export default Navbar; 