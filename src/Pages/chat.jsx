import "./chat.css";
import Send from "../assets/send.png";
import Man from "../assets/unsplash_jmURdhtm7Ng.png";
export default function Chat(){
    return (
        <div  className="Chat">
            <span className="chatwith">Chat with your driver</span>
            <div className="msgbox">
            <div className="message">
                <input type="text" className="type"></input>
                <button className="sendbutton" type="button"><img src={Send}/></button>
            </div>
            </div>

            <div className="groupChild">
            <div className="obamaHabibi">Obama Habibi</div>
            <div className="driveExp450km">Drive exp: 450km</div>
            <img
          className="unsplashjmurdhtm7ngIcon1"
          alt=""
          src={Man}
        />
            </div>

        </div>
    )
}
