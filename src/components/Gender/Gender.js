import { useState } from "react";
import Radio from "../Radio/Radio";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update, ref } from "firebase/database";
import { database } from "../../firebase";
const Gender = (props) => {
    const [selected, setSelected] = useState(false);
    const user = useSelector((state) => state.authentication.user);
    const navigate = useNavigate();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const updates = {};
        updates[`/users/${user.uid}/gender`] = selected;
        update(ref(database), updates);
        navigate("/myprofile");
        props.setStep("");
        props.setConfig(true);
    };
    const onChangeHandler = (name) => {
        setSelected(name);
    };
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>Jestem</div>
                <div>
                    <Radio
                        onChangeHandler={onChangeHandler}
                        name="gender"
                        value="woman"
                    >
                        Kobietą
                    </Radio>
                </div>
                <div>
                    <Radio
                        onChangeHandler={onChangeHandler}
                        name="gender"
                        value="man"
                    >
                        Mężczyzną
                    </Radio>
                </div>
                <div>
                    <Button
                        button={{
                            disabled: !selected,
                            type: "submit",
                        }}
                    >
                        Dalej
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default Gender;
