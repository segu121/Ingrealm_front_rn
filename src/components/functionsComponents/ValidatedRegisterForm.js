import React from "react";
// import * as EmailValidation from 'email-validator';
import { Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import errors from "./Errors";
import {FloatingLabel, Form} from "react-bootstrap";

const ValidatedRegisterForm = () => (
    <Formik 
    initialValues={{email: "",
        pass: "",
        checkEmail: "",
        checkPass: "",
        name: "",
        surName: "",
        lastName: "",
        nick: ""
    }}
    onSubmit={(values, {setSubmitting}) => {
        console.log("ok")
    }}
    validatonSchema = {Yup.object().shape({

    })}>

        {(props) => {
            const {values,
                touched,
                errors,
                isSubmitting,
                handlerBlur,
                handleSubmit,
                handleChange
            } = props;
            return (
                <div className="container-fluid">
                    <div className="register-page">
                        <Form>
                            <Form.Group>
                                <FloatingLabel label="Email address" className="mb-3" controlId="floatingInput">
                                    <Form.Control type="email" placeholder="name@example.com" value={values.email}/>
                                </FloatingLabel>
                                <FloatingLabel label="Repeat email" className="mb-3" controlId="floatingInput">
                                    <Form.Control type="email" placeholder="Repeat your email" value={values.checkEmail}/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Password" controlId="floatingPassword" className="mb-3">
                                    <Form.Control type="password" placeholder="Password" value={values.pass}/>
                                </FloatingLabel>
                                <FloatingLabel label="Repeat password" controlId="floatingPassword" className="mb-3">
                                    <Form.Control type="password" placeholder="Password" value={values.checkPass}/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Nick" className="mb-2" controlId="floatingTextarea">
                                    <Form.Control type="textarea" placeholder="Your nick" value={values.nick}/>
                                </FloatingLabel>
                                <FloatingLabel label="Name" className="mb-2" controlId="floatingTextarea">
                                    <Form.Control type="textarea" placeholder="Your Name" value={values.name}/>
                                </FloatingLabel>
                                <FloatingLabel label="LastName" className="mb-2" controlId="floatingTextarea">
                                    <Form.Control type="textarea" placeholder="Your Lastname" value={values.lastName}/>
                                </FloatingLabel>
                                <FloatingLabel label="SurName" className="mb-2" controlId="floatingTextarea">
                                    <Form.Control type="textarea" placeholder="Your Surname" value={values.surName}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            )
        }}


    </Formik>

)

export default ValidatedRegisterForm;