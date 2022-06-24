import { useMemo } from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
    const { id, setValue, value, setError } = props;
    const validate = useMemo(() => {
        return () => {
            if (id === "email") {
                if (
                    !value.includes("@") &&
                    !value.includes(".") &&
                    !(value.length > 3)
                ) {
                    setError("Nieprawidłowy e-mail");
                    return;
                }
                setError(false);
            } else if (id === "name") {
                if (!(value.trim().length > 0)) {
                    setError(`Imię nie może być puste`);
                    return;
                }
                setError(false);
            } else if (id === "password") {
                if (!(value.trim().length > 5)) {
                    setError("Hasło musi mieć conajmniej 6 znaków");
                    return;
                }
                setError(false);
            } else if (id === "retypePassword") {
                if (!value.trim().length > 5 || props.passwordValue !== value) {
                    setError("Hasła muszą się zgadzać");
                    return;
                }
                setError(false);
            }
        };
    });
    const onInputHandler = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                onBlur={validate}
                onInput={onInputHandler}
                value={props.value}
                className={styles.input}
                name={props.id}
                id={props.id}
            ></input>
        </div>
    );
};
export default Input;
