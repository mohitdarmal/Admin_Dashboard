import React from "react";

const Heading = (props) => {
    return(
        <>
            <h3 className={props.headingClass}> {props.heading} </h3>
        </>
    )
}

export default Heading;