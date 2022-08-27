import React,{useContext} from "react"
import { Usercontext } from "./basic"

const InitialState={
    'isRunning':false,
    'count':0
}

const defaultState={
    people:[{'content':'hello','id':1}],
    isModalopen:true,
    modalContent:'not set'
}
const url='https://api.unsplash.com/search/photos?page=1&query=astronomy&client_id=cyjPoHq34MoynwP7v0NvvnMtRfKuVF6mpt_byb2eNvU'

function Callapi(){
    async function getApi(){
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    }
}

export {InitialState,defaultState,url}