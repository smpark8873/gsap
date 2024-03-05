import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Smile () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.smile',
                start: 'top 30%'
            }
        })
        .add([
            gsap.fromTo('.smile01_nums01', {x:'100%',opacity:0}, {x:0,opacity:1,duration:1.2}),
            gsap.fromTo('.smile01_nums02', {x:'-100%',opacity:0}, {x:0,opacity:1,duration:1.2}),
        ])
        // var tl01 = gsap.timeline({paused: true});
        // tl01.fromTo('.smile01_stamp', {opacity: 0, scale: 2}, {opacity: 1, scale: 1, ease: 'expo.in'})

        // var tl02 = gsap.timeline({paused: true});
        // tl02.fromTo('.smile01_stamp02', {opacity: 0, scale: 2}, {opacity: 1, scale: 1, ease: 'expo.in'})

        // var prevProgress = 0,
        // 	deriction = 'down';

        // gsap.timeline({})
        // .call(function() {
        // 	if(deriction === 'down'){
        // 		tl01.play(0);
        // 	}else{
        // 		tl01.reverse(1);
        // 	}
        // }, null, 0.1)
        // .add([
        //     gsap.from('.smile01_nums01', {opacity: 0, x: '50%'}),
        //     gsap.to('.smile01_nums03', {opacity: 1, x: 305}),
        // ])
        // .add([
        //     gsap.to('.smile01_nums01', {opacity: 0.5}),
        //     gsap.to('.smile01_nums03_01', {opacity: 0}),
        //     gsap.from('.smile01_nums03_02', {opacity: 0}),
        // ])
        // .add([
        //     gsap.to('.smile01_twrap01', {opacity: 0, y: -100}),
        //     gsap.from('.smile01_twrap02', {opacity: 0, y: 100}),
        //     gsap.to('.smile01_nums01', {opacity: 0}),
        // 	gsap.to('.smile01_stamp', {opacity: 0})
        // ])
        // .add([
        //     gsap.from('.smile01_nums02_01', {opacity: 0, x: '100%'}),
        //     gsap.from('.smile01_nums02_02', {opacity: 0, x: '-100%'}),
        //     gsap.to('.smile01_nums03', {x: 0}),
        // ])
        // .add([
        //     gsap.to('.smile01_nums03 .nums03_mid01', {width: 0}),
        //     gsap.from('.smile01_nums03 .nums03_mid02', {width: 0}),
        // ])
        // .call(function() {
        // 	if(deriction === 'down'){
        // 		tl02.play(0);
        // 	}else{
        // 		tl02.reverse(1);
        // 	}
        // }, null, '-=0.5')

        gsap.timeline({
            scrollTrigger: {
                trigger: '.analyze',
                start: 'top bottom+=500px',
            },
        })
        .from('.smile02', {y: '100%', duration: 1})
        .from('.smile02_ttl_deco', {scale: 0, ease: 'back.out', transformOrigin: 'center bottom'}, '-=0.3')

        var plusTl01 = gsap.timeline({});
        plusTl01.to('.smile02_plus01 span:nth-child(1)', {opacity: 0, y: '-200%', duration: 0.7, repeat: -1})
        plusTl01.to('.smile02_plus01 span:nth-child(2)', {opacity: 0, y: '-200%', duration: 0.7, repeat: -1}, 0.2)
        plusTl01.to('.smile02_plus01 span:nth-child(3)', {opacity: 0, y: '-200%', duration: 0.7, repeat: -1}, 0.4)

        var plusTl02 = gsap.timeline({});
        plusTl02.to('.smile02_plus02 span:nth-child(1)', {opacity: 0, y: '200%', duration: 0.7, repeat: -1})
        plusTl02.to('.smile02_plus02 span:nth-child(2)', {opacity: 0, y: '200%', duration: 0.7, repeat: -1}, 0.2)
        plusTl02.to('.smile02_plus02 span:nth-child(3)', {opacity: 0, y: '200%', duration: 0.7, repeat: -1}, 0.4)
              

    }, { scope: container }) 

    return(         
        <section className="smile bg-cover over_h" ref={container}>
            <div className="smile_fixed t_center">
                <div className="smile_fixed_inn">
                    <div className="smile_head rel">
                        <p className="smile_ttl01 ttl70">웃음이 나는 오늘</p>
                        <p className="smile_ttl02 ttl80">더 크게 웃을 내일</p>
                    </div>
                    <div className="smile01">
                        <div className="smile01_twraps rel">
                            <div className="smile01_twrap01 bg-full">
                                <p className="smile01_txt01">
                                    시작부터 <span className="bold">GET<em className="oblique">!</em></span> 하는
                                    <span className="bold highlight_wrap">
                                        <span className="highlight"></span>
                                        <span className="rel">5% 수익</span>
                                    </span>
                                </p>
                                <p className="smile01_txt02 txt20">
                                    <em>업계 최저 수준의 원가로 업계 최고 수준의 원두를<em className="oblique">!</em></em><br />
                                    경쟁 브랜드와 비교해 5% 이상 낮은 가격으로 최상급 원두를 공급합니다.
                                </p>
                            </div>
                        </div>
                        <div className="smile01_cont inner">
                            <div className="flex-center">
                                <div className="smile01_nums01">
                                    <img src="/img/page/fran/smile01_nums01_231205.png" alt="경쟁 브랜드 원가율 40%" />
                                </div>
                                <div className="smile01_nums02">
                                    <img src="/img/page/fran/smile01_nums02_231205.png" alt="론칭 원가율 37%" />
                                </div>
                            </div>
                            <p className="smile01_round">매출 3,000만원 기준</p>
                            <div className="smile01_table p_t30"><img src="/img/page/fran/smile01_table.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="smile02 rel">
                <p className="smile02_ttl abs t_center">
                    <img src="/img/page/fran/smile02_ttl.png" alt="다점포 매장의 든든한 보너스 혜택" />
                    <span className="smile02_ttl_deco l50"><img src="/img/page/fran/smile02_ttl_deco.png" alt="" /></span>
                </p>
                <div className="smile02_cont t_center">
                    <ul className="smile02_coupons fs_def">
                        <li className="smile02_coupon01 rel">
                            <img src="/img/page/fran/smile02_coupon01.png" alt="" />
                            <p className="smile02_plus smile02_plus01 abs">
                                <span>+ Bonus</span>
                                <span>+ Bonus</span>
                                <span>+ Bonus</span>
                                <span className="rel">+ Bonus</span>
                            </p>
                        </li>
                        <li className="smile02_coupon02 rel">
                            <img src="/img/page/fran/smile02_coupon02.png" alt="" />
                            <p className="smile02_plus smile02_plus02 abs">
                                <span>+ Bonus</span>
                                <span>+ Bonus</span>
                                <span>+ Bonus</span>
                                <span className="rel">+ Bonus</span>
                            </p>
                        </li>
                    </ul>
                    <p className="smile02_txt">매장마다 매년 200만원 수준에 해당하는 <em>보너스 원두</em>를 지원합니다.</p>
                </div>
            </div>
        </section>                
    );
}

export default Smile;