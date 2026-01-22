import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./layout.css";


export default function Layout() {
    return (
        <div className="page">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                pauseOnHover
                closeOnClick
            />
            <Navbar></Navbar>
            <main className="content">
                <Outlet></Outlet>
            </main>
            
            <Footer></Footer>
        </div>
    )
}