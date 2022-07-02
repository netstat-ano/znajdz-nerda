import styles from "./Delete.module.scss";
const Delete = (props) => {
    const onDeleteHandler = () => {
        props.onDelete({ id: props.id });
    };
    return (
        <div className={styles.container}>
            <div onClick={onDeleteHandler} className={styles.plus}>
                X
            </div>
        </div>
    );
};
export default Delete;
