import Delete from "../Delete/Delete";
import styles from "./PhotoInput.module.scss";
import { forwardRef } from "react";
const PhotoInput = forwardRef((props, ref) => {
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
                    ref={ref}
                    onInput={props.onUploadPhotoHandler}
                    id={`photo${props.id + 1}`}
                    className={styles["d-none"]}
                    type="file"
                ></input>
                <label htmlFor={`photo${props.id + 1}`}>+</label>
            </div>
        </div>
    );
});
export default PhotoInput;
