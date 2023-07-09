import Login from "../components/login";
import Navbar from "../Pages/navbar";
import "./home.css";
export default function home() {
    return (
        <section className="h-screen">
            <div className="h-full back ">
                <Navbar />
                <Login />
            </div>
        </section>
    );
}
