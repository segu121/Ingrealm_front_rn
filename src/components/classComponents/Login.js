import React from 'react'
import { Component } from 'react';
import Errors from '../functionsComponents/Errors'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            nick: "",
            pass: "",
            response: "",
            loginFormEmail: false,
            loginFormPass: false,
            errors: []
        }

        this.checkIsEmailOrNick = this.checkIsEmailOrNick.bind(this);
        this.checkPass = this.checkPass.bind(this);
        this.submitButtonClicked = this.submitButtonClicked.bind(this)

    }

    submitButtonClicked(event) {
        console.log("sending");
        console.log(this.state.email)
        console.log(this.state.nick)
        console.log(this.state.pass)
        let email = this.state.email;
        let nick = this.state.nick;
        let pass = this.state.pass


        let response = fetch("/users", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: {
                email: email,
                nick: nick,
                pass: pass
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return JSON.stringify(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
        this.setState({response: response})

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
        let arrayOfString = someString.split("@");

        if (arrayOfString[0] <= 0 && arrayOfString[1] <= 0) {
            errors.push("email is invalid");
        } else {
            this.setState({ loginFormPass: true});
            this.setState({ email: someString });
        }
    }


    

    checkIsEmailOrNick(event) {
        const someString = event.target.value;
        let errors = this.state.errors;


        if (someString.length <= 0) {
            this.setState({loginFormEmail: false})
            errors.push("email field is empty");
        } else {
            if (someString.includes("@")) {
                this.checkEmailIsValid(someString, errors);
            } else {
                this.setState({ nick: someString });
            }
        }

    }

    checkPass(event) {
        const someString = event.target.value;
        let errors = this.state.errors;

        if(someString.length <= 0) {
            errors.push("password is empty");
        } else if ( someString.length >= 7 && someString.length <= 8 ) {
            errors.push("password is to short. Must have minimum 8 letter");
        } else if (someString.length >= 8) {
            this.setState({loginFormPass: true});
            this.setState({ pass: someString});
        }
    }



    displayForms() {
        return (
            <div className="container-fluid" >
               <div>
                    <p>Nick or email</p>
                    <form><input type="text" className={this.state.loginFormEmail ? 'emptyEmail': 'validEmail'}
                                 onChange={this.checkIsEmailOrNick} placeholder={"Email or Nick"}/></form><br/>
                    <p>Password</p>
                    <form><input type="text" className={this.state.loginFormPass ? 'emptyPass': 'validPass'} onChange={this.checkPass}
                                 placeholder={"Password"}/></form><br/>
               </div>
               <div>
                    <p>Forget password</p>
               </div>
               <div>
                    <button onClick={this.submitButtonClicked} disabled={
                        ((this.state.loginFormPass === false && this.state.loginFormEmail === false))}>
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
