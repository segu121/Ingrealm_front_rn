import React from 'react'
import { Component } from 'react';
import Errors from '../functionsComponents/Errors'

class Login extends Component{

    constructor(props) {
        super(props);

        this.state = {
            userEmail: "",
            userNick: "",
            userPass: "",
            loginForm: false,
            errors: []
        }


    }

    checkEmailIsValid(someString, errors) {
        let arrayOfString = someString.split("@")

        if (arrayOfString[0] <= 0 && arrayOfString[1] <= 0) {
            errors.push("email is invalid")
        }
    }


    

    checkIsEmailOrNick(event) {
        const someString = event.target.value;
        const errors = this.state.errors;


        if (someString.length <= 0) {
            errors.push("email field is empty")   
        } else {
            if (someString.include("@")) {
                this.checkEmailIsValid(someString, errors)
            }
        }

    }

    checkPass() {

    }



    displayForms() {
        return (
            <div className="container-fluid" >
               <div>
                    <p>Nick or email</p>
                    <form><input type="text" onChange={this.checkIsEmailOrNick}></input></form><br/>
                    <p>Password</p>
                    <form><input type="text" ></input></form><br/>
               </div>
               <div>
                    <p>Forget password</p>
               </div>
               <div>
                    <button>Submit</button>
               </div>

            </div>
        )
    }

    displeyErrors() {
        return (
            <div className="logErrors">
                {this.state.errors.map((err, i) => <Errors i={i} err={err} />)}
            </div>
        )
    }


    render() {
        return (
            <div className="container-fluid" >
                {this.displeyErrors()}
                {this.displayForms()}
            </div>
        );
    }

}

export default Login
