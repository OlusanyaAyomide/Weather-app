import React,{useState} from 'react'
import {motion,useAnimation} from 'framer-motion'
import './animate.css'

const box2variant={
    'hover':{
        scale:1.1
    },
    'click':{
        scale:0.8
    }

}
const parentbox={
    'hidden':{
        x:-500
    },
    'visible':{
        x:0,
        stifness:100,
        transition:{
            delay:0.5,
            when:'beforeChildren',
            staggerChildren:0.3
        }
    }
}
const childrenbox={
    'hidden':{
        y:100,
        opacity:0,
    },
    'visible':{
        y:0,
        opacity:1,
    }
}
const list=['minbox','minbox','minbox']
const boxes=list.map((item,key)=>{
    return(
        <motion.div key={key} className={item} variants={childrenbox}>
        </motion.div>
    )
})
const fourthbox={
    'animation':{
        x:[80,40,50,40,0],
        borderRadius:['10%','20%','50%','50%','20%'],
        rotate:[0,0,270,270,0],
        scale:[1,1.2,1.1,1.2,1],
        transition:{
            duration:2
        }
    }
}

function Animate(){
    const [isAnimating,setisAnimating]=useState(false)
    const [issideon,setissideon]=useState(false)
    const control =useAnimation()
    function right(){ 
        setissideon(true) 
        control.start({
            x:0,
            scale:[0.2,0.5,1],
            borderRadius:['50%','20%','0%'],
            transition:{
                duration:0.2
            }
        })
    }
       
    function left(){
        setissideon(false)
            control.start({
                x:-500,
                borderRadius:['20%','50%','50%','50%','50%'],
                scale:0.2,
                rotate:[0,0,270,270,0],
                transition:{
                    duration:0.5
                }
            })
        }
    
    return(
            <div id='box-container'>
            {!issideon && <button onClick={right}>Display</button>}
            {issideon && <button onClick={left}>Hide</button>}
            <motion.div id='box-one'
            animate={{x:isAnimating?200:0,opacity:isAnimating?1:0.3,rotate:isAnimating?360:0,
            scale:isAnimating?3:1,y:isAnimating?100:0}} 
            initial={{opacity:0.3}}
            transition={{type:'spring',stiffness:60}}
            onClick={()=>setisAnimating((prev=>!prev))}
            >Hello World
            </motion.div>

            <motion.div id='box-one' variants={box2variant} whileHover='hover' whileTap='click'></motion.div>
            <motion.div id='box-one' variants={parentbox} initial='hidden' animate='visible'>
                {boxes}
            </motion.div>
            <motion.div id='box-one' variants={fourthbox} animate='animation'></motion.div>
       
            <motion.div id='box-two' animate={control} initial={{x:-500}} ></motion.div>
        </div>
    )
}
export default Animate