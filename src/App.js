import React from 'react';
import './App.css';
// import Fontello from './css/fontello/css/fontello.css';
// import bacground from './css/img/old_mathematics/old_mathematics_@2X.png';
import './css/login_page/loginForm.css'
import IngrealmDomRouter from './components/IngrealmDomRouter';
import Header from './components/classComponents/Header';
import AlertFuncComp from './components/functionsComponents/AllertsFuncComp'
import FooterFunctionComponent from './components/functionsComponents/footer/FooterFunctionComponent';


function App() {
  return (
    <div className="container-fluid" style={{justifyContent:"center", display:"grid"}} >
        <Header/>
        {/*<AlertFuncComp/>*/}
        <IngrealmDomRouter/>
        <FooterFunctionComponent/>
    </div>
  );
}

export default App;
