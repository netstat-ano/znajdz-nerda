import Input from "../Input/Input";
import styles from "./RegisterForm.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/authentication-slice";
import { useState } from "react";
import { useNavigate } from "react-router";
const RegisterForm = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [isEmailError, setIsEmailError] = useState(true);
    const [isNameError, setIsNameError] = useState(true);
    const [isPasswordError, setIsPasswordError] = useState(true);
    const [isRetypePasswordError, setIsRetypePasswordError] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onRegisterHandler = (event) => {
        event.preventDefault();
        if (
            !isEmailError &&
            !isNameError &&
            !isPasswordError &&
            !isRetypePasswordError
        ) {
            dispatch(
                signUp({ email: email, password: password, username: name })
            );
            navigate("../main", { replace: true });
        }
    };
    console.log(isRetypePasswordError);
    return (
        <div className={`${styles.container} ${styles.hop} p-3`}>
            <form onSubmit={onRegisterHandler}>
                <Input
                    isError={isEmailError}
                    setError={setIsEmailError}
                    value={email}
                    setValue={setEmail}
                    id="email"
                    label="E-mail"
                />
                {isEmailError && (
                    <div className={styles.error}>{isEmailError}</div>
                )}
                <Input
                    isError={isNameError}
                    setError={setIsNameError}
                    value={name}
                    setValue={setName}
                    id="name"
                    label="Imie"
                />
                {isNameError && (
                    <div className={styles.error}>{isNameError}</div>
                )}
                <Input
                    isError={isPasswordError}
                    setError={setIsPasswordError}
                    value={password}
                    setValue={setPassword}
                    id="password"
                    label="Hasło"
                />
                {isPasswordError && (
                    <div className={styles.error}>{isPasswordError}</div>
                )}
                <Input
                    passwordValue={password}
                    isError={isRetypePasswordError}
                    setError={setIsRetypePasswordError}
                    value={retypePassword}
                    setValue={setRetypePassword}
                    id="retypePassword"
                    label="Powtórz hasło"
                />
                {isRetypePasswordError && (
                    <div className={styles.error}>{isRetypePasswordError}</div>
                )}
                <Button button={{ type: "submit" }}>Dołącz</Button>
            </form>
        </div>
    );
};
export default RegisterForm;
