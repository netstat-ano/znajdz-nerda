import { useState } from "react";
import Radio from "../Radio/Radio";
import Button from "../Button/Button";
const Gender = (props) => {
    const [selected, setSelected] = useState(false);
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>Jestem</div>
                <div>
                    <Radio on name="gender" value="woman">
                        Kobietą
                    </Radio>
                </div>
                <div>
                    <Radio name="gender" value="man">
                        Mężczyzną
                    </Radio>
                </div>
                <div>
                    <Button button={{ disabled: !selected, type: "submit" }}>
                        Dalej
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default Gender;
