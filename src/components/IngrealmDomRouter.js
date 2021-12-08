import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MidContainer from './containers/MidContainer';
import Login from './classComponents/Login';
import Admin from './classComponents/Admin';

function IngrealmDomRouter() {
    return (
        <Routes>
            <Route path="/" element={<MidContainer/>} />
            <Route path="/login-page" element={<Login/>} />
            <Route path="/admin-panel" element={<Admin/>} />
        </Routes>
    );
}

export default IngrealmDomRouter
