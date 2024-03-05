import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Greenwrap () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {      
        gsap.timeline({
            scrollTrigger: {
                trigger: '.step',
                start: 'top 60%',
            },
        })
        .from('.step_li:not(.fix)', {opacity: 0, x: -100, stagger: 0.25})      

    }, { scope: container }) 

    return(         
        <div className="green_wrap" ref={container}>           
            <section className="step t_center">
                <p className="step_ttl ttl_wrap"><span className="ttl_up ttl60">창업절차</span></p>
                <ul className="step_lis inner">
                    <li className="step_li fix">
                        <div className="step_twrap">
                            <p className="step_num"><em>1</em>&nbsp;&nbsp;가맹상담</p>
                            <p className="step_txt txt20">
                                방문, 현장, 유선을 통해<br />
                                창업 상담
                            </p>
                        </div>
                        <span className="step_arr abs"><img src="/img/page/fran/step_arr.png" alt="" /></span>
                    </li>
                    <li className="step_li">
                        <div className="step_twrap">
                            <p className="step_num"><em>2</em>&nbsp;&nbsp;입지, 상권 조사</p>
                            <p className="step_txt txt20">
                                개별 지역 상권 조사 및<br />
                                점포 최적의 입지 선정
                            </p>
                        </div>
                        <span className="step_arr abs"><img src="/img/page/fran/step_arr.png" alt="" /></span>
                    </li>
                    <li className="step_li">
                        <div className="step_twrap">
                            <p className="step_num"><em>3</em>&nbsp;&nbsp;점포, 가맹계약</p>
                            <p className="step_txt txt20">
                                가맹점개설 승인<br />
                                계약서 작성<br />
                                본사와의 가맹계약
                            </p>
                        </div>
                        <span className="step_arr abs"><img src="/img/page/fran/step_arr.png" alt="" /></span>
                    </li>
                    <li className="step_li">
                        <div className="step_twrap">
                            <p className="step_num"><em>4</em>&nbsp;&nbsp;시설공사</p>
                            <p className="step_txt txt20">
                                도면 협의 및 공사 일정<br />
                                확인 후 시설공사
                            </p>
                        </div>
                    </li>
                    <li className="step_li">
                        <div className="step_twrap">
                            <p className="step_num"><em>5</em>&nbsp;&nbsp;가맹점 교육</p>
                            <p className="step_txt txt20">
                                인테리어 공사 기간동안<br />
                                가맹점주 교육
                            </p>
                        </div>
                        <span className="step_arr abs"><img src="/img/page/fran/step_arr.png" alt="" /></span>
                    </li>
                    <li className="step_li">
                        <div className="step_twrap">
                            <p className="step_num"><em>6</em>&nbsp;&nbsp;매장 영업 준비</p>
                            <p className="step_txt txt20">
                                식자재 및 매장 운영에<br />
                                필요한 초도 물품 공급 및<br />
                                오픈 교육
                            </p>
                        </div>
                        <span className="step_arr abs"><img src="/img/page/fran/step_arr.png" alt="" /></span>
                    </li>
                    <li className="step_li">
                        <div className="step_twrap">
                            <p className="step_num"><em>7</em>&nbsp;&nbsp;그랜드 오픈</p>
                            <p className="step_txt txt20">
                                본사 지원 인력과 함께<br />
                                매장 오픈 및 관리
                            </p>
                        </div>
                        <span className="step_arr abs"><img src="/img/page/fran/step_arr.png" alt="" /></span>
                    </li>
                    <li className="step_li">
                        <div className="step_twrap">
                            <p className="step_num"><em>8</em>&nbsp;&nbsp;사후관리</p>
                            <p className="step_txt txt20">
                                SNS 및 브랜드 마케팅,<br />
                                신제품 개발
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            
            <section className="cost t_center">
                <p className="cost_ttl ttl_wrap"><span className="ttl_up ttl60">창업비용</span></p>
                <div className="inner">
                    <p className="cost_ps t_right">단위:만원, 부가세 별도</p>
                    <table className="cost_table">
                        <colgroup>
                            <col width="188px" />
                            <col width="586px" />
                            <col width="214px" />
                            <col width="209px" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>항목</th>
                                <th>초기 투자비용 상세</th>
                                <th>10평 (33㎡ 기준)</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <td>합계</td>
                                <td></td>
                                <td className="blink">4<em className="ft30">,</em>950</td>
                                <td></td>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>가맹비</td>
                                <td>상표사용권 부여, 영업권 보장</td>
                                <td className="gray">500<span className="td_line"></span></td>
                                <td className="yell">한시 약정 지원</td>
                            </tr>
                            <tr>
                                <td>교육비</td>
                                <td>개점 전 브랜드 매뉴얼 및 운영, 서비스 교육</td>
                                <td className="gray">300<span className="td_line"></span></td>
                                <td className="yell">한시 약정 지원</td>
                            </tr>
                            <tr>
                                <td>이행보증금</td>
                                <td>전반적인 계약 내용에 대한 예치금 <br />(* 가맹계약 종료 시 반환)</td>
                                <td className="gray">300<span className="td_line"></span></td>
                                <td>보증보험 가능</td>
                            </tr>
                            <tr>
                                <td>인테리어</td>
                                <td>내장 공사 33㎡ 기준<br />도면설계비</td>
                                <td>
                                    <span className="gray block">1,800<span className="td_arr"><img src="/img/page/fran/cost_td_arr.png" alt="" /></span></span>
                                    300
                                </td>
                                <td className="yell">
                                    900만
                                    <span className="red_lb"><img src="/img/page/fran/cost_red_lb.png" alt="" /></span>
                                </td>
                            </tr>
                            <tr>
                                <td>간판/사인</td>
                                <td>전면 간판 (1면 4m 기준), 내/외부 사인물(33㎡) 등</td>
                                <td>600</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>가구</td>
                                <td>테이블 및 의자, 붙박이 쇼파 등</td>
                                <td>별도</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>기기설비</td>
                                <td>에스프레소 머신, 그라인더, 제빙기, 테이블 냉장고, 스탠드 냉장 / 냉동고, <br />쿨러 냉장고, 온수기, 냉장 쇼케이스, 블렌더, 업소용 와플기, 레인지 등</td>
                                <td>2,900</td>
                                <td>DID 포함</td>
                            </tr>
                            <tr>
                                <td>오픈 홍보품</td>
                                <td>사인 일부, 내부 메뉴보드, 각종 홍보물 및 거치대, 각종홍보 거치대, <br />오픈바이저 현장 오픈 지원 등</td>
                                <td>250</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="cost_txts t_left">
                        <li className="cost_txt">* 전기증설, 냉난방, 철거, 외관공사 (건물 전면), 테라스, 어닝, POS, 키오스크는 별도 사항입니다.</li>
                        <li className="cost_txt">* 간판시공은 4M 기준이며, 실측 후 추가 견적 발생할 수 있습니다.</li>
                        <li className="cost_txt">* 이행보증금은 현금 납부 또는 보증보험 중 선택 가능합니다.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Greenwrap;