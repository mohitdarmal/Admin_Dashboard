import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./Search.css"

const Search = (props) => {
    return(
        <>
            <InputGroup className="">
                <InputGroup.Text className="search_icon"><i className="bx bx-search"> </i></InputGroup.Text> 
                <Form.Control                    
                    type="text"
                    className="search_field"
                    placeholder={props.placeHolderName}
                />                
            </InputGroup>
        </>
    )
}

export default Search;