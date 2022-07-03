import styles from "./AddPhotos.module.scss";
import Delete from "../Delete/Delete";
import { storage } from "../../firebase";
import { deleteObject } from "firebase/storage";
import { uploadBytes, ref as sRef, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import PhotoInput from "../PhotoInput/PhotoInput";
const AddPhotos = (props) => {
    const user = useSelector((state) => state.authentication.user);
    const [photos, setPhotos] = useState(["", "", "", "", "", "", "", "", ""]);
    const inputRefFirst = useRef();
    const inputRefSecond = useRef();
    const inputRefThird = useRef();
    const inputRefFourth = useRef();
    const inputRefFifth = useRef();
    const inputRefSixth = useRef();
    const inputRefSeventh = useRef();
    const inputRefNineth = useRef();
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
                <PhotoInput
                    photo={photos[0]}
                    id={0}
                    onDeletePhotoHandler={onDeletePhotoHandler}
                    onUploadPhotoHandler={onUploadPhotoHandler}
                />

                <PhotoInput
                    photo={photos[1]}
                    id={1}
                    onDeletePhotoHandler={onDeletePhotoHandler}
                    onUploadPhotoHandler={onUploadPhotoHandler}
                />

                <PhotoInput
                    photo={photos[2]}
                    id={2}
                    onDeletePhotoHandler={onDeletePhotoHandler}
                    onUploadPhotoHandler={onUploadPhotoHandler}
                />
                <PhotoInput
                    photo={photos[3]}
                    id={3}
                    onDeletePhotoHandler={onDeletePhotoHandler}
                    onUploadPhotoHandler={onUploadPhotoHandler}
                />

                <PhotoInput
                    photo={photos[4]}
                    id={4}
                    onDeletePhotoHandler={onDeletePhotoHandler}
                    onUploadPhotoHandler={onUploadPhotoHandler}
                />

                <PhotoInput
                    photo={photos[5]}
                    id={5}
                    onDeletePhotoHandler={onDeletePhotoHandler}
                    onUploadPhotoHandler={onUploadPhotoHandler}
                />

                <PhotoInput
                    photo={photos[6]}
                    id={6}
                    onDeletePhotoHandler={onDeletePhotoHandler}
                    onUploadPhotoHandler={onUploadPhotoHandler}
                />
                <PhotoInput
                    photo={photos[7]}
                    id={7}
                    onDeletePhotoHandler={onDeletePhotoHandler}
                    onUploadPhotoHandler={onUploadPhotoHandler}
                />
                <PhotoInput
                    photo={photos[8]}
                    id={8}
                    onDeletePhotoHandler={onDeletePhotoHandler}
                    onUploadPhotoHandler={onUploadPhotoHandler}
                />
            </div>
        </div>
    );
};
export default AddPhotos;
