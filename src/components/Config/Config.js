import { useState } from "react";
import AddPhotos from "../AddPhotos/AddPhotos";
import Gender from "../Gender/Gender";
const Config = (props) => {
    const [step, setStep] = useState("addPhotos");
    return (
        <div>
            {step === "addPhotos" && <AddPhotos setStep={setStep} />}
            {step === "gender" && <Gender setStep={setStep} />}
        </div>
    );
};
export default Config;
