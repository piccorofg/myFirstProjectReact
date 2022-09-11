import React from "react";

export default function GreetWorld(props) {    
    return(
        <div>
            <h1>HI! { props.name }, you are { props.edad } years old</h1>
        </div>
    )
}