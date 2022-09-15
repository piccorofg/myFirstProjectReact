import React from "react";

export default function RenderButton(props) { 
    //() => anonymous arrow function so that onclick waits to execute
    console.log(props);
    return(
        <div>
            <button type="button" onClick={() => props.greetfn(props.userInfo.name) }>I'm a button to Greeting</button>
        </div>
    );
}