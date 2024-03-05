import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

function Croffle () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {      
        gsap.timeline({
            scrollTrigger: {
                trigger: '.croffle',
                start: 'top 60%',
            },
        })
        .from('.croffle_bg', {scale: 1.2, duration: 2})

        // duplicateItem($('.croffle_btm_flow'), $('.croffle_btm_flow .flow_item'));

        gsap.timeline({
            scrollTrigger: {
                trigger: '.croffle_boxs',
                start: 'top -80%',
            },
        })
        .from('.croffle_box01 .arr', {width: 0, duration: 0.7})
        .from('.croffle_box01 .cover_img', {opacity: 0, duration: 0.3})
        .from('.croffle_box02 .arr', {width: 0, duration: 0.7})
        .from('.croffle_box02 .cover_img', {opacity: 0, duration: 0.3})          

    }, { scope: container }) 

    return(         
        <section className="croffle rel over_h" ref={container}>
            <div className="croffle_bg bg-cover bg-full"></div>
            <div className="rel">
                <div className="croffle_head t_center">
                    <p className="croffle_ttl ttl_wrap ttl70"><span className="ttl_up ttl70">비교할수록</span> <em>크로플은</em></p>
                    <p className="croffle_logo"><img src="/img/page/fran/croffle_logo.png" alt="BANA TIGER" /></p>
                </div>
                <ul className="croffle_boxs fs_def t_center">
                    <li className="croffle_box croffle_box01 rel over_h">
                        <div className="box_head">
                            <p className="box_label">경쟁사</p>
                            <p className="box_sub">
                                완제품을 납품 받아<br />
                                전자레인지에 데워나가는
                                <em>크로플</em>
                            </p>
                            <p className="box_txt txt20">
                                맛이 매우 떨어져서 수요가 적음
                            </p>
                        </div>
                        <div className="box_cont abs">
                            <img src="/img/page/fran/croffle_box01_cont_231205.png" alt="" />
                            <span className="arr abs"></span>
                            <span className="cover_img bg-full"><img src="/img/page/fran/croffle_box01_cover_231205.png" alt="" /></span>
                        </div>
                    </li>
                    <li className="croffle_box croffle_box02 rel">
                        <div className="box_head">
                            <p className="box_label">바나타이거</p>
                            <p className="box_sub">
                                미니베이커리식<br />
                                짧은 시간 구워서 나가는<br />
                                <em>크로플</em>
                            </p>
                            <p className="box_txt txt20">
                                식감과 맛이 매우 뛰어나 수요가 높음
                            </p>
                        </div>
                        <div className="box_cont abs">
                            <img src="/img/page/fran/croffle_box02_cont_231205.png" alt="" />
                            <span className="arr abs"></span>
                            <span className="cover_img bg-full"><img src="/img/page/fran/croffle_box02_cover_231205.png" alt="" /></span>
                        </div>
                    </li>
                </ul>
                <div className="croffle_btm rel">
                    <div className="croffle_wings wing_lines">
                        <span className="wing_line"></span>
                        <span className="wing_line"></span>
                        <span className="wing_line"></span>
                        <span className="wing_line"></span>
                    </div>
                    <div className="btm_head t_center">
                        <p className="btm_ttl txt26">어제 남은 치킨 데워먹을 때 VS 방금 갓 튀긴 치킨 먹을 때</p>
                        <p className="btm_txt ttl40">고객에게 가장 맛있는 순간을 제공하려면 <em>주문 즉시 조리는 필수<span>!</span></em></p>
                    </div>
                    <Marquee className="croffle_btm_flow flow_container">
                        <span className="flow_item"><img src="/img/page/fran/croffle_btm_fl_230828.png" alt="Drink Eat You Everywhere" /></span>
                        <span className="flow_item"><img src="/img/page/fran/croffle_btm_fl_230828.png" alt="Drink Eat You Everywhere" /></span>
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

export default Croffle;