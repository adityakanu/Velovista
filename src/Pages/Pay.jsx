const fare = Math.floor(Math.random() * 1000) + 1;

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

const displayRazorpay = async (amount) => {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const options = {
        key: "rzp_test_CiUCBMPSUIQMnJ",
        currency: "INR",
        amount: amount * 100,
        name: "VeloVista",
        description: "Test Transaction",
        handler: function (response) {
            alert(response.razorpay_payment_id);
            alert("Ride Booked Successfully");
            alert("OTP" + Math.floor(Math.random() * 10000) + 1);
        },
        prefill: {
            name: "test Kumar",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};

const Box = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-2 width-[5rem]">
            <div className="mb-2 text-xl font-bold sm:text-2xl ridedetails">
                Ride Details
            </div>

            <p>Away: {Math.floor(Math.random() * 10) + 1} km</p>
            <p>Arrival: {Math.floor(Math.random() * 100) + 1} mins</p>

            <button
                onClick={() =>
                    displayRazorpay(Math.floor(Math.random() * 1000) + 1)
                }
                className="items-center justify-center px-4 py-2 mt-auto font-bold text-white bg-green-500 rounded-full hover:bg-red-500"
            >
                Book
            </button>
        </div>
    );
};

const BoxContainer = () => {
    const smallScreenBoxes = [];

    for (let i = 0; i < 5; i++) {
        smallScreenBoxes.push(
            <div className="w-1/2 sm:flex" key={i}>
                <Box />
            </div>
        );
    }

    return (
        <>
            <h1 className="pb-2 text-2xl font-bold text-center text-white tracking-2">
                Let The System Allot You A Ride
            </h1>
            <div className="flex items-center justify-center ">
                <button
                    onClick={() => displayRazorpay(fare)}
                    className="px-4 py-2 mt-auto font-bold text-white rounded-full bg-mint hover:bg-red-500"
                >
                    Book
                </button>
            </div>
            <h1 className="pt-2 text-2xl font-bold text-center text-white tracking-2">
                Choose Your Ride with the best fare
            </h1>
            <div className="flex flex-wrap">
                {/* For large screens (5 boxes in a row) */}
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>
                <div className="hidden w-1/5 sm:flex">
                    <Box />
                </div>

                {/* For small screens (2 boxes in a row) */}
                <div className="w-1/2 sm:hidden">{smallScreenBoxes}</div>
                <div className="w-1/2 sm:hidden">{smallScreenBoxes}</div>
            </div>
        </>
    );
};

function Pay() {
    return (
        <div className="container p-4 mx-auto">
            <BoxContainer />
        </div>
    );
}

export default Pay;
