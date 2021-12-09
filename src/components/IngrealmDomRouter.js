import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MidContainer from './containers/MidContainer';
import ValidatedLogForm from "./functionsComponents/ValidatedLogForm";

function IngrealmDomRouter() {
    return (
        <Routes>
            <Route path="/" element={<MidContainer/>} />
            <Route path="/login-page" element={<ValidatedLogForm/>} />
        </Routes>
    );
}

export default IngrealmDomRouter
