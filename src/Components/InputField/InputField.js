import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./InputField.css"

const InputField = (props) => {
const [showPassword, setShowPassword] = useState(false); 
const [inputType, setInputType] = useState("password")   

const showPw = () => {
    if(props.iconName === "uil uil-lock"){
        setShowPassword(!showPassword);
        setInputType("text");
    }
}
console.log(showPassword)

    return(
        <>
            <InputGroup className="mb-3">
            <label className="input_label">{props.labelName}</label>
                <Form.Control                    
                    type={showPassword ? inputType : props.inputType}
                    className="input_field"
                    placeholder={props.placeHolderName}
                />
                <InputGroup.Text onClick={showPw} className="input_icon"><i className={showPassword ? 'uil uil-eye' : props.iconName}> </i></InputGroup.Text> 
            </InputGroup>
        </>
    )
}

export default InputField;