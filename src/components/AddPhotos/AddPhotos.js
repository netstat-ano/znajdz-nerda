import styles from "./AddPhotos.module.scss";
import Delete from "../Delete/Delete";
import { storage } from "../../firebase";
import { deleteObject } from "firebase/storage";
import { uploadBytes, ref as sRef, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const AddPhotos = (props) => {
    const user = useSelector((state) => state.authentication.user);
    const [photos, setPhotos] = useState(["", "", "", "", "", "", "", "", ""]);
    useEffect(() => {
        const fetchPhotos = async () => {
            for (let i = 1; i < 10; i++) {
                let photo;
                try {
                    photo = await getDownloadURL(
                        sRef(storage, `${user.uid}/photo${i}.jpg`)
                    );
                } catch {
                    break;
                }
                for (const index of photos) {
                    setPhotos((prevState) => {
                        prevState[index] = photo;
                        return [...prevState];
                    });
                }
            }
        };
        fetchPhotos();
    }, []);
    const onDeletePhotoHandler = (data) => {
        const { id } = data;
        const photoRef = sRef(storage, `${user.uid}/photo${id + 1}`);
        deleteObject(photoRef);
        setPhotos((prevState) => {
            prevState[id] = "";
            return [...prevState];
        });
    };
    const onUploadPhotoHandler = async (event) => {
        const { target } = event;
        let idNumber = Number(target.id[target.id.length]);
        for (const element of photos) {
            if (element === "") {
                idNumber = photos.indexOf(element);
                break;
            }
        }
        const storageRef = sRef(storage, `${user.uid}/photo${idNumber + 1}`);
        await uploadBytes(storageRef, target.files[0]);
        setPhotos((prevState) => {
            prevState[idNumber] = window.URL.createObjectURL(target.files[0]);
            return [...prevState];
        });
    };
    return (
        <div>
            <div>Czekaj stop, najpierw dodaj co najmniej jedno zdjęcie</div>
            <div className={styles["photo-container"]}>
                <div
                    style={{
                        backgroundImage: `url(${photos[0]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={styles.photo}
                >
                    {photos[0] && (
                        <Delete id={0} onDelete={onDeletePhotoHandler} />
                    )}
                    <div className={styles.flex}>
                        <input
                            onChange={onUploadPhotoHandler}
                            id="photo1"
                            className={styles["d-none"]}
                            type="file"
                        ></input>
                        <label htmlFor="photo1">+</label>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${photos[1]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={styles.photo}
                >
                    {photos[1] && (
                        <Delete id={1} onDelete={onDeletePhotoHandler} />
                    )}
                    <div className={styles.flex}>
                        <input
                            onChange={onUploadPhotoHandler}
                            id="photo2"
                            className={styles["d-none"]}
                            type="file"
                        ></input>
                        <label htmlFor="photo2">+</label>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${photos[2]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={styles.photo}
                >
                    {photos[2] && (
                        <Delete id={2} onDelete={onDeletePhotoHandler} />
                    )}
                    <div className={styles.flex}>
                        <input
                            onChange={onUploadPhotoHandler}
                            id="photo3"
                            className={styles["d-none"]}
                            type="file"
                        ></input>
                        <label htmlFor="photo3">+</label>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${photos[3]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={styles.photo}
                >
                    {photos[3] && (
                        <Delete id={3} onDelete={onDeletePhotoHandler} />
                    )}
                    <div className={styles.flex}>
                        <input
                            onChange={onUploadPhotoHandler}
                            id="photo4"
                            className={styles["d-none"]}
                            type="file"
                        ></input>
                        <label htmlFor="photo4">+</label>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${photos[4]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={styles.photo}
                >
                    {photos[4] && (
                        <Delete id={4} onDelete={onDeletePhotoHandler} />
                    )}
                    <div className={styles.flex}>
                        <input
                            onChange={onUploadPhotoHandler}
                            id="photo5"
                            className={styles["d-none"]}
                            type="file"
                        ></input>
                        <label htmlFor="photo5">+</label>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${photos[5]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={styles.photo}
                >
                    {photos[5] && (
                        <Delete id={5} onDelete={onDeletePhotoHandler} />
                    )}
                    <div className={styles.flex}>
                        <input
                            onChange={onUploadPhotoHandler}
                            id="photo6"
                            className={styles["d-none"]}
                            type="file"
                        ></input>
                        <label htmlFor="photo6">+</label>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${photos[6]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={styles.photo}
                >
                    {photos[6] && (
                        <Delete id={6} onDelete={onDeletePhotoHandler} />
                    )}
                    <div className={styles.flex}>
                        <input
                            onChange={onUploadPhotoHandler}
                            id="photo7"
                            className={styles["d-none"]}
                            type="file"
                        ></input>
                        <label htmlFor="photo7">+</label>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${photos[7]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={styles.photo}
                >
                    {photos[7] && (
                        <Delete id={7} onDelete={onDeletePhotoHandler} />
                    )}
                    <div className={styles.flex}>
                        <input
                            onChange={onUploadPhotoHandler}
                            id="photo8"
                            className={styles["d-none"]}
                            type="file"
                        ></input>
                        <label htmlFor="photo8">+</label>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${photos[8]})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={styles.photo}
                >
                    {photos[8] && (
                        <Delete id={8} onDelete={onDeletePhotoHandler} />
                    )}
                    <div className={styles.flex}>
                        <input
                            onChange={onUploadPhotoHandler}
                            id="photo9"
                            className={styles["d-none"]}
                            type="file"
                        ></input>
                        <label htmlFor="photo9">+</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddPhotos;
