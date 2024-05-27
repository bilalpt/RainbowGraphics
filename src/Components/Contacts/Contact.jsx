import React, { useState } from 'react'
import './contact.scss'
import { motion, animate, useInView } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';



const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.85 }
  };

export default function Contact() {
    const ref = useRef()
    const formRef = useRef()
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const isInView = useInView(ref, { margin: '-100px' });


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_x7oha0c', 'template_al7vvj7', form.current, {
                publicKey: 'J1xmxG_7XTD3haiQv',
            })
            .then(
                () => {
                    setSuccess(true)
                },
                (error) => {
                    setError(true)
                },
            );
    };

    return (
        <motion.div ref={ref} className='contact px-20 pb-20' variants={variants} initial="initial" whileInView='animate'>
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together <img src="" alt="" /></motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>rainbowgraphix2022@gmail.com</span>
                </motion.div>

                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Bright Tower Enchikkal jn , Thiruvananthapuram
                        <br  /> Pin : 695008</span>
                </motion.div>

                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 8089092767</span>
                </motion.div>

                <motion.div className="item flex flex-row" variants={variants}>

                    <a href="https://wa.link/hqahdd">
                    <img className='h-10 hover:scale-125 ' src="/whatsapp.png" alt="" />
                    </a>
                    
                    <a href="mailto:rainbowgraphix2022@gmail.com">
                    <img className='h-10 px-6 hover:scale-125' src="/communication.png" alt="" />
                    </a>

                    <a href="https://www.instagram.com/rainbowgraphix.org.in?igsh=MTlmcXQ1ZmVyZGtvbQ%3D%3D&utm_source=qr">
                    <img className='h-10 hover:scale-125' src="/instagram.png" alt="" />
                    </a>
                    
                </motion.div>
            </motion.div>

            <div className="formContainer">
                <motion.div className="location" variants={variants} initial="hidden" animate="visible">
                    <h2 className=" md:ml-20">Our Location</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15529.41184213513!2d76.94117013650651!3d8.489504364348967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb8b442ca3bb%3A0x56e0e8e5547a6c57!2sRainbow%20Graphix!5e0!3m2!1sen!2sin!4v1716750901999!5m2!1sen!2sin" width="600" height="450" referrerpolicy="no-referrer-when-downgrade"
                        className="md:ml-20 w-full md:w-1/2 lg:w-96 h-64 md:h-96"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </motion.div>
            </div>

        </motion.div>
        
    )
}
