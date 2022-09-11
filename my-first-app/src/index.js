/**
 * 1. import react
 * 2. render on DOM
 * 3. select id where the component will render
 * 4. paint the screen the constant Hello World in the divi with id root
 */

import React from 'react'; 
import ReactDOM from 'react-dom'; 
const HolaMundo = <h1>Hello World React!</h1>
const root =  document.getElementById('root'); 
ReactDOM.render(HolaMundo, root); 
