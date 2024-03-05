import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Reason () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {      
        gsap.timeline({
            scrollTrigger: {
                trigger: '.reason',
                start: 'top 60%',
            },
        })
        .from('.reason_bg', {scale: 1.2, duration: 2})
        .fromTo('.reason_ttl .ttl_up01', {y: '100%'},{y:0}, '-=2')
        .fromTo('.reason_ttl .ttl_up02', {y: '100%'},{y:0}, '-=1.5')     

    }, { scope: container }) 

    return(         
        <section className="reason over_h" ref={container}>
            <div className="reason_bg bg-cover"></div>
            <div className="reason_inn rel">
                <div className="reason_ttl_wrap abs">
                    <div className="reason_ttl ttl_wrap">
                        <div className="ttl01 ttl50 over_h"><p className="ttl_up01">바나타이거를</p></div>
                        <div className="ttl01 ttl50 over_h"><p className="ttl_up02">창업해야만 하는</p></div>
                        <p className="ttl02 ttl80">6가지 이유</p>
                    </div>
                </div>
                <ul className="reason_cont_wrap fs_def">
                    <li className="reason_cont">
                        <div className="flex-center h100">
                            <div>
                                <p className="reason_cont_num">01</p>
                                <p className="reason_cont_ttl">
                                    소자본 창업<br />
                                    성공모델
                                </p>
                                <p className="reason_cont_des">
                                    초기투자 비용은 낮게,<br />
                                    가맹점 수익률은 높게<br />
                                    바나타이거 커피가 만들어갑니다.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="reason_cont">
                        <div className="flex-center h100">
                            <div>
                                <p className="reason_cont_num">02</p>
                                <p className="reason_cont_ttl">
                                    남는 게 있는<br />
                                    저가 커피
                                </p>
                                <p className="reason_cont_des">
                                    저가 커피 업계 통상원가율 38%,<br />
                                    바나타이거 커피는 32%대 원가율로<br />
                                    남는 게 있는 시스템입니다.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="reason_cont">
                        <div className="flex-center h100">
                            <div>
                                <p className="reason_cont_num">03</p>
                                <p className="reason_cont_ttl">
                                    어디서나 주목받는<br />
                                    인테리어
                                </p>
                                <p className="reason_cont_des">
                                    소비자에게 친근하고 편안한 컬러인<br />
                                    노란색+초록색으로<br />
                                    가장 이상적인 인테리어 구현.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="reason_cont">
                        <div className="flex-center h100">
                            <div>
                                <p className="reason_cont_num">04</p>
                                <p className="reason_cont_ttl">
                                    매장에서 직접 굽는<br />
                                    크로플로 단골 고객 확보
                                </p>
                                <p className="reason_cont_des">
                                    전자레인지에서 데우는 크로플과<br />
                                    맛 비교 불가. 바나타이거<br />
                                    시그니처 베이커리로 매출 UP.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="reason_cont">
                        <div className="flex-center h100">
                            <div>
                                <p className="reason_cont_num">05</p>
                                <p className="reason_cont_ttl">
                                    배달에도<br />
                                    강하다
                                </p>
                                <p className="reason_cont_des">
                                    배달 음료 캔 포장 시스템으로<br />
                                    단체주문 OK, 배달 가격<br />
                                    이원화로 배달 수익 OK.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="reason_cont">
                        <div className="flex-center h100">
                            <div>
                                <p className="reason_cont_num">06</p>
                                <p className="reason_cont_ttl">
                                    착한 프랜차이즈<br />
                                    2년 연속 수상
                                </p>
                                <p className="reason_cont_des">
                                    본사 프랜차이즈 사업기간 18년,<br />
                                    착한 프랜차이즈 2년 연속 수상,<br />
                                    시스템과 상생으로 앞서 갑니다.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Reason;