import styles from "./LandingPage.module.scss";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import xbox from "../../assets/img/xbox.png";
const LandingPage = (props) => {
    return (
        <div>
            <div className={styles["logo-container"]}>
                <img className={styles["logo"]} src={xbox}></img>
            </div>
            <div className={`flex items-center h-screen`}>
                <div className={`text-6xl ${styles.hop}`}>
                    <div className={styles["ps-font"]}>Poznaj kogoś</div>
                    <div className={styles["xbox-font"]}>
                        kto lubi te same gry co ty
                    </div>
                </div>
                <div></div>
                <div className={`ml-16`}>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};
export default LandingPage;
