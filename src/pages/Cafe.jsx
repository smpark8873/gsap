import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Cafe () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {      
        gsap.timeline({
            scrollTrigger: {
                trigger: '.cafe_inn',
                start: 'top 80%',
            },
        })
        .add([
            gsap.from('.cafe01 .cafe_inn', {opacity: 0, x: '30%', ease: 'expo.in'}),
            gsap.from('.cafe03 .cafe_inn', {opacity: 0, x: '-30%', ease: 'expo.in'}),
        ])
        .addLabel('cafeTl')
        .from('.cafe01_nums', {opacity: 0, y: 60, stagger: 0.3})
        .from('.cafe01_stamp img', {opacity: 0, scale: 2, ease: 'expo.in'})
        .from('.cafe03 .ico', {opacity: 0, x: -50, stagger: 0.2}, 'cafeTl')

    }, { scope: container }) 

    return(         
        <section className="cafe rel t_center"  ref={container}>
            <div className="cafe_video bg-full bg-cover over_h">
                <video autoplay loop muted playsinline width="100%" height="100%">
                    <source type="video/mp4" src="../video/cafe_video.mp4" />
                </video>
            </div>
            <div className="cafe_head abs t_center">
                <p className="cafe_ttl ttl_wrap"><span className="ttl_up ttl70"><em>천만원 남기기</em> 쉬운 카페</span></p>
                <p className="cafe_logo"><img src="/img/page/fran/cafe_logo.png" alt="BANA TIGER" /></p>
            </div>
            <ul className="cafe_boxs fs_def rel">
                <li className="cafe_box over_h">
                    <div className="cafe01 bg-full">
                        <div className="cafe_inn abs">
                            <p className="cafe_sub">
                                매출이 같아도<br />
                                <em>효율은 다르다</em>
                            </p>
                            <p className="cafe01_nums cafe01_nums01"><img src="/img/page/fran/cafe01_nums01_230828.png" alt="3,980만원" /></p>
                            <p className="cafe01_nums cafe01_nums02"><img src="/img/page/fran/cafe01_nums02_230828.png" alt="1,397만원" /></p>
                        </div>
                        <div className="cafe01_stamp abs t_right">
                            <img src="/img/page/fran/cafe01_stamp.png" alt="수익률 35%!" />
                        </div>
                    </div>
                </li>
                <li className="cafe_box cafe02">
                    <div className="cafe02_cont abs">
                        <p className="cafe02_label">2023년 5월 수원하늘채점</p>
                        <div className="cafe02_store rel">
                            <span className="store_img bg-cover abs">
                                <img className="w100" src="/img/page/fran/cafe02_store.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="cafe02_btm abs">
                        <div className="btm_twrap">
                            <p className="cafe02_ttl sub30">선택의 기준은 수익이다</p>
                            <p className="cafe02_txt txt20">
                                똑같은 매출도 적은 인력으로 만드는<br />
                                <em>일당백의 힘</em>이 있습니다.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="cafe_box over_h">
                    <div className="cafe03 bg-full">
                        <div className="cafe_inn abs">
                            <p className="cafe_sub">
                                둘이서 가능한<br />
                                <em>일매출 120만원</em>
                            </p>
                            <div className="cafe03_twrap cafe03_twrap01 fs_def">
                                <p className="cafe03_txt01">
                                    <em>바나타이거</em><br />
                                    운영 인력
                                </p>
                                <span className="cafe03_txt02"><img src="/img/page/fran/cafe03_txt02_01.png" alt="2인" /></span>
                                <p className="cafe03_icos01 rel">
                                    <span className="ico abs"><img src="/img/page/fran/cafe03_ico01_02.png" alt="" /></span>
                                    <img className="rel" src="/img/page/fran/cafe03_ico01_01.png" alt="" />
                                </p>
                            </div>
                            <div className="cafe03_twrap cafe03_twrap02 fs_def">
                                <p className="cafe03_txt01">
                                    <em>경쟁 브랜드</em><br />
                                    운영 인력
                                </p>
                                <span className="cafe03_txt02"><img src="/img/page/fran/cafe03_txt02_02.png" alt="3인" /></span>
                                <p className="cafe03_icos02 rel">
                                    <span className="ico ico01 abs"><img src="/img/page/fran/cafe03_ico02_02.png" alt="" /></span>
                                    <span className="ico ico02 abs"><img src="/img/page/fran/cafe03_ico02_02.png" alt="" /></span>
                                    <img className="rel" src="/img/page/fran/cafe03_ico02_01.png" alt="" />
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Cafe;