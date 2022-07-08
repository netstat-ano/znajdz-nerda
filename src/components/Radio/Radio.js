const Radio = (props) => {
    return (
        <label>
            <input
                type="radio"
                name={props.name ? props.name : ""}
                value={props.value ? props.value : ""}
            />
            {props.children}
        </label>
    );
};
export default Radio;
