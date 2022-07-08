import styles from "./AddPhotos.module.scss";
import { storage } from "../../firebase";
import { deleteObject } from "firebase/storage";
import { uploadBytes, ref as sRef, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import PhotoInput from "../PhotoInput/PhotoInput";
const AddPhotos = (props) => {
    const user = useSelector((state) => state.authentication.user);
    const [photos, setPhotos] = useState(["", "", "", "", "", "", "", "", ""]);
    const [isDisabled, setIsDisabled] = useState(true);
    const inputRefFirst = useRef();
    const inputRefSecond = useRef();
    const inputRefThird = useRef();
    const inputRefFourth = useRef();
    const inputRefFifth = useRef();
    const inputRefSixth = useRef();
    const inputRefSeventh = useRef();
    const inputRefEighth = useRef();
    const inputRefNineth = useRef();
    const onNextStepHandler = (event) => {
        event.preventDefault();
        props.setStep("gender");
    };
    useEffect(() => {
        for (const index in photos) {
            if (photos[index] !== "") {
                setIsDisabled(false);
                break;
            }
        }
    }, [photos]);
    useEffect(() => {
        const fetchPhotos = async () => {
            for (let i = 0; i < 9; i++) {
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
        const photoRef = sRef(storage, `${user.uid}/photo${id}`);
        deleteObject(photoRef);
        setPhotos((prevState) => {
            prevState[id] = "";
            return [...prevState];
        });
        if (id === 0) {
            inputRefFirst.current.value = null;
        } else if (id === 1) {
            inputRefSecond.current.value = null;
        } else if (id === 2) {
            inputRefThird.current.value = null;
        } else if (id === 3) {
            inputRefFourth.current.value = null;
        } else if (id === 4) {
            inputRefFifth.current.value = null;
        } else if (id === 5) {
            inputRefSixth.current.value = null;
        } else if (id === 6) {
            inputRefSeventh.current.value = null;
        } else if (id === 7) {
            inputRefEighth.current.value = null;
        } else if (id === 8) {
            inputRefNineth.current.value = null;
        }
    };
    const onUploadPhotoHandler = async (event) => {
        const { target } = event;
        let idNumber = Number(target.id[target.id.length - 1] - 1);
        const storageRef = sRef(storage, `${user.uid}/photo${idNumber}`);
        await uploadBytes(storageRef, target.files[0]);
        setPhotos((prevState) => {
            prevState[idNumber] = window.URL.createObjectURL(target.files[0]);
            return [...prevState];
        });
    };
    return (
        <div>
            <div>Czekaj stop, najpierw dodaj co najmniej jedno zdjęcie</div>
            <form onSubmit={onNextStepHandler}>
                <div className={styles["photo-container"]}>
                    <PhotoInput
                        ref={inputRefFirst}
                        photo={photos[0]}
                        id={0}
                        onDeletePhotoHandler={onDeletePhotoHandler}
                        onUploadPhotoHandler={onUploadPhotoHandler}
                    />

                    <PhotoInput
                        ref={inputRefSecond}
                        photo={photos[1]}
                        id={1}
                        onDeletePhotoHandler={onDeletePhotoHandler}
                        onUploadPhotoHandler={onUploadPhotoHandler}
                    />

                    <PhotoInput
                        ref={inputRefThird}
                        photo={photos[2]}
                        id={2}
                        onDeletePhotoHandler={onDeletePhotoHandler}
                        onUploadPhotoHandler={onUploadPhotoHandler}
                    />
                    <PhotoInput
                        ref={inputRefFourth}
                        photo={photos[3]}
                        id={3}
                        onDeletePhotoHandler={onDeletePhotoHandler}
                        onUploadPhotoHandler={onUploadPhotoHandler}
                    />

                    <PhotoInput
                        ref={inputRefFifth}
                        photo={photos[4]}
                        id={4}
                        onDeletePhotoHandler={onDeletePhotoHandler}
                        onUploadPhotoHandler={onUploadPhotoHandler}
                    />

                    <PhotoInput
                        ref={inputRefSixth}
                        photo={photos[5]}
                        id={5}
                        onDeletePhotoHandler={onDeletePhotoHandler}
                        onUploadPhotoHandler={onUploadPhotoHandler}
                    />

                    <PhotoInput
                        ref={inputRefSeventh}
                        photo={photos[6]}
                        id={6}
                        onDeletePhotoHandler={onDeletePhotoHandler}
                        onUploadPhotoHandler={onUploadPhotoHandler}
                    />
                    <PhotoInput
                        ref={inputRefEighth}
                        photo={photos[7]}
                        id={7}
                        onDeletePhotoHandler={onDeletePhotoHandler}
                        onUploadPhotoHandler={onUploadPhotoHandler}
                    />
                    <PhotoInput
                        ref={inputRefNineth}
                        photo={photos[8]}
                        id={8}
                        onDeletePhotoHandler={onDeletePhotoHandler}
                        onUploadPhotoHandler={onUploadPhotoHandler}
                    />
                </div>
                <div>
                    <Button
                        button={{ disabled: isDisabled, type: "submit" }}
                        className={styles.button}
                    >
                        Dalej
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default AddPhotos;
