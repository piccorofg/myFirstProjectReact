import React from "react";

export default function RenderButton(props) { 
    //() => anonymous arrow function so that onclick waits to execute
    //console.log(props);

    // Assignment by destructuring
    const { userInfo, greetfn }  = props;
    //const { name }  = userInfo;  ---->  greetfn(name)

    console.log(userInfo);
    return(
        <div>
            <button type="button" onClick={() => greetfn(userInfo.name) }>I'm a button to Greeting</button>
        </div>
    );
}