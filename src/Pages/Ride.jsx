import { useEffect, useState } from "react";

function RideBooking() {
    const [userType, setUserType] = useState("self");
    const [negotiationType, setNegotiationType] = useState("normal");
    const [formData, setFormData] = useState({
        pickLocation: "",
        destination: "",
        intermediateLocation: "",
        stopTime: "",
        extraInfo: "",
        contact: "",
    });
    const [vehicleType, setVehicleType] = useState("car");
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupNegotiationVisible, setPopupNegotiationVisible] =
        useState(false);

    useEffect(() => {
        const storedFormData = localStorage.getItem("formData");
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
        const storedVehicleType = localStorage.getItem("vehicleType");
        if (storedVehicleType) {
            setVehicleType(storedVehicleType);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        localStorage.setItem("vehicleType", vehicleType);
    }, [vehicleType]);

    const handleUserTypeChange = (event) => {
        const value = event.target.value;
        setUserType(value);
        if (value === "child" || value === "elderly") {
            setFormData((prevData) => ({
                ...prevData,
                extraInfo: "",
                contact: "",
            }));
        } else if (value === "contact") {
            setFormData((prevData) => ({
                ...prevData,
                extraInfo: "",
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                extraInfo: "",
                contact: "",
            }));
        }
    };

    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleBookRide = () => {
        console.log("Booking the ride...");
        const { riderName, paymentAmount } = formData;
        if (negotiationType === "normal") {
            document.getElementById("rider-name").textContent =
                "Driver Name: " + riderName;
            document.getElementById("payment-amount").textContent =
                "Payment Amount: " + paymentAmount;
            setPopupVisible(true);
        } else if (negotiationType === "negotiation") {
            document.getElementById("rider-name-negotiation").textContent =
                "Driver Name (Negotiation): " + riderName;
            document.getElementById("payment-amount-negotiation").textContent =
                "Payment Amount (Negotiation): " + paymentAmount;
            setPopupNegotiationVisible(true);
        }
    };

    const handleBookRideConfirmed = () => {
        setPopupVisible(false);
        setPopupNegotiationVisible(false);
        setFormData((prevData) => ({
            ...prevData,
            riderName: "",
            paymentAmount: "",
        }));
    };

    const handleCancelForm = () => {
        setFormData({
            pickLocation: "",
            destination: "",
            intermediateLocation: "",
            stopTime: "",
            extraInfo: "",
            contact: "",
        });
    };

    return (
        <div className="bg-gray-100">
            <header className="p-4 text-white bg-green-400">
                <div className="container flex items-center justify-between mx-auto">
                    <img src="./logo.svg" alt="ll" />
                    <div className="relative">
                        <select
                            id="user-type"
                            className="block w-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                            value={userType}
                            onChange={handleUserTypeChange}
                        >
                            <option value="self">Self</option>
                            <option value="child">Child</option>
                            <option value="contact">Contact</option>
                            <option value="elderly">Elderly</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                            <svg
                                className="w-4 h-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 12h2.83l-5.66 5.66-1.41-1.41L10 9.17V12z" />
                            </svg>
                        </div>
                    </div>
                    <select
                        id="negotiation-type"
                        className="block px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                        value={negotiationType}
                        onChange={(event) =>
                            setNegotiationType(event.target.value)
                        }
                    >
                        <option value="normal">Normal</option>
                        <option value="negotiation">Negotiation</option>
                    </select>
                </div>
            </header>
            <h1 className="pt-4 text-xl font-bold text-center">Ride Booking</h1>
            <main className="container mx-auto my-8">
                <form onSubmit={(event) => event.preventDefault()}>
                    <div className="flex mb-4 space-x-4">
                        <div className="w-1/2">
                            <label
                                className="block mb-2 font-bold text-gray-700"
                                htmlFor="pick-location"
                            >
                                Pick Location
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                                id="pick-location"
                                type="text"
                                value={formData.pickLocation}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                className="block mb-2 font-bold text-gray-700"
                                htmlFor="destination"
                            >
                                Destination
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                                id="destination"
                                type="text"
                                value={formData.destination}
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            className="block mb-2 font-bold text-gray-700"
                            htmlFor="intermediate-location"
                        >
                            Via
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                            id="intermediate-location"
                            type="text"
                            value={formData.intermediateLocation}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div>
                        <label
                            className="block mb-2 font-bold text-gray-700"
                            htmlFor="stop-time"
                        >
                            Stop Time at Intermediate Location
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                            id="stop-time"
                            type="text"
                            value={formData.stopTime}
                            onChange={handleFormChange}
                        />
                    </div>
                    {userType === "child" || userType === "elderly" ? (
                        <div id="additional-info">
                            <label
                                className="block mb-2 font-bold text-gray-700"
                                htmlFor="extra-info"
                            >
                                Additional Information
                            </label>
                            <textarea
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                                id="extra-info"
                                rows="4"
                                value={formData.extraInfo}
                                onChange={handleFormChange}
                            ></textarea>
                        </div>
                    ) : null}
                    {userType === "contact" ? (
                        <div id="contact-info">
                            <label
                                className="block mb-2 font-bold text-gray-700"
                                htmlFor="contact"
                            >
                                Contact Information
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                                id="contact"
                                type="text"
                                value={formData.contact}
                                onChange={handleFormChange}
                            />
                        </div>
                    ) : null}
                    <div className="flex mb-4 space-x-4">
                        <div className="w-1/2">
                            <label
                                className="block mb-2 font-bold text-gray-700"
                                htmlFor="vehicle-type"
                            >
                                Choose Vehicle
                            </label>
                            <select
                                id="vehicle-type"
                                className="w-full px-4 py-2 bg-white border border-gray-300 rounded"
                                value={vehicleType}
                                onChange={(event) =>
                                    setVehicleType(event.target.value)
                                }
                            >
                                <option value="car">Car</option>
                                <option value="bus">Bus</option>
                                <option value="suv">SUV</option>
                                <option value="two-wheeler">Two-Wheeler</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>
                    </div>
                    <button
                        className="px-4 py-2 mt-4 font-bold text-white bg-black rounded hover:bg-white hover:text-black"
                        type="submit"
                        onClick={handleBookRide}
                    >
                        Book Ride
                    </button>
                    <button
                        className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-white hover:text-red-500"
                        type="button"
                        onClick={handleCancelForm}
                    >
                        Cancel
                    </button>
                </form>
                {popupVisible ? (
                    <div
                        id="popup"
                        className="fixed inset-0 flex items-center justify-center"
                    >
                        <div className="p-6 bg-white rounded shadow-lg">
                            <h2 className="mb-2 text-xl font-bold">
                                Ride Details
                            </h2>
                            <div id="rider-name" className="mb-4"></div>
                            <div id="payment-amount" className="mb-4"></div>
                            <div className="flex justify-end">
                                <button
                                    className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
                                    onClick={() => setPopupVisible(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
                                    onClick={handleBookRideConfirmed}
                                >
                                    Book
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
                {popupNegotiationVisible ? (
                    <div
                        id="popup-negotiation"
                        className="fixed inset-0 flex items-center justify-center"
                    >
                        <div className="p-6 bg-white rounded shadow-lg">
                            <h2 className="mb-2 text-xl font-bold">
                                Ride Details (Negotiation)
                            </h2>
                            <div
                                id="rider-name-negotiation"
                                className="mb-4"
                            ></div>
                            <div
                                id="payment-amount-negotiation"
                                className="mb-4"
                            ></div>
                            <div className="flex justify-end">
                                <button
                                    className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
                                    onClick={() =>
                                        setPopupNegotiationVisible(false)
                                    }
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
                                    onClick={handleBookRideConfirmed}
                                >
                                    Book
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </main>
        </div>
    );
}

export default RideBooking;
