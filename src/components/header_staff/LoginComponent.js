import React from 'react';
import { Component } from 'react';
import Cookies from 'js-cookie';


class LoginComponent extends Component{

    constructor(props) {
        super(props);
    

        this.state = {
            login: false,
            userNick: "userNick"
        };
    }
    
    loginChangeIfCookies() {

        if (this.state.login === false) {
            return (
                <div className="icon-container">
                    <h2>Log in</h2>
                </div>
            
            )
        }
        else {
            return (
                <div className="icon-container">
                    <span>{ this.state.userNick }</span>
                </div>
            )
        }
    }

    getNameFromCookie() {
        if (Cookies.get("userNick")) {
            this.state.setLogin({ login: true})
            this.state.setUserNick({ userNick: Cookies.get("userNick")})
        }
    }

    render() {
        return (
            <div className="icon-container">
                {this.getNameFromCookie}
                {this.loginChangeIfCookies}
            </div>
        );
    }

}

export default LoginComponent
