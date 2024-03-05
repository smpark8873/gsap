import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

function Tasty () {
    const container = useRef();
    gsap.registerPlugin(ScrollTrigger);     

    useGSAP(() => {        
        
        // duplicateItem(document.querySelector('.tasty_flow'), document.querySelector('.tasty_flow .flow_item'));
        
        gsap.timeline({
            scrollTrigger: {
                trigger: '.tasty',
                start: 'top bottom', //bottom
                end: 'center 100%',
                scrub: 1
            },
        })
        .from('.tasty_img', {y: '100%'})

    }, { scope: container }) 

    return(         
        <section className="tasty rel" ref={container}>
            <Marquee speed="100" className="tasty_flow flow_container abs">
                <span className="flow_item" style={{width: '2455px'}}><img src="/img/page/fran/tasty_fl.png" alt="" /></span>
            </Marquee>
            <div className="tasty_img bg-cover bg-full" style={{zIndex: '10'}}></div>
        </section>    
    );
}

export default Tasty;