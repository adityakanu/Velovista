import Contact from "../assets/contact.png";
import Elder from "../assets/elderly.png";
import Child from "../assets/kid.png";
import Self from "../assets/self.png";

import { Link } from "react-router-dom";

const IntraBooking = () => {
    return (
        <div className="z-[0]">
            <h1 className="pt-20 pb-10 text-5xl font-bold text-center text-white tracking-2">
                Book A Ride For
            </h1>
            <div className="flex items-center justify-center pt-7 ">
                <div className="grid grid-cols-2 gap-10 pd-auto md:grid-cols-4 lg:grid-cols-4">
                    <div className="group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] --tw-scale-x:5  relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72 ">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 rounded-lg z-[-1] group-hover:rotate-3 group-hover:scale-125"
                                src={Self}
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white font-dmserif">
                                Yourself
                            </h1>
                            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                Book a ride for yourelf. We will make sure that
                                they have a comfortable and safe journey.
                            </p>

                            <Link to="/self">
                                <button className="px-2 py-2 text-sm text-white capitalize bg-green-500 rounded-full shadow font-com shadow-black/60">
                                    Proceed to Booking
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] --tw-scale-x:5  relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72 ">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 rounded-lg z-[-1] group-hover:rotate-3 group-hover:scale-125"
                                src={Child}
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white font-dmserif">
                                Minor
                            </h1>
                            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                Book a ride for your kids. We will make sure
                                that they have a comfortable and safe journey.
                            </p>

                            <Link to="/specialcare">
                                <button className="px-2 py-2 text-sm text-white capitalize bg-green-500 rounded-full shadow font-com shadow-black/60">
                                    Proceed to Booking{" "}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] --tw-scale-x:5  relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72 ">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 rounded-lg z-[-1] group-hover:rotate-3 group-hover:scale-125"
                                src={Contact}
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white font-dmserif">
                                Contact
                            </h1>
                            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                Book a ride for your contact. We will make sure
                                that they have a comfortable journey.
                            </p>

                            <Link to="/contact">
                                <button className="px-2 py-2 text-sm text-white capitalize bg-green-500 rounded-full shadow font-com shadow-black/60">
                                    Proceed to Booking
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  --tw-scale-x:5 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 z-[-1] rounded-lg group-hover:rotate-3 group-hover:scale-125"
                                src={Elder}
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white font-dmserif">
                                Elderly
                            </h1>
                            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                Book a ride for your elderly. We will make sure
                                that they have a comfortable and safe journey.
                            </p>
                            <Link to="/specialcare">
                                {" "}
                                <button className="px-2 py-2 text-sm text-white capitalize bg-green-500 rounded-full shadow font-com shadow-black/60">
                                    Proceed to Booking
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntraBooking;
