import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Speed () {
    const container = useRef();
    gsap.registerPlugin(ScrollTrigger);     

    useGSAP(() => {

         gsap.timeline({
            scrollTrigger: {
                trigger: '.speed_head',
                start: 'top center',
            },
        })
        .from('.speed_ttl02 .ttl_img', {opacity: 0, x: '100%', ease: 'expo.in'})
        
        const speedMin = document.querySelector('.speed_time .min').clientHeight;

        gsap.timeline({
            scrollTrigger: {
                trigger: '.speed_time',
                start: 'top 60%',
            },
        })
        .addLabel('speedTl')
        .fromTo('.speed_svg', {strokeDasharray: 276*Math.PI, strokeDashoffset: 276*Math.PI}, {strokeDashoffset: 276*Math.PI*0.5, ease: 'none', duration: 2.6}, 'speedTl')
        .add([
            gsap.from('.speed_imgs .coffee', {opacity: 0, x: '50%', ease: 'power.out(4)'}),
            gsap.to('.speed_time .min', {backgroundPositionY: -speedMin, duration: 0.3})
        ], 'speedTl+=0.3')
        .add([
            gsap.from('.speed01 .dessert', {opacity: 0, x: '50%', ease: 'expo.in'}),
            gsap.from('.speed_stamp', {opacity: 0, scale: 2, ease: 'expo.in'}),
            gsap.to('.speed_time .min', {backgroundPositionY: -speedMin*2, duration: 0.3}),
        ], 'speedTl+=0.6')
        .to('.speed_time .min', {backgroundPositionY: -speedMin*7, duration: 1.3}, 'speedTl+=1.2')
        .from('.speed02 .dessert', {opacity: 0, x: '50%'}, 'speedTl+=2.5')
        .to('.speed02 .speed_imgs, .speed_time', {filter: 'grayscale(0.8)'}, 'speedTl+=2.8')

    }, { scope: container }) 

    return(         
        <section className="speed t_center rel" ref={container}>
            <div className="speed_head abs">
                <p className="speed_ttl01 ttl_wrap"><span className="ttl_up ttl70">커피는 습관이고</span></p>
                <p className="speed_ttl02 fs_def"><span className="ttl80">카페는</span><span className="ttl_img"><img src="/img/page/fran/speed_ttl_img.png" alt="속도전이다" /></span></p>
                <p className="speed_txt01 sub30">세계 어느 곳보다 빠름을 좋아하는 대한민국</p>
                <p className="speed_txt02 txt20">습관처럼 즐겨찾는 커피의 선택 포인트는 결국 속도입니다.</p>
                <div className="speed_time rel">
                    <img src="/img/page/fran/speed_time.png" alt="주문 후" />
                    <span className="min abs" ></span>
                    <div className="speed_svg abs">
                        {/* <svg viewBox="0 0 276 276" width="276" height="276">
                            <defs>
                                <pattern x="0" y="0" width="276" height="276" id="speedFill" patternUnits="userSpaceOnUse">
                                    <img href="/img/page/fran/speed_cir.png" x="0" y="0" width="276" height="276" transform="rotate(90, 138, 138)" />
                                </pattern>
                            </defs>
                            <circle cx="138" cy="138" r="69" fill="transparent" stroke="url('#speedFill')" stroke-width="138" className="speed_cir" transform="rotate(-90, 138, 138)"/>
                        </svg> */}
                    </div>
                </div>
                <a href="fran.asp.html#balance" className="speed_rotate l50"><img src="/img/page/fran/speed_rotate.png" alt="자세히 보기" /></a>
            </div>
            <div className="speed_wrap clearfix">
                <div className="speed01 f_left">
                    <div className="speed_cont abs">
                        <div className="speed_imgs rel">
                            <span className="coffee bg-full"><img src="/img/page/fran/speed_coffee01.png" alt="" /></span>
                            <span className="dessert abs"><img src="/img/page/fran/speed_dessert01_230828.png" alt="" /></span>
                            <span className="speed_stamp abs"><img src="/img/page/fran/speed_stamp.png" alt="2분만에 서빙 완료!" /></span>
                        </div>
                        <p className="cont_brand">바나타이거</p>
                        <p className="cont_txt txt20">주문 후 함께 받는 <em>바나타이거의 빠름</em></p>
                    </div>
                </div>
                <div className="speed02 f_left">
                    <div className="speed_cont abs">
                        <div className="speed_imgs rel">
                            <span className="coffee bg-full"><img src="/img/page/fran/speed_coffee02.png" alt="" /></span>
                            <span className="dessert bg-full"><img src="/img/page/fran/speed_dessert02.png" alt="" /></span>
                        </div>
                        <p className="cont_brand">경쟁 브랜드</p>
                        <p className="cont_txt txt20">불편한 경험의 반복을 습관으로 할 사람은 없습니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Speed;