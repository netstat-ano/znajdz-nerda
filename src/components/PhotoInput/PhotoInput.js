import Delete from "../Delete/Delete";
import styles from "./PhotoInput.module.scss";
const PhotoInput = (props) => {
    return (
        <div
            style={{
                backgroundImage: `url(${props.photo})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className={styles.photo}
        >
            {props.photo && (
                <Delete id={props.id} onDelete={props.onDeletePhotoHandler} />
            )}
            <div className={styles.flex}>
                <input
                    onInput={props.onUploadPhotoHandler}
                    id="photo1"
                    className={styles["d-none"]}
                    type="file"
                ></input>
                <label htmlFor="photo1">+</label>
            </div>
        </div>
    );
};
export default PhotoInput;
