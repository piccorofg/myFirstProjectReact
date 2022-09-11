import React from "react";

export default function GreetWorld(props) {    
    return(
        <div>
            <h1>HI! { props.name }, tienes { props.edad }</h1>
        </div>
    )
}