import React from 'react'
import { Component } from 'react';
import Errors from '../functionsComponents/Errors'

class Login extends Component{

    constructor(props) {
        super(props);

        this.state = {
            loginFormEmail: false,
            loginFormPass: false,
            errors: []
        }

        this.checkIsEmailOrNick = this.checkIsEmailOrNick.bind(this);
        this.checkPass = this.checkPass.bind(this);

    }

    submitButtonClicked(event) {
        console.log(event.target.value)

    }

    // addErrorWithoutRepeat() {
    //     let errorsArray = this.state.errors;
    //     let err = ""
    //     errorsArray.map((error) => {
    //         if(error !== err) {
    //             err = error
    //         } else {
    //
    //         }
    //     })
    // }


    checkEmailIsValid(someString, errors) {
        let arrayOfString = someString.split("@")

        if (arrayOfString[0] <= 0 && arrayOfString[1] <= 0) {
            errors.push("email is invalid")
        } else {
            this.setState({ loginFormPass: true})
        }
    }


    

    checkIsEmailOrNick(event) {
        const someString = event.target.value;
        let errors = this.state.errors;


        if (someString.length <= 0) {
            this.setState({loginFormEmail: false})
            errors.push("email field is empty")   
        } else {
            if (someString.includes("@")) {
                this.checkEmailIsValid(someString, errors)
            }
        }

    }

    checkPass(event) {
        const someString = event.target.value;
        let errors = this.state.errors;

        if(someString.length <= 0 && someString.length >= 1) {
            errors.push("password is empty")
        } else if ( someString.length >= 7 && someString.length <= 8 ) {
            errors.push("password is to short. Must have minimum 8 letter")
        } else {
            this.setState({loginFormPass: true})
        }
    }



    displayForms() {
        return (
            <div className="container-fluid" >
               <div>
                    <p>Nick or email</p>
                    <form><input type="text" className={this.state.loginFormEmail ? 'emptyEmail': 'validEmail'}
                                 onChange={this.checkIsEmailOrNick} placeholder={"Email or Nick"}
                    onSubmit={this.submitButtonClicked}/></form><br/>
                    <p>Password</p>
                    <form><input type="text" className={this.state.loginFormPass ? 'emptyPass': 'validPass'} onChange={this.checkPass}
                                 onSubmit={this.submitButtonClicked} placeholder={"Password"}/></form><br/>
               </div>
               <div>
                    <p>Forget password</p>
               </div>
               <div>
                    <button onClick={this.submitButtonClicked} disabled={((this.state.loginFormPass === false && this.state.loginFormEmail === false))}>
                        Submit</button>
               </div>

            </div>
        )
    }

    displayErrors() {
        return (
            <div className="logErrors">
                {this.state.errors.map((err, i) => <Errors i={i} err={err} />)}
            </div>
        )
    }


    render() {
        return (
            <div className="container-fluid" >
                {this.displayErrors()}
                {this.displayForms()}
            </div>
        );
    }

}

export default Login
