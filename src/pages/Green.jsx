import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Green () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {      
              

    }, { scope: container }) 

    return(         
        <div className="green_wrap">
            <section className="analyze t_center">
                <p className="anlz_ttl ttl_wrap"><span className="ttl_up ttl60">수익성 분석</span></p>
                <div className="anlz_cont inner1260">
                    <img src="/img/page/fran/anlz_cont_230828.png" alt="" />
                    <span className="anlz_top01 bg-full"><img src="/img/page/fran/anlz_top01_230828.png" alt="" /></span>
                    <span className="anlz_top02 bg-full"><img src="/img/page/fran/anlz_top02_230828.png" alt="" /></span>
                </div>
            </section>
        </div>
    );
}

export default Green;