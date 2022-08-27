import React,{useState,useEffect,useRef}from'react'
import {motion} from 'framer-motion'
import { headerparent} from './animatesplash'
import {FaArrowLeft,FaArrowRight,FaRocket} from 'react-icons/fa'
import './splash.css'
function Header(){
    return(
        <motion.div id='splash-before' variants={headerparent} initial='initial' animate='animate'>
            <div id='s-header-cont'>         
                <div id='splash-header'>
                    <h1>Image Hub</h1>
                    <h3>Over A Million Images Ready To be Explored</h3>
                </div>
            </div>
        </motion.div>
    )
}
function Splash(){
    const [search,setsearch]=useState('')
    const [parameter,setparameter]=useState('')
    const [isloading,setisloading]=useState(true)
    const [apidata,setapidata]=useState({})
    const [error,seterror]=useState(false)
    const [count,setcount]=useState(1)
    const [active,setactive]=useState(false)
    const refcontainer=useRef('')
    function controlSearch(event){
        setsearch(event.target.value)
    }
    function handleClick(){
        setparameter(search)
    }
    
    let newlist
    if(!isloading){
        newlist=apidata.results.map((item,key)=>{
            return(
                <div id='splash-item' key={key}>
                    <div id='splash-image-div'><img src={item.urls.regular} id='splash-image'/></div>
                    <p id='splash-image-description'>{item.alt_description}</p>
                </div>
            )
    })
 
    }
    function jumpto(){
        let value=refcontainer.current.value
        if (isNaN(value)===true){
            return}
        value=Number(value)
        if (value > apidata.total_pages){
            setcount(apidata.total_pages)
        }
        else if (value < 1){
            setcount(1)
        }
        else{setcount(value)}
        

    }
    function Details(){
        return(
            <div id='page-details'>
                <h4>page {count}/{apidata.total_pages}</h4>
                <h5 id='splashjump'>Jump to page</h5>
                <input id='splash-jump-input' placeholder={count} ref={refcontainer}/>
                <button onClick={jumpto} id='jumpbutt'><FaRocket/></button>
            </div>
        )
    }
    function prevpage(){
        setcount((prev)=>prev-1)
    }
    function nextpage(){
        setcount((prev)=>prev+1)
    }
    useEffect(()=>{
        if (parameter===''){
            return;
        }
            let url=`https://api.unsplash.com/search/photos?page=1&query=${parameter}&client_id=cyjPoHq34MoynwP7v0NvvnMtRfKuVF6mpt_byb2eNvU&page=${count}&per_page=20`
        async function ApiCall(){
            try{
                console.log('here')
                let res = await fetch(url)
                let data = await res.json()
                setapidata(data)
                setisloading(false)
                seterror(false)
                setactive(true)
                console.log(data)
            }
            catch(err){
                console.log('alive')
                seterror(true)
                setactive(false)
            }
        }
        ApiCall()
    },[parameter,count])
    return(
    <div id='splash-body-contain'>
        <div id='splash-input-button'>
            <div id='splash-input-div'><input type='text' id='splash-input' value={search} onChange={controlSearch} placeholder='Search Image'/>
                <button onClick={handleClick} id='search-button'>Search</button>
            </div>
            {error && <h4 id='splash-error'>Your Connection Is down....</h4>}
        </div>
        {active && <h3><Details/></h3>}

        <div id='splash-image-container'>{newlist}</div>
        <div id='button-div'>
            {active && count>1 && <button className='splash-buttons' onClick={prevpage}><FaArrowLeft  className='splash-arrows'/></button>}
            {active && <button className='splash-buttons' onClick={nextpage}><FaArrowRight className='splash-arrows'/></button>}
        </div>
    </div>
    )
}
export {Header,Splash}