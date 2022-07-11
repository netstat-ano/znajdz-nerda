import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { useSelector } from "react-redux/es/exports";
import ProfilesCard from "../../components/ProfilesCard/ProfilesCard";
import Config from "../../components/Config/Config";
import styles from "./Main.module.scss";
const Main = (props) => {
    const user = useSelector((state) => state.authentication.user);
    const [config, setConfig] = useState(false);
    useEffect(() => {
        const fetchConfig = async () => {
            if (user) {
                const snapshot = await get(ref(`users/${user.uid}`));
                if (snapshot.exists()) {
                    const response = snapshot.val();
                    if (response.config) {
                        setConfig(response.config);
                    } else {
                        setConfig(false);
                    }
                }
            }
        };
        fetchConfig();
    }, []);
    return (
        <div className={styles.center}>
            {!config && <Config setConfig={setConfig} />}
            {config && <ProfilesCard />}
        </div>
    );
};
export default Main;
