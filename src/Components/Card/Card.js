import React from "react";
import "./Card.css"

const Card = (props) => {
    return(
        <>
            <div className="card_box">
                <h3 className={props.headingClass}>{props.countingNumber}</h3>
                <h5>{props.cardName}</h5>
            </div>
        </>
    )
}

export default Card;