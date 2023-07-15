import { useState } from "react";
import { Link } from "react-router-dom";
const Explore = () => {
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropLocation, setDropLocation] = useState("");
    const [travelTime, setTravelTime] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [numberOfLuggages, setNumberOfLuggages] = useState("");
    const [numberOfFoodBreaks, setNumberOfFoodBreaks] = useState("");
    const [additionalLocations, setAdditionalLocations] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const handlePickupLocationChange = (event) => {
        setPickupLocation(event.target.value);
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

    const handleNumberOfFoodBreaksChange = (event) => {
        setNumberOfFoodBreaks(event.target.value);
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
            setAdditionalLocations([]);
            setShowPopup(true);
        }
    };

    return (
        <>
            <h1 className="pt-5 pb-5 text-5xl font-bold text-center text-white tracking-2">
                Exploration Package
            </h1>
            <div className="flex items-center justify-center h-screen bg-green-300">
                <div className="p-8 bg-white shadow-md code-container rounded-3xl">
                    <input
                        type="text"
                        placeholder="Pickup Location"
                        value={pickupLocation}
                        onChange={handlePickupLocationChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />
                    {additionalLocations.map((location, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder={`Additional Location ${index + 1}`}
                            value={location}
                            onChange={(event) => {
                                const updatedLocations = [
                                    ...additionalLocations,
                                ];
                                updatedLocations[index] = event.target.value;
                                setAdditionalLocations(updatedLocations);
                            }}
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                        />
                    ))}
                    <button
                        className="add-location-button w-full px-4 py-2 mb-4 bg-black text-white border-none rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-black hover:translate-y-[-2px] hover:shadow-md"
                        onClick={() =>
                            setAdditionalLocations([...additionalLocations, ""])
                        }
                    >
                        Add Location
                    </button>
                    <input
                        type="text"
                        placeholder="Drop Location"
                        value={dropLocation}
                        onChange={handleDropLocationChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Number of People"
                        value={numberOfPeople}
                        onChange={handleNumberOfPeopleChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Number of Luggages"
                        value={numberOfLuggages}
                        onChange={handleNumberOfLuggagesChange}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Number of Food Breaks"
                        value={numberOfFoodBreaks}
                        onChange={handleNumberOfFoodBreaksChange}
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

export default Explore;
