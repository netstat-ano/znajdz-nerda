import LandingPage from "./pages/LandingPage/LandingPage";
import Main from "./pages/Main/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import MyProfile from "./components/MyProfile/MyProfile";
function App() {
    return (
        <div>
            <Routes>
                <Route
                    element={<Navigate replace={true} to={"/welcome"} />}
                    path="/"
                />
                <Route element={<LandingPage />} path={"/welcome"} />
                <Route element={<Main />} path={"/main"} />
                <Route element={<MyProfile />} path={"/myprofile"} />
            </Routes>
        </div>
    );
}

export default App;
