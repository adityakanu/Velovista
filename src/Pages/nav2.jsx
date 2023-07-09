import logo from "../assets/logo.svg";
import Man from "../assets/unsplash_jmURdhtm7Ng.png";
import "./chat.css";
export default function nav2() {
    return (
        <section className="sticky top-0 font-sans">
            <nav className="flex flex-row p-4 bg-mint">
                <ul>
                    <img
                        src={logo}
                        className="px-5 py-2 mt-1"
                        alt="Velovista"
                    />
                </ul>
                <ul className="Options flex flex-row py-2">
                    <li className="mr-4">Company</li>
                    <li className="mr-4">Safety</li>
                    <li className="mr-4">Help</li>
                </ul>
                <ul className="flex flex-row pt-1.5 ml-auto ">
                    <li className="mt-1 mr-4">
                        {/* <button className="font-serif ">Login</button> */}
                        {/* <img className="user" alt="" src={Man} /> */}
                    </li>
                    <li className="mr-4">
                        <button className="px-3 py-1 font-serif text-white bg-black rounded-full ">
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
