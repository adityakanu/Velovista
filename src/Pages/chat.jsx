import { useState } from "react";
import Driver from "../assets/driver.png";
import Send from "../assets/send.png";
import "./chat.css";
import Map from "./map";

export default function Chat() {
    const [message, setMessage] = useState("");

    const handleButtonClick = () => {
        setMessage("I am on my way. Will be there soon!\n Thank you!");
    };

    return (
        <div className="Chat">
            <span className="chatwith">Chat with your driver</span>
            <div className="msgbox">
                <div className="message">
                    <input
                        type="text"
                        className="type"
                        // value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        className="sendbutton"
                        type="button"
                        onClick={handleButtonClick}
                    >
                        <img src={Send} alt="Send" />
                    </button>
                </div>
                <div className="px-10 mt-auto mb-4 text-2xl font-bold text-black rounded-md border-amber-500 font-poppins ">
                    {message}
                </div>
            </div>

            <div className="groupChild">
                <div className="obamaHabibi">Obama Habibi</div>
                <div className="driveExp450km">Drive exp: 450km</div>
                <img className="driver" alt="Driver" src={Driver} />
            </div>
            <Map />
        </div>
    );
}
