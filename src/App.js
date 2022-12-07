import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/Registration";
import Edit from "./components/Edit";
import Fields from "./components/Fields";
import Responses from "./components/Responses";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="portal/login" element={<Login/>}/>
                <Route path="portal/registration" element={<Registration/>}/>
                <Route path="portal/fields" element={<Fields/>}/>
                <Route path="portal/responses" element={<Responses/>}/>
                <Route path="" element={<Login/>}/>
                <Route path="portal/edit" element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;