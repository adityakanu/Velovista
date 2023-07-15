import { useState } from "react";
import { Link } from "react-router-dom";

const Conatct = () => {
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropLocation, setDropLocation] = useState("");
    const [travelTime, setTravelTime] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [numberOfLuggages, setNumberOfLuggages] = useState("");
    const [numberOfFoodBreaks, setNumberOfFoodBreaks] = useState("");
    const [intermediatelocation, setVia] = useState("");
    const [contactinfo, setContactinfo] = useState("");

    const [showPopup, setShowPopup] = useState(false);

    const handlePickupLocationChange = (event) => {
        setPickupLocation(event.target.value);
    };
    const handleViaChange = (event) => {
        setVia(event.target.value);
    };
    const handleContactinfoChange = (event) => {
        setContactinfo(event.target.value);
    };
    const handleDropLocationChange = (event) => {
        setDropLocation(event.target.value);
    };

    const handleNumberOfPeopleChange = (event) => {
        setNumberOfPeople(event.target.value);
    };

    const handleNumberOfLuggagesChange = (event) => {
        setNumberOfLuggages(event.target.value);
    };

    const handleStartJourney = () => {
        if (
            pickupLocation.trim() === "" ||
            dropLocation.trim() === "" ||
            numberOfPeople.trim() === "" ||
            numberOfLuggages.trim() === "" ||
            numberOfFoodBreaks.trim() === ""
        ) {
            setShowPopup(false);
        } else {
            // Simulate travel time calculation (random time between 1 and 5 hours)
            const randomTime = Math.floor(Math.random() * 5) + 1;
            setTravelTime(randomTime);

            setPickupLocation("");
            setDropLocation("");
            setNumberOfPeople("");
            setNumberOfLuggages("");
            setNumberOfFoodBreaks("");

            setShowPopup(true);
        }
    };

    return (
        <>
            <h1 className="pt-5 pb-5 text-5xl font-bold text-center text-white tracking-2">
                Book Ride for Contact
            </h1>
            <div className="flex items-center justify-center ">
                <div className="p-8 bg-white shadow-md code-container rounded-3xl">
                    <input
                        type="text"
                        placeholder="Pickup Location"
                        value={pickupLocation}
                        onChange={handlePickupLocationChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />

                    <input
                        type="text"
                        placeholder="Via"
                        value={intermediatelocation}
                        onChange={handleViaChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />

                    <input
                        type="text"
                        placeholder="Drop Location"
                        value={dropLocation}
                        onChange={handleDropLocationChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Conatct Information"
                        value={contactinfo}
                        onChange={handleContactinfoChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Stopage Time at intermediate locations"
                        value={numberOfPeople}
                        onChange={handleNumberOfPeopleChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Number of People"
                        value={numberOfLuggages}
                        onChange={handleNumberOfLuggagesChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />

                    <button
                        onClick={handleStartJourney}
                        className="w-full px-4 py-2 bg-orange-500 text-white border-none rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-orange-600 hover:translate-y-[-2px] hover:shadow-md"
                    >
                        Book Cab
                    </button>

                    {travelTime && (
                        <div className="mt-4 font-bold text-gray-700 travel-time">
                            Estimated Travel Time: {travelTime} hours
                        </div>
                    )}

                    {showPopup && (
                        <Link to="/pay">
                            <div className="px-8 py-4 mt-4 text-lg text-center text-white bg-blue-500 rounded-md shadow-md popup">
                                Thanks for Choosing Us! Proceed to Driver
                                Booking
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default Conatct;
