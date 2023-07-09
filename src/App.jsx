import "./App.css";
import Home from "./Pages/home";
import Nav from "./Pages/navbar";
import Chat from "./Pages/chat";
function App() {
    return (
        <main className="h-screen body-font">
        <div className="z-100"></div>
            <Nav />
            <Home />
            {/* <Chat /> */}
        </main>
    );
}

export default App;
