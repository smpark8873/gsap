import * as React from 'react';
import { Reset } from 'styled-reset';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../test.css';

function TestScroll () { 
    gsap.registerPlugin(ScrollTrigger);


   
    useGSAP(() => {
       
      

        
          
      
    }, {});    
     
    return ( 
    <div class="wrapper">
        <section className='page page01'>
          <h1 className='logo'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
        </section>
        <section className='page page02'>
          공부 하자
        </section>
        <section className='page page03'>
          
        </section>
        <section className='page page04'>
          
        </section>
        <section className='page page05'>
          
        </section>
       
    </div>
   );
}

export default TestScroll;