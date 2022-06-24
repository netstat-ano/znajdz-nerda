const Button = (props) => {
    return (
        <button
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
            {...props.button}
        >
            {props.children}
        </button>
    );
};
export default Button;
