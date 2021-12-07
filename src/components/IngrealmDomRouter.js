import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MidContainer from './containers/MidContainer';
import Login from './classComponents/Login';

function IngrealmDomRouter() {
    return (
        <Routes>
            <Route path="/" element={<MidContainer/>} />
            <Route path="/login-page" element={<Login/>} />
        </Routes>
    );
}

export default IngrealmDomRouter
