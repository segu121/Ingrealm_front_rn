import React from "react";
// import * as EmailValidation from 'email-validator';
import { Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import errors from "./Errors";



const ValidatedLogForm = () => (
    <Formik
        initialValues={{email: "", pass: ""}}
        onSubmit={(values, {setSubmitting}) => {
            console.log("Submitting");

            fetch("to-login",{
                method: "POSt",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(values),
            })
                .then((response) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    let history = useNavigate();
                    if (response) {
                        setTimeout(() => {
                            history("/", {logged: true})
                        }, 500)
                    } else {
                        errors.pass("Email or password is invalid")
                    }
                });
        }}
        validationSchema={ Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            pass: Yup.string()
                .required("Required")
                .min(8, "Password is to short - should be 8 characters minimum")
                .matches(/(?=.*[0-9])/, "Password must contain a number")


        })}>

        {(props )=> {
            const {values, touched, errors, isSubmitting, handleBlur, handleSubmit, handleChange} = props;
            return (
                <div className="container-fluid" >
                    <div className="login-page">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.email && touched.email &&"errors"}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            <label htmlFor="email">Password</label>
                            <input
                                name="pass"
                                type="password"
                                placeholder="Enter your password"
                                value={values.pass}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.pass && touched.pass &&"errors"}
                            />
                            {errors.pass && touched.pass && (
                                <div className="input-feedback">{errors.pass}</div>
                            )}
                            <div className="Login-button">
                                <button type="submit" disabled={isSubmitting}>Go</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }}
    </Formik>

)

export default ValidatedLogForm;




//     validate = {(values) => {
//         let errors = {};
//
//         if(!values.email) {
//             errors.email = "Required";
//         } else if (!EmailValidation.validate(values.email)) {
//             errors.email = "Invalid Email Address";
//         }
//         const passRegex = /(?=.*[0-9])/;
//
//         if(!values.pass) {
//             errors.pass = "Required";
//         } else if (values.pass.length < 8) {
//             errors.pass = "Password must be 8 characters long";
//         } else if (!passRegex.test(values.pass)) {
//             errors.pass = "Invalid password. Must contain one number";
//         }
//
//         return errors;
//     }}
// >





// <div className="login-page">
//     <div className="form">
//         <form className="register-form">
//             <input type="text" placeholder="name"/>
//             <input type="password" placeholder="password"/>
//             <input type="text" placeholder="email address"/>
//             <button>create</button>
//             <p className="message">Already registered? <a href="#">Sign In</a></p>
//         </form>
//         <form className="login-form">
//             <input type="text" placeholder="username"/>
//             <input type="password" placeholder="password"/>
//             <button>login</button>
//             <p className="message">Not registered? <a href="#">Create an account</a></p>
//         </form>
//     </div>
// </div>