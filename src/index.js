import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Main from "./tenzies/tenzies.js"
import Weatherapp from "./weather/weatherapp.js"

function Url(){
    return(
<BrowserRouter>
    <Routes>
        <Route path="tenzy" element={<Main/>}></Route>
        <Route path="" element={<Weatherapp/>}></Route>
    </Routes>
</BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('roots'));
root.render(
    <Url/>
);


