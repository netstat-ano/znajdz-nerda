const Radio = (props) => {
    const onChangeHandler = (event) => {
        props.onChangeHandler(event.target.value);
    };
    return (
        <label>
            <input
                onChange={onChangeHandler}
                type="radio"
                name={props.name ? props.name : ""}
                value={props.value ? props.value : ""}
            />
            {props.children}
        </label>
    );
};
export default Radio;
