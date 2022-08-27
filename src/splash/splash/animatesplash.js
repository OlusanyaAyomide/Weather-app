import {useAnimation} from 'framer-motion'

const headerparent={
    'initial':{
        x:-1000,
        opacity:0
    },
    'animate':{
        x:0,
        opacity:1,
        'transition':{
            duration:0.3,
            delay:0.2,
            when:'beforeChildren',
            staggerChildren:0.9,
        }
    }
}

export {headerparent}