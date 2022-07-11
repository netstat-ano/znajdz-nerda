import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { database } from "../../firebase";
import { ref, update } from "firebase/database";
const Age = (props) => {
    const user = useSelector((state) => state.authentication.user);
    const [inputValue, setInputValue] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (inputValue && inputValue >= 18) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [inputValue]);
    const onSubmitHandler = (event) => {
        event.preventDefault();

        const updates = {};
        updates[`users/${user.uid}/age`] = inputValue;
        update(ref(database), updates);
        props.setStep("gender");
    };
    const onInputHandler = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                Mam
                <input
                    onInput={onInputHandler}
                    value={inputValue}
                    type="number"
                ></input>
                lat
            </div>
            <div>
                <Button button={{ type: "submit", disabled: isDisabled }}>
                    Dalej
                </Button>
            </div>
        </form>
    );
};
export default Age;
