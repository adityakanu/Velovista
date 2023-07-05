// import background from "../assets/bg-img.png";
import Login from "../componets/login";
import "./home.css";
export default function home() {
    return (
        <section className="h-screen">
            <div className="h-full back">
                <div className="ml-auto mr-20 rounded-xl">
                    <Login />
                </div>
            </div>
        </section>
    );
}
