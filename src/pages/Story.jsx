import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Story () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {      
              

    }, { scope: container }) 

    return(         
        <section className="story t_center" ref={container}>
            <p className="story_ttl ttl_wrap"><span className="ttl_up ttl70">성공창업 스토리</span></p>
            <div className="story_slide rel">
                <div className="swiper-container">
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide">
                            <div className="story_sl">
                                <div className="story_img bg-cover rel">
                                    <span className="story_stamp l50"><img src="/img/page/fran/story_stamp.png" alt="" /></span>
                                </div>
                                <div className="story_twrap">
                                    <p className="story_name">수원하늘채점</p>
                                    <p className="story_tag"># 인건비 X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#크로플 맛집&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#배달매출&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#남매창업</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <button type="button" className="story_btn story_prev l50">이전</button>
                <button type="button" className="story_btn story_next l50">다음</button>
            </div>
        </section>                
    );
}

export default Story;