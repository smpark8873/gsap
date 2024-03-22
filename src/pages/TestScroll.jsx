import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../test.css';

function TestScroll () { 
    gsap.registerPlugin(ScrollTrigger);

    const marqueeRef = useRef(null);

   
    useGSAP(() => {
        const marqueeElement = marqueeRef.current;
        const marqueeWidth = marqueeElement.offsetWidth;
        const duration = marqueeWidth / 150;
    

        const tl = gsap.timeline({ repeat: -1 });
        tl.to(marqueeElement, { x: -marqueeWidth, duration, ease: 'none' });
      
    }, {});    
     
    return (         
       <div className="wrapper">
            <div className='section01'>
                <p ref={marqueeRef}>BANAPRESSO BANAPRESSO</p>
                <div className='coffee'><img src="/img/testScroll/coffee.png" alt="" /></div>
                <p ref={marqueeRef}>BANAPRESSO BANAPRESSO</p>
            </div>
       </div>
   );
}

export default TestScroll;