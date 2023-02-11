import React from "react";
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../../Components/Heading";
import InputField from "../../Components/InputField/InputField";
import "./Login.css"

const Login = () => {

    return(
        <>
          <Container fluid className="lgoin_sec_container">
          {/* START ROW */}
                <Row>
                    <Col md="7"> </Col>
                    {/* START LOGIN FORM */}
                        <Col md="5" >
                        <Row className="login_form">
                            <Col>
                            <Heading headingClass="custm_heading" heading="Log In to Your Account" />
                            <div className="mt-4 pt-2">
                                <InputField  labelName="Business ID" inputType="text" placeHolderName="customer-business ID" iconName="bx bx-envelope" />
                                <InputField  labelName="User" inputType="text" placeHolderName="customer-user" iconName="bx bx-user" />
                                <InputField  labelName="Password" inputType="password" placeHolderName="********" iconName="uil uil-lock" />
                                <div className="check_forget_sec">
                                    <Form.Check type="checkbox"  id="autoSizingCheck" className="mb-2 input_checkbox" label="Remember me" />
                                    <NavLink className="forget_pass" to="">Forget Password</NavLink>
                                </div>
                                <NavLink to="dashboard" className="submit_btn" variant="primary"  size="lg"> Login </NavLink>
                                <NavLink className="free_poslix" to="">Try Poslix Free</NavLink>
                            </div>
                            </Col>
                        </Row>                    
                        </Col>
                    {/* END LOGIN FORM */}
                </Row>
           {/* START ROW */}
          </Container>

 
        </>
    )
}

export default Login