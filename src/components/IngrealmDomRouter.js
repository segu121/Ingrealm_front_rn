import React from 'react';
import { Route, Routes} from 'react-router-dom';
// import MidContainer from "./containers/MidContainer";
import HomePageMidContainer from "./containers/HomePageMidContainer";
import ValidatedLogForm from "./functionsComponents/ValidatedLogForm";
import Admin from './classComponents/Admin';
import IngredientEdit from "./classComponents/IngredientEdit";
import IngredientList from "./classComponents/IngredientList";
import ValidatedRegisterForm from "./functionsComponents/ValidatedRegisterForm";

function IngrealmDomRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePageMidContainer/>} />
            <Route path="/login-page" element={<ValidatedLogForm/>} />
            <Route path="register-page" element={<ValidatedRegisterForm/>}/>
            <Route path='/ingredients' element={<Admin/>} />
            <Route path='/ingredients/:id' element={<IngredientEdit/>} />
            <Route exact path='/ingredients' element={<IngredientList/>} />
        </Routes>
    );
}

export default IngrealmDomRouter
