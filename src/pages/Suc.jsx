import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";


function Suc () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {      
        
        gsap.timeline({
            scrollTrigger: {
                trigger: '.suc',
                start: 'top center',
                end: 'bottom bottom',
                scrub: 1
            },
        })
        .add([
            gsap.to('.cafe02_store .store_img', {y: 994, width: 603, height: 580}),
            gsap.to('.cafe02_store .store_img img', {opacity: 0.4}),
        ])

        gsap.timeline({
            scrollTrigger: {
                trigger: '.suc_cont',
                start: 'top 85%',
            },
        })
        .add([
            gsap.from('.suc_dsrt01', {opacity: 0, x: '70%', ease: 'expo.in'}),
            gsap.from('.suc_dsrt02', {opacity: 0, x: '-70%', ease: 'expo.in'}),
        ])
        .add([
            gsap.from('.suc_deco01', {scale: 0, x: '100%', duration: 0.7, ease: 'back.out(3)', transformOrigin: 'right bottom'}),
            gsap.from('.suc_deco02', {scale: 0, x: '-100%', duration: 0.7, ease: 'back.out(3)', transformOrigin: 'left bottom'}),
        ])

        gsap.timeline({
            scrollTrigger: {
                trigger: '.suc_cont',
                start: 'top 75%',
            },
        })
        .from('.suc_lis', {opacity: 0, y: '80%', duration: 0.7, ease: 'back.out'})

        // duplicateItem($('.suc_flow'), $('.suc_flow'));

           

    }, { scope: container }) 

    return(         
        <section className="suc"  ref={container}>
            <div className="suc_head t_center rel">
                <p className="suc_ttl">
                    <span className="ttl_wrap"><span className="ttl_up ttl70">가리지 않고</span></span><br />
                    <em className="ttl80">다 잘 되는 성공탄력</em>
                </p>
                <p className="suc_sub sub30">동네 구석의 매장도, 작은 규모의 매장도</p>
                <p className="suc_txt txt20">
                    크로플을 잘하는 스몰 베이커리 카페 바나타이거는<br />
                    높은 판매 단가로 어떠한 조건의 입지에서도 기대 이상의 높은 매출을 완성합니다.
                </p>
            </div>
            <div className="suc_cont rel">
                <div className="suc_bg rel">
                    <div className="suc_wings wing_lines">
                        <span className="wing_line"></span>
                        <span className="wing_line"></span>
                        <span className="wing_line"></span>
                    </div>
                </div>
                <div className="suc_foods fs_def abs">
                    <div className="suc_food">
                        <span className="suc_deco01 abs"><img src="/img/page/fran/suc_deco01.png" alt="" /></span>
                        <span className="suc_dsrt01 abs"><img src="/img/page/fran/suc_dsrt01.png" alt="" /></span>
                    </div>
                    <div className="suc_food t_right">
                        <span className="suc_deco02 abs"><img src="/img/page/fran/suc_deco02.png" alt="" /></span>
                        <span className="suc_dsrt02 abs"><img src="/img/page/fran/suc_dsrt02.png" alt="" /></span>
                    </div>
                </div>
                <ul className="suc_lis fs_def t_center abs">
                    <li className="suc_li"><img src="/img/page/fran/suc_li01.png" alt="작지만 알찬 15평 매장 상봉역점 1,326,872원 일 최고 홀 매출" /></li>
                    <li className="suc_li"><img src="/img/page/fran/suc_li02.png" alt="오픈 한달만에 목표 매출 돌파 수원하늘채점 1,500,841원 일 최고 홀 매출" /></li>
                    <li className="suc_li"><img src="/img/page/fran/suc_li03.png" alt="시골 터줏대감이 된 진천점 1,470,274원 일 최고 홀 매출" /></li>
                </ul>
            </div>
            <Marquee speed="80" className="suc_flow flow_container">
                <div className="flow_item"><img src="/img/page/fran/suc_fl01.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl03.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl04.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl05.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl06.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl07.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl08.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl09.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl10.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl11.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl12.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl13.png" alt="" /></div>
                <div className="flow_item"><img src="/img/page/fran/suc_fl14.png" alt="" /></div>
            </Marquee>
        </section>    
    );
}

export default Suc;