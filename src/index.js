import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Main from "./tenzies/tenzies.js"
import Weatherapp from "./weather/weatherapp.js"
import Useref from './basics/basics.js';
import Splashes from './splash/splashes.js'
import Animate from './animate/animate.js'


function Url(){
    return(
<BrowserRouter>
    <Routes>
        <Route path="tenzy" element={<Main/>}></Route>
        <Route path="" element={<Weatherapp/>}></Route>
        <Route path="basics" element={<Useref/>}></Route>
        <Route path="animate" element={<Animate/>}></Route>
        <Route path="splash" element={<Splashes/>}></Route>
    </Routes>
</BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('roots'));
root.render(
    <Url/>
);


