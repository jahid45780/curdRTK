import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";


const Main = () => {
    return (
        <div>

               <div className=" bg-gray-300" >
                <Navbar/>
               </div>

            <Outlet/>
        </div>
    );
};

export default Main;