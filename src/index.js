import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Main from "./tenzies/tenzies.js"

function Url(){
    return(
<BrowserRouter>
    <Routes>
        <Route path="" element={<Main/>}></Route>
    </Routes>
</BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('roots'));
root.render(
    <Url/>
);


