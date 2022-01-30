import React from 'react';
import { Route, Routes} from 'react-router-dom';
// import MidContainer from "./containers/MidContainer";
import HomePageMidContainer from "./containers/HomePageMidContainer";
import ValidatedLogForm from "./functionsComponents/ValidatedLogForm";
import Admin from './classComponents/Admin';
import IngredientEdit from "./functionsComponents/ingredients/IngredientEdit";
import IngredientList from "./functionsComponents/ingredients/IngredientList";
import ImageLoader from "./imageLoader/imageLoader";

import ValidatedRegisterForm from "./functionsComponents/ValidatedRegisterForm";

function IngrealmDomRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePageMidContainer/>} />
            <Route path="/login-page" element={<ValidatedLogForm/>} />
            <Route path="register-page" element={<ValidatedRegisterForm/>}/>
            <Route path='/ingredients' element={<Admin/>} />
            <Route path='/ingredients/:id' element={<IngredientEdit/>} />
            {/*<Route exact path='/ingredients' element={<IngredientList/>} />*/}
            <Route path="/scan" element={<ImageLoader/>}/>
        </Routes>
    );
}

export default IngrealmDomRouter
