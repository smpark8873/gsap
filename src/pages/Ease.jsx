import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, EffectFade } from 'swiper/modules';


function Ease() {
    const container = useRef();  
    const q = gsap.utils.selector(container);

    useGSAP(() => {
        let introTl = gsap.timeline({})
        introTl.from('.easy_cont', {y: '100%', duration: 1})
        introTl.add([
            gsap.from('.easy_food01', {scale: 0, y: '100%', x: '100%', rotate: 90, ease: 'back.out'}),
            gsap.from('.easy_food02', {scale: 0, y: '100%', x: '-80%', rotate: -90, ease: 'back.out'}),
        ], 0.5)
        introTl.from('.easy_ttls .ttl_up', {y: '100%', stagger: 0.25}, '-=0.3');
        introTl.call(() => {
            const elems = q('.easy_nums .num');
            const opt = {
                duration: 40,
                delay: 15,
                loop: 2,
                diff: 180,
                min: 0,
                max: 10,
                slowV: 4,
            };

            let numbers = []
            let turning = opt.max - opt.min
            let slowlyI = 0;

            for (let i = 0; i < elems.length; i++) {
                numbers[i] = elems[i].getAttribute('data-number');
            }

            for (let i = 0, start; i < elems.length; i++) {
                start = parseInt(numbers[i]) + 1;

                numbers[i] = [];
            
                for (let j = 0; j < turning * opt.loop; j++) {
                    if (start === turning){
                        start = opt.min;
                    }
                    numbers[i][j] = start;
                    start++;
                }
            }

            const play = () => {
                for (let i = 0; i < elems.length; i++) {
                    for (let j = 0; j < turning * opt.loop; j++) {
                        queue(i, j);
                    }
                }
            }

            const queue = (i, j) => {
                j - (turning * (opt.loop - 1)) >= 0 ? slowlyI++ : slowlyI = 0;
                let t = (j * opt.duration) + (i * opt.delay) + (Math.pow(slowlyI, 2) * opt.slowV);
                setTimeout(function() {
                    elems[i].style.backgroundPositionY = numbers[i][j] * -opt.diff + 'px';
                }, t);
            }

            play();
        })
    }, { scope: container }) 

    return(
        <section className="easy rel over_h" ref={container}>
            <div className="easy_cont abs">
                <span className="easy_cir l50"></span>
                <span className="easy_food01 l50"><img src="/img/page/fran/easy_food01.png" alt="" /></span>
                <span className="easy_food02 l50"><img src="/img/page/fran/easy_food02.png" alt="" /></span>
                <div className="easy_head t_center abs">
                    <p className="easy_ttls ttl_wrap">
                        <span className="ttl_up no-motion"><img src="/img/page/fran/easy_ttl01.png" alt="시작마저 쉬운" /></span>
                        <span className="ttl_up no-motion"><img src="/img/page/fran/easy_ttl02.png" alt="운영이 쉬운 카페" /></span>
                    </p>
                    <p className="easy_nums fs_def">
                        <span className="num" data-number="4">4</span>
                        <span className="dot"><img src="/img/page/fran/easy_dot.png" alt="," /></span>
                        <span className="num" data-number="9">9</span>
                        <span className="num" data-number="5">5</span>
                        <span className="num" data-number="0">0</span>
                        <span className="unit"><img src="/img/page/fran/easy_unit.png" alt="만원" /></span>
                    </p>
                    <div className="easy_btm rel">
                        <span className="btm_bg abs"></span>
                        <div className="easy_slide l50">
                            <span className="easy_rotate rotate abs"><img src="/img/page/fran/easy_rotate.png" alt="" /></span>
                            <Swiper
                                effect={'fade'}
                                loop = {true}
                                pagination={{
                                clickable: true,
                                }}
                                autoplay={{
                                    delay: 1800,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, EffectFade]}                                
                            >
                                <SwiperSlide><img src="/img/page/fran/easy_sl01.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/img/page/fran/easy_sl02.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/img/page/fran/easy_sl03.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/img/page/fran/easy_sl04.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/img/page/fran/easy_sl05.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/img/page/fran/easy_sl06.png" alt="" /></SwiperSlide> 
                            </Swiper>
                        </div>
                        <p className="btm_txt fs_def rel">
                            <span className="btm_txt01">20평 기준 인테리어 비용 3,600만원 🠒 <em>1,800만원 지원+가맹비(500만원) 교육비(300만원)</em>= </span> <span className="btm_txt02">2<em>,</em>600만원 지원!</span>
                        </p>
                    </div>
                </div>
            </div>                
        </section>
    );
}

export default Ease;