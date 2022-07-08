import styles from "./Button.module.scss";
const Button = (props) => {
    return (
        <button
            className={` ${styles.button} ${props.className}`}
            {...props.button}
        >
            {props.children}
        </button>
    );
};
export default Button;
