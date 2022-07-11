import { useState } from "react";
import AddPhotos from "../AddPhotos/AddPhotos";
import Gender from "../Gender/Gender";
import Age from "../Age/Age";
const Config = (props) => {
    const [step, setStep] = useState("addPhotos");
    return (
        <div>
            {step === "addPhotos" && <AddPhotos setStep={setStep} />}
            {step === "age" && <Age setStep={setStep} />}
            {step === "gender" && (
                <Gender setConfig={props.setConfig} setStep={setStep} />
            )}
        </div>
    );
};
export default Config;
