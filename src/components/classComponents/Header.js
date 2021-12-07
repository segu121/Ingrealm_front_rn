import React from "react";
import {Component} from "react";
import {Row} from "react-bootstrap";
import  {Col} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import HeaderStyle from "../../css/headers/headerBar.module.css";
import LoginFuncComp from '../functionsComponents/toHeader/LoginFuncComp';
import RegisterFuncComp from '../functionsComponents/toHeader/RegisterFuncComp';
import {useLocation} from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);

        this.state = {
            urlTochange: null
        }
    }

    
    
    getUrlPathName () {

        const Location = () => {
            let loc = useLocation()
            console.log(loc.pathname)
            return loc.pathname;
            
        }


        if (this.state.urlTochange !== Location) {
            this.setState({ urlTochange: Location})
        } 

    }
    changeDivs () {
        const firstModulUrl = "http://localhost:3000";
        

        

        if (this.state.urlTochange === (firstModulUrl + "/")) {
            return (
            <Col className={HeaderStyle.colWithTwoDiv}>
                <div className={HeaderStyle.logRegIcons}>
                    <Link to="/register-page" className={HeaderStyle.aHeader}>
                        <RegisterFuncComp/>
                    </Link>
                </div>
                <div className={HeaderStyle.logRegIcons}>
                    <Link to="/login-page" className={HeaderStyle.aHeader}>
                        <LoginFuncComp/>
                    </Link>
                </div>
            </Col>
            );
        } else if (this.state.urlTochange === (firstModulUrl + "/login-page")) {
            return (
            <Col className={HeaderStyle.colWithTwoDiv}>
                <div className={HeaderStyle.logRegIcons}>
                    <Link to="/register-page" className={HeaderStyle.aHeader}>
                        <RegisterFuncComp/>
                    </Link>
                </div>
            </Col>
            );
        } else if (this.state.urlTochange === (firstModulUrl + "/register-page")) {
            return (
            <Col className={HeaderStyle.colWithTwoDiv}>
                <div className={HeaderStyle.logRegIcons}>
                    <Link to="/login-page" className={HeaderStyle.aHeader}>
                        <LoginFuncComp/>
                    </Link>
                </div>
            </Col>
            )
        }
        

    }



    render() {
        return (
            <header>
                {this.getUrlPathName}
                <div className={HeaderStyle.headerContainer}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className={HeaderStyle.appLogo} >
                                     <Link to="/" className={HeaderStyle.aHeader}>
                                            <h1>Ingrealm</h1>
                                    </Link>
                                </div>
                            </Col>
                                {this.state.urlTochange}
                            <Col>
                            </Col>
                            <Col className={HeaderStyle.colWithTwoDiv}>
                                <div className={HeaderStyle.logRegIcons}>
                                    <Link to="/register-page" className={HeaderStyle.aHeader}>
                                        <RegisterFuncComp/>
                                    </Link>
                                </div>
                                <div className={HeaderStyle.logRegIcons}>
                                    <Link to="/login-page" className={HeaderStyle.aHeader}>
                                        <LoginFuncComp/>
                                    </Link>
                                </div>
                            </Col>
                            {this.changeDivs()}
                        </Row>
                    </Container>
                </div>
            </header>
        )
    }
}

export default Header