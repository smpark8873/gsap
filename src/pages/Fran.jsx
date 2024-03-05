
import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";


function Fran() {    
    const container = useRef();
    const q = gsap.utils.selector(container);
    gsap.registerPlugin(ScrollTrigger);   

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.fran',
                start: 'top -50%',
            },
        })
        .from('.fran_box01 .box_cover', {y: '-100%', duration: 0.7})
        .from('.fran_box02 .box_cover', {y: '100%', duration: 0.7}, '-=0.5')
        .from('.fran_box03 .box_cover', {y: '-100%', duration: 0.7}, '-=0.5') 
        .addLabel('franTl')
        .call(function() {
            q(".fran_box").forEach((el, i) => {
                el.addEventListener('mouseenter', function() {
                    q('.fran_box').forEach((el) => {
                        el.classList.remove('on');
                    })
                    el.classList.add('on');
                    var thisCover = el.querySelector('.box_cover');
                    var franCover = q('.fran_box:not(.on) .box_cover');
                    gsap.to(thisCover, {opacity: 0, scale: 0})
                    gsap.to(franCover, {opacity: 1, scale: 1})

                    var tl01 = gsap.timeline({paused: true});
                    tl01.fromTo('.box01_shapes .shape1', {opacity: 0, x: -100}, {opacity: 1, x: 0, duration: 0.4})
                    tl01.fromTo('.box01_shapes .shape2', {opacity: 0, x: -100}, {opacity: 1, x: 0, duration: 0.4}, '-=0.2')
                    tl01.fromTo('.box01_shapes .shape3', {opacity: 0, x: -100}, {opacity: 1, x: 0, duration: 0.5}, '-=0.2')

                    var tl02 = gsap.timeline({paused: true});
                    tl02.add([
                        gsap.fromTo('.fran02_img01', {rotate: 35, x: 100}, {rotate: 0, x: 0, ease: 'back.out'}),
                        gsap.fromTo('.fran02_img02', {rotate: -35, x: -120}, {rotate: 0, x: 0, ease: 'back.out'}),
                    ])

                    var tl03 = gsap.timeline({paused: true});
                    tl03.fromTo('.fran03_cir', {scale: 0}, {scale: 1, ease: 'back.out', stagger: 0.2})
                    tl03.fromTo('.fran03_txts', {opacity: 0, y: 100}, {opacity: 1, y: 0}, '-=0.3')

                    switch (i) {
                        case 0:
                            tl01.restart();
                            break;

                        case 1:
                            tl02.restart();
                            break;

                        case 2:
                            tl03.restart();
                            break;
                    }
                }
                )
            })
        }, null, 'franTl')

    }, { scope: container }) 
    
    return(
        <section className="fran" ref={container}>
            <ul className="fran_boxs fs_def">
                <li className="fran_box fran_box01">
                    <div className="box_head">
                        <p className="box_ttl sub40">
                            창업 비용 지원으로<br />
                            빠른 투자금 회수
                        </p>
                        <p className="box_txt">
                            적은 창업비용 + 지원금액으로<br />
                            <em>보다 빠른 투자금 회수가 가능</em>합니다.
                        </p>
                    </div>
                    <div className="box01_shapes l50">
                        <div className="shape1 ellipse">적은<br />창업비용</div>
                        <div className="shape2 ellipse">창업비용<br />지원</div>
                        <div className="dots">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="shape3">
                            <img src="/img/page/fran/fran_box01_banatiger.png" alt="banatiger coffee" />
                            <p>
                                <img src="/img/page/fran/fran_box01_text.png" alt="빠른 투자금 회수" />
                            </p>
                        </div>
                    </div>
                    <div className="box_cover bg-cover bg-full">
                        <span className="cover_img l50">
                            <span className="cover_txt"><img src="/img/page/fran/fran_cover_txt01.png" alt="1YEAR" /></span>
                        </span>
                    </div>
                </li>
                <li className="fran_box fran_box02">
                    <div className="box_head t_center">
                        <p className="box_ttl sub40">
                            합리성을 갖춘<br />
                            독창적 창업
                        </p>
                        <p className="box_txt">
                            독창적인 콘셉트의 카페를<br />
                            <em>가장 합리적인 수준의 가격</em>으로 창업합니다.
                        </p>
                    </div>
                    <Marquee speed="80" className="fran02_flow flow_container">
                        <span className="flow_item" style={{width: '782px'}}><img src="/img/page/fran/fran02_fl.png" alt="" /></span>
                    </Marquee>
                    <div className="fran02_img01 l50"><img src="/img/page/fran/fran02_img01.png" alt="" /></div>
                    <div className="fran02_img02 l50"><img src="/img/page/fran/fran02_img02.png" alt="" /></div>
                    <div className="fran02_img03 l50"><img src="/img/page/fran/fran02_img03.png" alt="" /></div>
                    <div className="box_cover bg-cover bg-full">
                        <span className="cover_img l50">
                            <span className="cover_txt"><img src="/img/page/fran/fran_cover_txt02.png" alt="1YEAR" /></span>
                        </span>
                    </div>
                </li>
                <li className="fran_box fran_box03">
                    <div className="box_head">
                        <p className="box_ttl sub40">
                            동반 성장을<br />
                            실천하는 진심
                        </p>
                        <p className="box_txt">
                            <em>창업비용 지원 금액인 1,700만원</em>으로<br />
                            더 좋은 상권에 투자할 수 있도록 권유드립니다.
                        </p>
                        <div className="fran03_cont rel">
                            <span className="fran03_cir fran03_cir01 abs">B급</span>
                            <span className="fran03_cir fran03_cir02 abs">C급</span>
                            <span className="fran03_cir fran03_cir03 abs">A급</span>
                            <span className="fran03_txts abs"><img src="/img/page/fran/fran03_txts_240201.png" alt="BANA TIGER +1,700만원" /></span>
                        </div>
                        <div className="box_cover bg-cover bg-full">
                            <span className="cover_img l50">
                                <span className="cover_txt l50"><img src="/img/page/fran/fran_cover_txt03.png" alt="1YEAR" /></span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <Marquee speed="80" className="fran_btm_flow flow_container">
                <span className="flow_item"><em className="lt">구산점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">연신내점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">시흥배곧점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">아산배방점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">평택고덕국제신도시점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">김천혁신도시점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">수원하늘채점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">운정힐스테이트점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">일산역점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">상봉역점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">청주성화점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">송정역점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">진천점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">제천장락점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">신림양산점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">울산달동점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">안산와동점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">진해용원점</em> OPEN<em className="oblique">!</em></span>
                <span className="flow_item"><em className="lt">천안직산점</em> OPEN<em className="oblique">!</em></span>
            </Marquee>
        </section>
    );
}

export default Fran;