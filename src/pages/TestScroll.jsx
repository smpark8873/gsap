import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../test.css';

function TestScroll () { 
    // gsap.registerPlugin(ScrollTrigger);

    // const marqueeRef = useRef(null);

   
    useGSAP(() => {
        // const marqueeElement = marqueeRef.current;
        // const marqueeWidth = marqueeElement.offsetWidth;
        // const duration = marqueeWidth / 150;
    

        // const tl = gsap.timeline({ repeat: -1 });
        // tl.to(marqueeElement, { x: -marqueeWidth, duration, ease: 'none' });

      
        var colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];

        //initially colorize each box and position in a row
        gsap.set(".box", {
          backgroundColor: (i) => colors[i % colors.length],
          x: (i) => i * 50
        });
        
        
        gsap.to(".box", {
          duration: 5,
          ease: "none",
          x: "+=500", //move each box 500px to right
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
          },
          repeat: -1
        });      

        
          
      
    }, {});    
     
    return (         
    //    <div className="wrapper">
    //         <div className='section01'>
    //             <p ref={marqueeRef}>BANAPRESSO BANAPRESSO</p>
    //             <div className='coffee'><img src="/img/testScroll/coffee.png" alt="" /></div>
    //             <p ref={marqueeRef}>BANAPRESSO BANAPRESSO</p>
    //         </div>
    //    </div>
    <div class="wrapper">
        <div class="boxes">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
            <div class="box">5</div>
            <div class="box">6</div>
            <div class="box">7</div>
            <div class="box">8</div>
            <div class="box">9</div>
            <div class="box">하 짜증 스트레스</div>
        </div>
    </div>
   );
}

export default TestScroll;