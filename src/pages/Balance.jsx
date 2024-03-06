import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Balance () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.balance',
                start: 'top -60%',
            },
        })
        .from('.blc01_stamp01', {opacity: 0, scale: 2, ease: 'expo.in'})
        .from('.blc01_stamp02', {opacity: 0, scale: 2, ease: 'expo.in'}, '-=0.2')

        var blcTl = gsap.timeline({paused: true})
        blcTl.from('.blc03_stamp01', {opacity: 0, scale: 2, ease: 'expo.in'})
        blcTl.from('.blc03_stamp02', {opacity: 0, scale: 2, ease: 'expo.in'}, '-=0.2')

        gsap.timeline({
            scrollTrigger: {
                trigger: '.balance',
                start: 'top top',
                end: 'bottom top-=1800px',
                pin: true,
                scrub: 0.5
            },
            duration: 3
        })
        .to('.blc_rotate', {rotate: -120, ease: 'none', duration: 1.2}, 0.5)
        .to('.blc_rotate', {rotate: -240, ease: 'none', duration: 1.2}, 2.5)
        .call(function() {
            blcTl.play();
        }, null, 3)  
              

    }, { }) 

    return(         
        <section className="balance rel over_h" id="balance" ref={container}>
            <div className="blc_rotate abs">
                <div className="blc_wrap blc_wrap01">
                    <div className="blc_inn abs">
                        <div className="blc01_head t_center">
                            <p className="blc_ttl01 ttl_wrap"><span className="ttl_up ttl70">균형감 있는</span></p>
                            <p className="blc_ttl02 ttl80">업무 강도의 최소화</p>
                        </div>
                        <div className="blc01_cont bg-cover rel">
                            <span className="blc01_stamp01 abs bg-cover"></span>
                            <span className="blc01_stamp02 abs bg-cover"></span>
                        </div>
                    </div>
                </div>
                <div className="blc_wrap blc_wrap02">
                    <div className="blc_inn abs">
                        <p className="blc02_stroke l50 bg-cover"></p>
                        <div className="blc02_cont bg-cover rel"></div>
                    </div>
                </div>
                <div className="blc_wrap blc_wrap03">
                    <div className="blc_inn abs">
                        <p className="blc03_stroke l50 bg-cover"></p>
                        <div className="blc03_cont bg-cover rel">
                            <span className="blc03_stamp01 abs bg-cover"></span>
                            <span className="blc03_stamp02 abs bg-cover"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Balance;