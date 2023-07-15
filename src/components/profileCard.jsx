import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Pages/Nav";
import profilePhoto from "../assets/profile.svg";
import "./profile.css";
const ProfileCard = () => {
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [negotiationsEnabled, setNegotiationsEnabled] = useState(false);

    const navigate = useNavigate();
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // Perform profile submission logic here
    };

    const handlePictureUpload = (e) => {
        // Handle picture upload logic here
    };

    return (
        <section className="h-screen">
            <Navbar />
            <div className="h-full back ">
                <section className="card">
                    <div className="px-6 bg-transparent rounded-lg shadow-md">
                        <form onSubmit={handleProfileSubmit}>
                            <img
                                className="relative w-40 h-40 mx-auto rounded-full shadow-lg -top-20"
                                src={profilePhoto}
                                alt="Dummy Pic"
                            />
                            <div>
                                {/* Picture Upload */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="mb-4"
                                    onChange={handlePictureUpload}
                                />
                            </div>
                            <div>
                                {/* Full Name */}
                                <label
                                    htmlFor="fullName"
                                    className="block mb-2"
                                >
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                {/* Date of Birth */}
                                <label htmlFor="dob" className="block mb-2">
                                    Date of Birth:
                                </label>
                                <input
                                    type="date"
                                    id="dob"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                {/* Gender */}
                                <label htmlFor="gender" className="block mb-2">
                                    Gender:
                                </label>
                                <select
                                    id="gender"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                {/* Negotiations Toggle Button */}
                                <label
                                    htmlFor="negotiations"
                                    className="flex items-center"
                                >
                                    <input
                                        type="checkbox"
                                        id="negotiations"
                                        className="mr-2"
                                        checked={negotiationsEnabled}
                                        onChange={() =>
                                            setNegotiationsEnabled(
                                                !negotiationsEnabled
                                            )
                                        }
                                    />
                                    <span>Enable Negotiations</span>
                                </label>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    onClick={navigate("/book")}
                                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                >
                                    Create Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ProfileCard;
