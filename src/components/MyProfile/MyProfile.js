import { ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { database } from "../../firebase";

const MyProfile = (props) => {
    const user = useSelector((state) => state.authentication.user);
    const [userInfo, setUserInfo] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await get(ref(database, `users/${user.uid}`));
            if (snapshot.exists()) {
                setUserInfo(snapshot.val());
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div>{userInfo.displayName}</div>
        </div>
    );
};
export default MyProfile;
