import LandingPage from "./pages/LandingPage/LandingPage";
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
            </Routes>
        </div>
    );
}

export default App;
