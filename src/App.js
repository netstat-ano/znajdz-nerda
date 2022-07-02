import LandingPage from "./pages/LandingPage/LandingPage";
import Main from "./pages/Main/Main";
import { Routes, Route, Navigate } from "react-router-dom";
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
            </Routes>
        </div>
    );
}

export default App;
