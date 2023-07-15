import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Conatct from "./Pages/Contact";
import Inter from "./Pages/InterCity";
import Minor from "./Pages/Minor";
import Nav from "./Pages/Nav";
import Pay from "./Pages/Pay.jsx";
import Select from "./Pages/Select";
import Buffer from "./Pages/buffer.jsx";
import Chat from "./Pages/chat.jsx";
import Explore from "./Pages/explore.jsx";
import Home from "./Pages/home";
import Login from "./Pages/home.jsx";
import IntraBooking from "./Pages/intrabook";
import Map from "./Pages/map.jsx";
import Pick from "./Pages/pickndrop";
import Self from "./Pages/selfride";
import ProfileCard from "./components/profileCard.jsx";
import Signup from "./components/signup.jsx";
export default function App() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back ">
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <Home />
                                </div>
                            </section>
                        }
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<ProfileCard />} />
                    {/* <Route path="/map" element={<Map />} /> */}
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/book" element={<Buffer />} />
                    <Route
                        path="/select"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back">
                                    <Nav />
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <Select />
                                </div>
                            </section>
                        }
                    />
                    <Route
                        path="/pay"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back">
                                    <Nav />
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <Pay />
                                </div>
                            </section>
                        }
                    />
                    <Route
                        exact
                        path="/contact"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back ">
                                    <Nav />
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <Conatct />
                                </div>
                            </section>
                        }
                    />
                    <Route
                        exact
                        path="/specialcare"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back ">
                                    <Nav />
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <Minor />
                                </div>
                            </section>
                        }
                    />
                    <Route
                        exact
                        path="/intercity"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back ">
                                    <Nav />
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <Inter />
                                </div>
                            </section>
                        }
                    />

                    <Route
                        exact
                        path="/intrabook"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back ">
                                    <Nav />
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <IntraBooking />
                                </div>
                            </section>
                        }
                    />
                    <Route
                        exact
                        path="/explore"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back ">
                                    <Nav />
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <Explore />
                                </div>
                            </section>
                        }
                    />
                    <Route
                        exact
                        path="/pickndrop"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back ">
                                    <Nav />
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <Pick />
                                </div>
                            </section>
                        }
                    />
                    <Route
                        exact
                        path="/self"
                        element={
                            <section className="h-screen ">
                                <div className="h-full back ">
                                    <Nav />
                                    <div className="items-center justify-center pl-auto pr-auto"></div>
                                    <Self />
                                </div>
                            </section>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
