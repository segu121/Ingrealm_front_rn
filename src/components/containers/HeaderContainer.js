import React, {useState} from "react";
import {Component} from "react";
import {Row} from "react-bootstrap";
import  {Col} from "react-bootstrap";
import {Container} from "react-bootstrap";

class HeaderContainer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="header-container">
                    <Container fluid>
                        <Row>
                            <Col>
                                <h1>Ingrealm</h1>
                            </Col>
                            <Col></Col>
                            <Col>
                                <div>

                                </div>
                                <div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        )
    }
}

export default HeaderContainer