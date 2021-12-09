import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MidContainer from './containers/MidContainer';
import ValidatedLogForm from "./functionsComponents/ValidatedLogForm";
import Admin from './classComponents/Admin';

function IngrealmDomRouter() {
    return (
        <Routes>
            <Route path="/" element={<MidContainer/>} />
            <Route path="/login-page" element={<ValidatedLogForm/>} />
            <Route path="/admin-panel" element={<Admin/>} />
        </Routes>
    );
}

export default IngrealmDomRouter
