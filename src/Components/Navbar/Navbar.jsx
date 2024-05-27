import React from 'react'
import '../Navbar/navbar.scss'
import {motion} from 'framer-motion'
import Sidebar from '../../Sidebar/Sidebar'

function Navbar() {
    return (
        <div className='navbar'>
            {/* sidebar */}
            <Sidebar/>
            <div className='wraper'>
                {/* <motion.span 
                initial={{opacity:0,scale:0.5}} 
                animate={{opacity:1,scale:1}} 
                transition={{duration:1}}
                >Rainbow Graphics</motion.span> */}

                <motion.img        
                initial={{opacity:0,scale:0.5}} 
                animate={{opacity:1,scale:1}} 
                transition={{duration:1}} src="/logof.png" alt="" />
                <div className='social'>
                    <a href="https://www.instagram.com/rainbowgraphix.org.in?igsh=MTlmcXQ1ZmVyZGtvbQ%3D%3D&utm_source=qr"><img src='/instagram.svg' alt="" /></a>
                    {/* <a href=""><img src='/gaming1.jpg' alt="" /></a>
                    <a href=""><img src='/gaming3.jpg' alt="" /></a> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
