import React,{useEffect,useState} from 'react'
import "./weather.css"
import {Data,mountimg,getlogo,getTime} from './data.js'



function Weather(){
    const [condition,setcondition]=useState(Data)
    const [input,setinput]=useState('london')
    const [finalinput,setfinalinput]=useState(input)
    console.log(condition.weather[0].icon)

    useEffect(()=>{
        async function getdata(){
            console.log('alive')
            try{
                console.log('getting')
                 const res=await fetch('https://api.openweathermap.org/data/2.5/weather?q='+finalinput+'&appid=e87863fc7d39009b76f038c8ef651dd6')
                //const res=await fetch('https://demoapi')
                console.log(res)
                const data = await res.json()
                // setcondition(data.weather[0])
                setcondition(data)
            }
            catch(err){
                setcondition(condition)
                console.log('bwbw')

            }

        }      
        getdata()
},[finalinput])
    function location(event){
        setinput(event.target.value)
        console.log(event.target.value)
    }
    function formsubmit(event){
        event.preventDefault()
        setfinalinput(input)
        // console.log('input')

    }

    return (
        <div id='weather-main-div' className={condition.weather[0].icon.includes('d')?'day-div':'night-div'}>
            <div id='weather-top'>
                <div id='bigdiv' className={condition.weather[0].icon.includes('d')?'day-temp':'night-temp'}>
                    <h1 className='weather-displays'>{finalinput}</h1>
                    <h4 className='weather-displays'>The Time {finalinput} is {getTime(condition.timezone)}</h4>
                    <h3 id='weather-degree'>{Math.floor(condition.main.temp)-273}°C</h3>
                    <h3 className={Data.weather[0].icon.includes('d')?'day-temp':'night-temp'} id='desc-w'>{Data.weather[0].main}</h3>
                    <div id='weather-image-container' className={condition.weather[0].icon.includes('d')?'day-logo':'night-logo'}>
                        <div id='logo-div'><img id='weather-logo' src={getlogo(condition.weather[0].icon)}/></div>
                    </div>
                </div>
            </div>
            <div id='weather-bottom'>
                <img id='mount-image' src={mountimg(condition.weather[0].icon)}/>
            </div>
            <div id='weather-input-div'>
                <form onSubmit={formsubmit} id='weather-form'>
                    <input type='text' value={input} name='loc-input'  className={condition.weather[0].icon.includes('d')?'day-input':'night-input'} onChange={location}/>
                    <button>Search</button> 
                </form>
            </div>
        </div>
    )
}
export default Weather