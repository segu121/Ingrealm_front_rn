import React, {useEffect} from "react";
import { Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import errors from "./Errors";
import {Col, Row} from "react-bootstrap";
import '../../css/registerPage/registerPage.css'




function ValidatedRegisterForm() {


    return (
        <Formik
            initialValues={{
                email: "",
                pass: "",
                checkEmail: "",
                checkPass: "",
                nick: ""
            }}
            onSubmit={(values, {setSubmitting}) => {
                console.log("ok")
                setSubmitting(true)
                axios.post("registration", [values]).then(response => {
                    setSubmitting(true)
                    if (response.status === 200) {

                    } else {
                        errors.apply({stat: "Invalid password or email"})
                        setSubmitting(false)
                    }
                })
            }}
            validatonSchema={Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required("Required"),
                checkEmail: Yup.string()
                    .email()
                    .required("Required")
                    .oneOf([Yup.ref("email"), null], "Email must match"),
                pass: Yup.string()
                    .required("Required")
                    .min(8, "Password is to short - should be 8 characters minimum")
                    .matches(/(?=.*[0-9])/, "Password must contain a number")
                    .matches(/^[\w&.\-]+$/, "Password must contain at least one special character"),
                checkPass: Yup.string()
                    .required("Required")
                    .oneOf([Yup.ref("pass"), null], "Password must match"),
                nick: Yup.string()
                    .required("Required")

            })}>

            {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleBlur,
                    handleSubmit,
                    handleChange
                } = props;
                return (
                    <div className="container-fluid">
                        <div className="registerPage">
                            <div className="registerFormsContainer">
                                <div className="regLeftBar"/>
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col>
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    name="email"
                                                    type="text"
                                                    placeholder="Enter your email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.email && touched.email && "errors"}
                                                />
                                                {/*<Form.Group>*/}
                                                {/*    <FloatingLabel label="Email address" className="mb-3" controlId="floatingInput">*/}
                                                {/*        <Form.Control type="email" placeholder="name@example.com"*/}
                                                {/*                      value={values.email}*/}
                                                {/*                      onChange={handleChange}*/}
                                                {/*                      onBlur={handleBlur}*/}
                                                {/*                      className={errors.email && touched.email && "errors"}/>*/}
                                                {/*    </FloatingLabel>*/}
                                                {/*</Form.Group>*/}
                                                {errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )}
                                            </Col>
                                            <Col>
                                                <label htmlFor="checkEmail">Repeat email</label>
                                                <input
                                                    name="checkEmail"
                                                    type="text"
                                                    placeholder="Repeat email"
                                                    value={values.checkEmail}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.checkEmail && touched.checkEmail && "errors"}
                                                />
                                                {/*<Form.Group>*/}
                                                {/*    <FloatingLabel label="Repeat email" className="mb-3" controlId="floatingInput">*/}
                                                {/*        <Form.Control type="email" placeholder="Repeat your email"*/}
                                                {/*                      value={values.checkEmail}*/}
                                                {/*                      onChange={handleChange}*/}
                                                {/*                      onBlur={handleBlur}*/}
                                                {/*                      className={errors.checkEmail && touched.checkEmail && "errors"}/>*/}
                                                {/*    </FloatingLabel>*/}
                                                {/*</Form.Group>*/}
                                                {/*{errors.checkEmail && touched.checkEmail && (*/}
                                                {/*    <div className="input-feedback">{errors.checkEmail}</div>*/}
                                                {/*)}*/}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label htmlFor="pass">Password</label>
                                                <input
                                                    name="pass"
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    value={values.pass}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.pass && touched.pass && "errors"}
                                                />
                                                {/*<Form.Group>*/}
                                                {/*    <FloatingLabel label="Password" controlId="floatingPassword" className="mb-3">*/}
                                                {/*        <Form.Control type="password" placeholder="Password"*/}
                                                {/*                      value={values.pass}*/}
                                                {/*                      onChange={handleChange}*/}
                                                {/*                      onBlur={handleBlur}*/}
                                                {/*                      className={errors.pass && touched.pass && "errors"}/>*/}
                                                {/*    </FloatingLabel>*/}
                                                {/*</Form.Group>*/}
                                                {errors.pass && touched.pass && (
                                                    <div className="input-feedback">{errors.pass}</div>
                                                )}
                                            </Col>
                                            <Col>
                                                <label htmlFor="checkPass">Repeat password</label>
                                                <input
                                                    name="checkPass"
                                                    type="password"
                                                    placeholder="Repeat password"
                                                    value={values.checkPass}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.checkPass && touched.checkPass && "errors"}
                                                />
                                                {/*<Form.Group>*/}
                                                {/*    <FloatingLabel label="Repeat password" controlId="floatingPassword"*/}
                                                {/*                   className="mb-3">*/}
                                                {/*        <Form.Control type="password" placeholder="Password"*/}
                                                {/*                      value={values.checkPass}*/}
                                                {/*                      onChange={handleChange}*/}
                                                {/*                      onBlur={handleBlur}*/}
                                                {/*                      className={errors.checkPass && touched.checkPass && "errors"}/>*/}
                                                {/*    </FloatingLabel>*/}
                                                {/*</Form.Group>*/}
                                                {errors.checkPass && touched.checkPass && (
                                                    <div className="input-feedback">{errors.checkPass}</div>
                                                )}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label htmlFor="nick">Your nick</label>
                                                <input
                                                    name="nick"
                                                    type="text"
                                                    placeholder="Your nick"
                                                    value={values.nick}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.nick && touched.nick && "errors"}
                                                />
                                                {/*<Form.Group>*/}
                                                {/*    <FloatingLabel label="Nick" className="mb-2" controlId="floatingTextarea">*/}
                                                {/*        <Form.Control type="text" placeholder="Your nick"*/}
                                                {/*                      value={values.nick}*/}
                                                {/*                      onChange={handleChange}*/}
                                                {/*                      onBlur={handleBlur}*/}
                                                {/*                      className={errors.nick && touched.nick && "errors"}/>*/}
                                                {/*    </FloatingLabel>*/}
                                                {/*</Form.Group>*/}
                                                {errors.nick && touched.nick && (
                                                    <div className="input-feedback">{errors.nick}</div>
                                                )}
                                            </Col>
                                        </Row>
                                        <div className="registerButton">
                                            <Row style={{
                                                width: '80%',
                                                display: "flex",
                                                justifyContent: "center",
                                                alignContent: "center"
                                            }}>
                                                <Col md={10} style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignContent: "center"
                                                }}>
                                                    <button type="submit" disabled={isSubmitting}
                                                            className="submitRegisterBtn">Go
                                                    </button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </form>
                                </div>
                                <div className="regLeftBar"/>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Formik>
    )
}

export default ValidatedRegisterForm;