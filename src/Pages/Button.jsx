const Button = (props) => {
    return (
        <button className="bg-black text-white font-[Poppins] py-2 px-6 rounded-lg md:ml-8 hover:bg-white hover:text-black transition-all duration-500">
            {props.children}
        </button>
    );
};

export default Button;
