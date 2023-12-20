import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";

import './App.css';
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import UserPage from "../../pages/UserPage/UserPage";

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
    </Router>
  );
}

export default App;
