import React,{useRef,useEffect,useReducer,useState,createContext} from "react";
import {InitialState,defaultState,url} from './data.js'

function Basic(){
    const refContainer =useRef('abcd')
    const [demo,setdemo] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        setdemo(refContainer.current.value) 
      

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' ref={refContainer}/>
                <button>Submit</button>
            </form>
            <h1>{demo}</h1>
        </div>
        
    )
}

function Main(){
    function reducer(state,action){
        if (action.type === 'Start'){
            return{...state,isRunning:true}
        }
        else if (action.type === 'Stop'){
            return{...state,isRunning:false}
        }
        else if (action.type === 'Reset'){
            return{count:0,isRunning:false}
        }
        else if (action.type === 'Tick'){
            return{count:state.count + 1,isRunning:true}
        }
    }
    const [state,dispatch]=useReducer(reducer,InitialState)
    
    
    useEffect(()=>{
        if (!state.isRunning){
            return;
        }
        let abc=setInterval(()=>{dispatch({type:'Tick'})},1000)
        return (()=>{
            console.log('clearing')
            clearInterval(abc)
        }
        )
    },[state.isRunning])

    return(
        <div id='demdiv'>
            <h1>{state.count}s</h1>
            <button onClick={()=>{dispatch({type:'Start'})}}>Start</button>
            <button onClick={()=>{dispatch({type:'Stop'})}}>Stop</button>
            <button onClick={()=>{dispatch({type:'Reset'})}}> Reset</button>
        </div>
    )
}
function Items(){
    function reducer(state,action){
        if (action.type === 'ADD_ITEM'){
           
            const newpeople=[...state.people,{'content':action.payload,'id':state.people.length+1}]
            return(
                {...state,people:newpeople}
            )
        }
        if (action.type === 'REMOVE_ITEM'){
            const editedlist=state.people.filter((item)=>{
                if (item.id !== action.payload){return item}
            })
            return(
                {...state,people:editedlist}
            )
        }
        if (action.type === 'EDIT_ITEM'){
            console.log(state.people[action.payload-1])
            const editedpeople=[...state.people,(state.people[action.payload-1]={'content':action.newval,'id':action.id})]
            console.log(editedpeople)
            editedpeople.pop()
            console.log(editedpeople)
            return(
                {...state,people:editedpeople}
            )
    }
}
    
    const [state,dispatch] = useReducer(reducer,defaultState)
    const [curinput,setList] = useState('')
    
  
    function handleSubmit(){
        setList('')
        dispatch({type:'ADD_ITEM',payload:curinput})
    
        
    }
    const ItemList=state.people.map((item,key)=>{   
        return(
            <div key={key} id='butdiv'>
                <h4 key={key}>{item.content}</h4>
                <button onClick={()=>{
                    dispatch({type:'REMOVE_ITEM',payload:item.id})
                }} name={item.id}>Remove</button>
                <button onClick={()=>{
                    {console.log(item.id)}
                    dispatch({type:'EDIT_ITEM',payload:item.id,newval:curinput})
                }}>Edit</button>
            </div>
       
        )
    })
    
    return(
        <div id='items'>
            <input onChange={(event)=>{setList(event.target.value)}} value={curinput}/>
            <button onClick ={handleSubmit}>Add</button>
            <div>{ItemList}</div>
        </div>
    )

}

function Splash(){
    const [isloading,setisloading]=useState(true)
    const [apidata,setapidata] =useState({})
    console.log(apidata.results)

    let imageList;
    if (!isloading){
        console.log('Alive')
        imageList =apidata.results.map((item)=>{
            return (
                <div id='image-div'>
                    <img id='real-image' src={item.urls.small}/>
                </div>
            )
        })
        
    }
    useEffect(()=>{
        async function ApiCall(){
            const res =await fetch(url)
            const data=await res.json()
            setapidata(data)
            setisloading(false)
        }
        ApiCall()
    },[])

    return(
        <div>
            {isloading && <h2>Getting data</h2>}
            {!isloading && <h2>Fetch Complete</h2>}
            {!isloading && <div>{imageList}</div>}
        </div>
    )
}

export {Basic,Main,Items,Splash}