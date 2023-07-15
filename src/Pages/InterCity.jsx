import img2 from "../assets/Group.png";
import img1 from "../assets/explore.png";

import { Link } from "react-router-dom";

const Inter = () => {
    return (
        <div className="z-[0]">
            <h1 className="pt-20 pb-10 text-5xl font-bold text-center text-white tracking-2">
                Select Your Plan
            </h1>
            <div className="flex items-center justify-center pt-7 ">
                <div className="grid grid-cols-2 gap-10 pd-auto md:grid-cols-2 lg:grid-cols-2">
                    <div className="group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] --tw-scale-x:5  relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72 ">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 rounded-lg z-[-1] group-hover:rotate-3 group-hover:scale-125"
                                src={img2}
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white font-dmserif">
                                Pick n Drop
                            </h1>
                            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                Book a ride in the most simple way. We will make
                                sure that you have a comfortable and safe
                                journe.
                            </p>

                            <Link to="/pickndrop">
                                <button className="px-2 py-2 text-sm text-white capitalize bg-green-500 rounded-full shadow font-com shadow-black/60">
                                    Proceed to Booking{" "}
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="group shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  --tw-scale-x:5 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                                className="h-full w-full object-cover transition-transform duration-500 z-[-1] rounded-lg group-hover:rotate-3 group-hover:scale-125"
                                src={img1}
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="text-3xl font-bold text-white font-dmserif">
                                Exploration
                            </h1>
                            <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                Explore the city with us. We will make sure that
                                you have a comfortable and safe journey.
                            </p>
                            <Link to="/explore">
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

export default Inter;
