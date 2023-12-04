import React from "react";
import "./Button.css";

export default props => 
    <button className={`
        button
        ${props.equal ? 'equal' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `} onClick={e => props.click(props.label)} >
   
     {props.label}
    
    </button>



