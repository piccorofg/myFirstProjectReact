import React from "react";

export default function HelloWorld (props) {
    console.log(props.userInfo.name);
    console.log(props.userInfo.age);
    console.log(props.userInfo.color);
    return (
        <div>
            <h1>Hi { props.userInfo.name }</h1>
            <h2>You are { props.userInfo.age }</h2>
            <h2>You favorite color is { props.userInfo.color }</h2>
        </div>
    )
}
