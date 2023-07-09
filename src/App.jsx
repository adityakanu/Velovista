import "./App.css";
import Home from "./Pages/home";
import Nav2 from "./Pages/nav2";
import Chat from "./Pages/chat";
function App() {
    return (
        <main className="h-screen body-font">
            <Nav2 />
            {/* <Home /> */}
            <Chat />
        </main>
    );
}

export default App;
