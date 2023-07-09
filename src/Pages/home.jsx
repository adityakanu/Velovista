// import background from "../assets/bg-img.png";

import Login from "../componets/login";
import "./home.css";
export default function home() {
    return (
        <section className="h-screen">
            <div className="h-full back ">
                {/* <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"> */}
                    <Login />
                {/* </div> */}
            </div>
        </section>
    );
}
