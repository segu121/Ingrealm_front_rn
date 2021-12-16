import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MidContainer from './containers/MidContainer';
import ValidatedLogForm from "./functionsComponents/ValidatedLogForm";
import Admin from './classComponents/Admin';
import IngredientEdit from "./classComponents/IngredientEdit";
import IngredientList from "./classComponents/IngredientList";


function IngrealmDomRouter() {
    return (
        <Routes>
            <Route path="/" element={<MidContainer/>} />
            {/*<Route path="/login-page" element={<ValidatedLogForm/>} />*/}
            <Route path='/ingredients' element={<Admin/>} />
            <Route path='/ingredients/:id' element={<IngredientEdit/>} />
            <Route exact path='/ingredients' element={<IngredientList/>} />
        </Routes>
    );
}

export default IngrealmDomRouter
