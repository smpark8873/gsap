import { useRef } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Marquee from "react-fast-marquee";
// import useDynamicRefs from 'use-dynamic-refs';

import 'swiper/css';
import './style.css';
import './App.css';

function App() {
    const container = useRef();
    gsap.registerPlugin(ScrollTrigger);
   
    // const [getRef, setRef] =  useDynamicRefs();

    useGSAP(() => {
        // gsap code here...
        // gsap.to(".logo", {rotation: 90}); // <-- automatically reverted

        let introTl = gsap.timeline({})
        introTl.from('.easy_cont', {y: '100%', duration: 1})
        introTl.add([
            gsap.from('.easy_food01', {scale: 0, y: '100%', x: '100%', rotate: 90, ease: 'back.out'}),
            gsap.from('.easy_food02', {scale: 0, y: '100%', x: '-80%', rotate: -90, ease: 'back.out'}),
        ], 0.5)
        introTl.from('.easy_ttls .ttl_up', {y: '100%', stagger: 0.25}, '-=0.3')
       

        gsap.timeline({
            scrollTrigger: {
                trigger: '.fran',
                start: 'top 60%',
            },
        })
        .from('.fran_box01 .box_cover', {y: '-100%', duration: 0.7})
        .from('.fran_box02 .box_cover', {y: '100%', duration: 0.7}, '-=0.5')
        .from('.fran_box03 .box_cover', {y: '-100%', duration: 0.7}, '-=0.5')
       

        gsap.timeline({
            scrollTrigger: {
                trigger: '.tasty',
                start: 'top bottom',
                end: 'center 30%',
                scrub: 1
            },
        })
        .from('.tasty_img', {y: '100%'})



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

    return (
        <div id="wrap" ref={container}>    
            <header className="header">
                <div className="hd_inn inner1440">
                    <h1 className="bi bg-cover logo"><a href="fran.asp.html#none">BANA TIGER COFFEE</a></h1>
                    <a href="fran.asp.html#none" className="hd_sns abs"><img src="/img/common/hd_sns.png" alt="바나타이거 인스타 바로가기" /></a>
                    <p className="hd_tel abs">가맹문의 1600.4458</p>
                </div>
            </header>             
            <main className="container">
                <article className="loading" >
                    <div className="box">
                        <div className="loader1"></div>
                    </div>
                </article>
            </main>

            <div id="content" className="content">
                <section className="easy rel over_h">
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
                                    <Swiper modules={[Autoplay, EffectFade]} 
                                        //effect="fade"
                                        // loop = {true}
                                        // centeredSlides={false}
                                        // allowTouchMove= {false}
                                        //speed="800"
                                        autoplay={{
                                            delay: 1800,
                                            disableOnInteraction: false,
                                          }}
                                        fadeEffect= {{crossFade: true}}                                      
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

                <section className="fran">
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
                            <div className="fran02_flow flow_container">
                                <span className="flow_item" style={{width: '782px'}}><img src="/img/page/fran/fran02_fl.png" alt="" /></span>
                            </div>
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
                    <Marquee speed={2} className="fran_btm_flow flow_container">
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
                
                <section className="menu bg-cover">
                    <div className="menu_slide rel">
                        <span className="menu_sl_bg l50"><img src="/img/page/fran/menu_sl_bg.png" alt="" /></span>
                        <div className="swiper-container">
                            <ul className="swiper-wrapper">
                                <li className="swiper-slide">
                                    <div className="menu_sl">
                                        <img src="/img/page/fran/menu_sl01.png" alt="" />
                                    </div>
                                    <p className="menu_txt abs">
                                        Salted<br />
                                        Butter<br />
                                        Rolls
                                    </p>
                                </li>
                                <li className="swiper-slide">
                                    <div className="menu_sl">
                                        <img src="/img/page/fran/menu_sl02.png" alt="" />
                                    </div>
                                    <p className="menu_txt abs">
                                        Cream<br />
                                        Teddybear<br />
                                        Cake
                                    </p>
                                </li>
                                <li className="swiper-slide">
                                    <div className="menu_sl">
                                        <img src="/img/page/fran/menu_sl03.png" alt="" />
                                    </div>
                                    <p className="menu_txt abs">
                                        Choco<br />
                                        Teddybear<br />
                                        Cake
                                    </p>
                                </li>
                                <li className="swiper-slide">
                                    <div className="menu_sl">
                                        <img src="/img/page/fran/menu_sl04.png" alt="" />
                                    </div>
                                    <p className="menu_txt abs">
                                        Strawberry<br />
                                        Croffle
                                    </p>
                                </li>
                                <li className="swiper-slide">
                                    <div className="menu_sl">
                                        <img src="/img/page/fran/menu_sl05.png" alt="" />
                                    </div>
                                    <p className="menu_txt abs">
                                        Shinemuscat<br />
                                        Croffle
                                    </p>
                                </li>
                                <li className="swiper-slide">
                                    <div className="menu_sl">
                                        <img src="/img/page/fran/menu_sl06.png" alt="" />
                                    </div>
                                    <p className="menu_txt abs">
                                        Lotus<br />
                                        Croffle
                                    </p>
                                </li>
                                <li className="swiper-slide">
                                    <div className="menu_sl">
                                        <img src="/img/page/fran/menu_sl07.png" alt="" />
                                    </div>
                                    <p className="menu_txt abs">
                                        Icecream<br />
                                        Croffle
                                    </p>
                                </li>
                                <li className="swiper-slide">
                                    <div className="menu_sl">
                                        <img src="/img/page/fran/menu_sl08.png" alt="" />
                                    </div>
                                    <p className="menu_txt abs">
                                        Marlenka<br />
                                        Cake
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <section className="tasty rel">
                    <div className="tasty_flow flow_container abs">
                        <span className="flow_item" style={{width: '2455px'}}><img src="/img/page/fran/tasty_fl.png" alt="" /></span>
                    </div>
                    <div className="tasty_img bg-cover bg-full"></div>
                </section>
                
                <section className="speed t_center rel">
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
                                            <image xlink:href="/img/page/fran/speed_cir.png" x="0" y="0" width="276" height="276" transform="rotate(90, 138, 138)"/>
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
                
                <section className="cafe rel t_center">
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
                
                <section className="suc">
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
                    <div className="suc_flow flow_container">
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
                    </div>
                </section>
                
                <div className="fixed_lyr bg-cover"></div>
                
                <section className="dlvr bg-cover">
                    <div className="dlvr_head inner1260">
                        <p className="dlvr_ttl ttl_wrap"><span className="ttl_up ttl70">배달도 잘하는</span></p>
                        <p className="dlvr_logo"><img src="/img/page/fran/dlvr_logo.png" alt="BANA TIGER" /></p>
                    </div>
                    <div className="dlvr01 rel">
                        <div className="dlvr01_inn inner1260">
                            <div className="dlvr01_box dlvr01_box01 bg-cover">
                                <div className="box_head t_center">
                                    <p className="box_ttl sub40">높은 배달 판매 단가</p>
                                    <p className="box_txt txt20">
                                        달콤한 스몰 베이커리와 맛있는 크로플이 생각날 때<br />
                                        주문하는 커피 맛집. 경쟁 브랜드와 비교해<br />
                                        <em>평균 3,000원 이상 높은 배달 판매 단가</em>를 완성합니다.
                                    </p>
                                </div>
                                <p className="box_nums abs"><img src="/img/page/fran/dlvr01_box01_nums.png" alt="8,800원" /></p>
                            </div>
                            <div className="dlvr01_right">
                                <div className="dlvr01_box dlvr01_box02">
                                    <div className="box02_cir rel">
                                        <div className="cir_bg bg-full"></div>
                                    </div>
                                    <div className="box_cont abs t_center">
                                        <p className="box_ttl sub40">배달도 역시 바나타이거</p>
                                        <p className="box_txt txt20">강력한 배달 니즈, <em>맛집 랭킹 1위</em> 다수 달성<em className="oblique">!</em></p>
                                        <div className="dlvr01_labels">
                                            <div className="swiper-container">
                                                <ul className="swiper-wrapper">
                                                    <li className="swiper-slide"><p className="box_label">2023년 6월 <em>운정힐스테이트점</em></p></li>
                                                    <li className="swiper-slide"><p className="box_label">2023년 6월 <em>운정힐스테이트점</em></p></li>
                                                    <li className="swiper-slide"><p className="box_label">2023년 6월 <em>운정힐스테이트점</em></p></li>
                                                    <li className="swiper-slide"><p className="box_label">2023년 6월 <em>운정힐스테이트점</em></p></li>
                                                    <li className="swiper-slide"><p className="box_label">2023년 6월 <em>운정힐스테이트점</em></p></li>
                                                    <li className="swiper-slide"><p className="box_label">2023년 8월 <em>제천장락점</em></p></li>
                                                    <li className="swiper-slide"><p className="box_label">2023년 8월 <em>제천장락점</em></p></li>
                                                    <li className="swiper-slide"><p className="box_label">2023년 8월 <em>제천장락점</em></p></li>
                                                    <li className="swiper-slide"><p className="box_label">2023년 8월 <em>제천장락점</em></p></li>
                                                    <li className="swiper-slide"><p className="box_label">2023년 8월 <em>제천장락점</em></p></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="dlvr01_slide rel">
                                            <div className="swiper-container">
                                                <ul className="swiper-wrapper">
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl01.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl02.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl03.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl04.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl05.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl06.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl07.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl08.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl09.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl10.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl11.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl12.jpg" alt="" />
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <img src="/img/page/fran/dlvr01_sl13.jpg" alt="" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className="dlvr01_phone abs"><img src="/img/page/fran/dlvr01_phone.png" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dlvr01_flow flow_container">
                                    <p className="flow_item"><img src="/img/page/fran/dlvr01_fl.png" alt="#크로플 잘하는 집 # 가성비 커피 배달 # 인스타 감성 케익" /></p>
                                </div>
                            </div>
                        </div>
                        <div className="dlvr01_stamp t_right abs">
                            <img src="/img/page/fran/dlvr01_stamp.png" alt="배달앱 평균 평점 4.9점" />
                        </div>
                    </div>
                    <div className="dlvr02">
                        <div className="dlvr02_head t_center">
                            <span className="dlvr02_line"></span>
                            <div className="dlvr02_ttls fs_def rel">
                                <span className="dlvr02_ttl01 ttl70">두 가지를</span>
                                <div className="dlvr02_ttl_imgs rel">
                                    <span className="dlvr02_ttl_img01 rel"><img src="/img/page/fran/dlvr02_ttl_img01.png" alt="" /></span>
                                    <span className="dlvr02_ttl_img02 bg-full"><img src="/img/page/fran/dlvr02_ttl_img02_230828.png" alt="" /></span>
                                </div>
                                <span className="dlvr02_ttl02 ttl70">모두 잡다</span>
                                <div className="dlvr02_rotate l50">
                                    <img src="/img/page/fran/dlvr02_rotate.png" alt="추가 매출 소비자 만족" />
                                </div>
                            </div>
                            <span className="dlvr02_line"></span>
                        </div>
                        <div className="dlvr02_box inner1260 clearfix">
                            <div className="box_twrap rel f_left">
                                <p className="box_ttl01 sub30">흔들려도 좋은</p>
                                <p className="box_ttl02 sub40">섬세한 포장 패키지</p>
                                <p className="box_sub">맛집 랭킹 1위 다수 달성<em className="oblique">!</em></p>
                                <p className="box_txt txt20">
                                    소비자 선택에 따라 배달 전용 포장<br />
                                    패키지 서비스를 지원합니다.
                                </p>
                                <ul className="box_lis t_center">
                                    <li className="box_li txt20">더 높아지는 <em>판매 단가</em></li>
                                    <li className="box_li txt20">더 높아지는 <em>고객 만족</em></li>
                                </ul>
                                <div className="box_arr abs">
                                    <img src="/img/page/fran/dlvr02_box_arr.png" alt="" />
                                    <span className="dlvr02_lines">
                                        <span className="wing_line"></span>
                                        <span className="wing_line"></span>
                                        <span className="wing_line"></span>
                                        <span className="wing_line"></span>
                                    </span>
                                </div>
                            </div>
                            <ul className="dlvr02_tabs fs_def f_right t_center">
                                <li className="dlvr02_tab dlvr02_tab01">
                                    <a href="fran.asp.html#none" className="tab_btn fs_def">
                                        <span className="btn_cir"></span>
                                        <span className="btn_txt">일회용컵</span>
                                    </a>
                                    <div className="tab_drink rel">
                                        <span className="tab_bg l50"></span>
                                        <span className="tab_img rel"><img src="/img/page/fran/dlvr02_tab_img01.png" alt="" /></span>
                                    </div>
                                </li>
                                <li className="dlvr02_tab dlvr02_tab02">
                                    <a href="fran.asp.html#none" className="tab_btn fs_def">
                                        <span className="btn_cir"></span>
                                        <span className="btn_txt">캔 변경</span>
                                    </a>
                                    <div className="tab_drink rel">
                                        <span className="tab_bg l50"></span>
                                        <span className="tab_img rel"><img src="/img/page/fran/dlvr02_tab_img02.png" alt="" /></span>
                                    </div>
                                </li>
                                <li className="dlvr02_tab dlvr02_tab03">
                                    <a href="fran.asp.html#none" className="tab_btn fs_def">
                                        <span className="btn_cir"></span>
                                        <span className="btn_txt">ICE 캔 변경<em>(얼음없이)</em></span>
                                    </a>
                                    <div className="tab_drink rel">
                                        <span className="tab_bg l50"></span>
                                        <span className="tab_img rel"><img src="/img/page/fran/dlvr02_tab_img03.png" alt="" /></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            
                <section className="smile bg-cover over_h">
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
                
                <div className="green_wrap">           
                    <section className="analyze t_center">
                        <p className="anlz_ttl ttl_wrap"><span className="ttl_up ttl60">수익성 분석</span></p>
                        <div className="anlz_cont inner1260">
                            <img src="/img/page/fran/anlz_cont_230828.png" alt="" />
                            <span className="anlz_top01 bg-full"><img src="/img/page/fran/anlz_top01_230828.png" alt="" /></span>
                            <span className="anlz_top02 bg-full"><img src="/img/page/fran/anlz_top02_230828.png" alt="" /></span>
                        </div>
                    </section>
                </div>
                
                <section className="balance rel over_h" id="balance">
                    <div className="blc_rotate abs">
                        <div className="blc_wrap blc_wrap01">
                            <div className="blc_inn abs">
                                <div className="blc01_head t_center">
                                    <p className="blc_ttl01 ttl_wrap"><span className="ttl_up ttl70">균형감 있는</span></p>
                                    <p className="blc_ttl02 ttl80">업무 강도의 최소화</p>
                                </div>
                                <div className="blc01_cont bg-cover rel">
                                    <span className="blc01_stamp01 abs bg-cover"></span>
                                    <span className="blc01_stamp02 abs bg-cover"></span>
                                </div>
                            </div>
                        </div>
                        <div className="blc_wrap blc_wrap02">
                            <div className="blc_inn abs">
                                <p className="blc02_stroke l50 bg-cover"></p>
                                <div className="blc02_cont bg-cover rel"></div>
                            </div>
                        </div>
                        <div className="blc_wrap blc_wrap03">
                            <div className="blc_inn abs">
                                <p className="blc03_stroke l50 bg-cover"></p>
                                <div className="blc03_cont bg-cover rel">
                                    <span className="blc03_stamp01 abs bg-cover"></span>
                                    <span className="blc03_stamp02 abs bg-cover"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="croffle rel over_h">
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
                            <div className="croffle_btm_flow flow_container">
                                <span className="flow_item"><img src="/img/page/fran/croffle_btm_fl_230828.png" alt="Drink Eat You Everywhere" /></span>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="story t_center">
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
                
                <section className="reason over_h">
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
                
                <div className="green_wrap">           
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
                
                <section className="inquiry t_center">
                    <p className="inquiry_ttl ttl_wrap"><span className="ttl_up ttl60">창업문의</span></p>
                    <div className="inquiry_wrap">
                        <form method="post" action="" className="inquiry_form" id="inquiry_form">
                            <input type="hidden" name="KEYWORD_IDX" value="" />
                            <input type="hidden" name="KEYWORD" value="" />
                            <input type="hidden" name="REFERR_HOST_URL" value="" />
                            <fieldset className="iqr_policy_wrap">
                                <legend className="iqr_tit" style={{display:'none'}}>개인정보 수집 및 활용동의</legend>
                                <div className="iqr_policy" style={{display:'none'}}>
                                    <ol>
                                        <li className="b_fs_l b_ff_m b_lh_m b_c_l">
                                        1. 개인정보의 수집 및 이용 목적<br />
                                        가맹 관련 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
                                        </li>
                                        <li className="b_fs_l b_ff_m b_lh_m b_c_l">
                                        2. 처리하는 개인정보 항목<br />
                                        - 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)<br />
                                        - 선택항목 : 이메일
                                        </li>
                                        <li className="b_fs_l b_ff_m b_lh_m b_c_l">
                                        3. 개인정보의 처리 및 보유 기간<br />
                                        ① 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.<br />
                                        ② 개인정보의 보유 기간은 5년입니다.
                                        </li>
                                    </ol>
                                </div>
                                <div className="iqr_check rel">
                                    <input type="checkbox" name="agree" id="iqr_agree" value="Y"/>
                                    <label for="iqr_agree" className="b_ff_m b_c_l">
                                        <a href="fran.asp.html#none" className="bindPolicyModalOpen">개인정보취급방침</a>을 읽었으며 이에 동의합니다.
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset className="iqr_info">
                                <legend className="iqr_tit rel">상담자 정보<small className="iqr_dot b_ff_m">동그라미 표시는 필수입력항목입니다.</small></legend>
                                <table summary="상담자 정보 입력사항" className="inquiry_table">
                                    <caption className="indent">상담자 정보 입력사항</caption>
                                    <colgroup>
                                        <col width="20%" className="col1" />
                                        <col width="*" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="col1"><label for="iqr_name" className="required">이름</label></th>
                                            <td className="col2">
                                                <input type="text" name="writer_name" id="iqr_name" required autocomplete="off" maxlength="10" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><label for="iqr_hp" className="required">연락처</label></th>
                                            <td>
                                                <input type="text" name="call_number" id="iqr_hp" required autocomplete="off" className="phone_check" maxlength="13" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><label className="required">창업희망지역</label></th>
                                            <td className="area_selects fs_def">
                                                <select name="city" id="area_select1">
                                                    <option value="">시/도</option>
                                                    <option value="서울">서울</option>
                                                    <option value="경기">경기</option>
                                                    <option value="인천">인천</option>
                                                    <option value="부산">부산</option>
                                                    <option value="대구">대구</option>
                                                    <option value="광주">광주</option>
                                                    <option value="대전">대전</option>
                                                    <option value="울산">울산</option>
                                                    <option value="세종">세종</option>
                                                    <option value="강원">강원</option>
                                                    <option value="충북">충북</option>
                                                    <option value="충남">충남</option>
                                                    <option value="전북">전북</option>
                                                    <option value="전남">전남</option>
                                                    <option value="경북">경북</option>
                                                    <option value="경남">경남</option>
                                                    <option value="제주">제주</option>
                                                </select>
                                                <select name="state" id="area_select2">
                                                    <option value="">시/군/구</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><label className="required">점포보유유무</label></th>
                                            <td className="cust_radios fs_def">
                                                <input type="radio" name="storeYn" id="iqr_radio01" value="Y"  checked />
                                                <label for="iqr_radio01" className="rd_lbl">있음</label>
                                                <input type="radio" name="storeYn" id="iqr_radio02" value="N" />
                                                <label for="iqr_radio02" className="rd_lbl">없음</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="v_top"><label for="iqr_command">문의내용</label></th>
                                            <td>
                                                <textarea name="contents" id="iqr_command"></textarea>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button type="submit" id="franInquirySubmit" className="b_btn01">문의하기</button>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </div>

            <div className="bnr_inquiry bg-cover">
                <a href="fran.asp.html#none" className="top_btn abs">
                    <img className="rel" src="/img/common/top_btn.png" alt="" />
                    <span className="top_fill_wrap abs">
                        <span className="top_fill bg-full"></span>
                    </span>
                </a>
                <div className="inner clearfix">
                    <div className="bnr_inquiry_tel">
                        <div className="col1 cols bg-cover">
                        </div>
                        <div className="col2 cols bg-cover">
                            <span className="hidden">바나타이거 가맹문의 1600.4458</span>
                        </div>
                    </div>
                    <form method="post" className="bnr_inquiry_form" id="bnr_inquiry_form">
                        <fieldset>
                            <legend className="hidden">바나타이거 가맹문의</legend>
                            <div className="clearfix">
                                <div className="f_left">
                                    <div className="type_text bnr_inquiry_box f_left">
                                        <label for="bnr_name" className="type_txt_label">이름</label>
                                        <input type="text" name="writer_name" id="bnr_name" className="labeling" autocomplete="off" />
                                    </div>
                                    <div className="type_text bnr_inquiry_box f_left">
                                        <label for="bnr_hp" className="type_txt_label">연락처</label>
                                        <input type="text" name="call_number" id="bnr_hp" className="labeling phone_check" autocomplete="off" />
                                    </div>
                                    <div className="type_sel bnr_inquiry_box f_left">
                                        <select name="city" className="legion" id="legion">
                                            <option value="">지역</option>
                                            <option value="서울">서울</option>
                                            <option value="부산">부산</option>
                                            <option value="대구">대구</option>
                                            <option value="인천">인천</option>
                                            <option value="광주">광주</option>
                                            <option value="대전">대전</option>
                                            <option value="울산">울산</option>
                                            <option value="세종">세종</option>
                                            <option value="경기">경기</option>
                                            <option value="강원">강원</option>
                                            <option value="충북">충북</option>
                                            <option value="충남">충남</option>
                                            <option value="전북">전북</option>
                                            <option value="전남">전남</option>
                                            <option value="경북">경북</option>
                                            <option value="경남">경남</option>
                                            <option value="제주">제주</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="bnr_inqury_chk f_left">
                                    <input type="checkbox" name="agree" id="bnr_inq_chk" />
                                    <label for="bnr_inq_chk" className="chk_label">개인정보수집 동의</label>
                                </div>
                                <p className="bnr_check_agree f_left"><a href="fran.asp.html#none" className="bindPolicyModalOpen">개인정보수집</a> 동의</p>
                                <button type="submit" id="bnrInquirySubmit" className="bnr_inquiry_send f_left">보내기</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

            <footer className="footer t_center">
                <h2 className="ft_bi"><img src="/img/common/ft_bi.png" alt="바나타이거 커피" /></h2>
                <ul className="policy fs_def">
                    <li className="on"><a href="fran.asp.html#none" className="bindPolicyModalOpen">개인정보처리방침</a></li>
                    <li>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</li>
                    <li><a href="fran.asp.html#none" className="bindPolicyModalOpen">이메일무단수집거부</a></li>
                </ul>
                <ul className="ft_sns_wrap fs_def">
                    <li className="ft_sns"><a href="fran.asp.html#none"><img src="/img/common/ft_sns01.png" alt="" /></a></li>
                    <li className="ft_sns"><a href="fran.asp.html#none"><img src="/img/common/ft_sns02.png" alt="" /></a></li>
                </ul>
                <address className="address">
                    (주)맥스원이링크&nbsp;&nbsp;&nbsp;ㅣ&nbsp;&nbsp;&nbsp;대표이사 : 황규연&nbsp;&nbsp;&nbsp;ㅣ&nbsp;&nbsp;&nbsp;사업자등록번호 : 109-81-99153<br />
                    주소 : 서울시 구로구 디지털로 26길 61 에이스하이엔드타워 2차 1402호&nbsp;&nbsp;&nbsp;ㅣ&nbsp;&nbsp;&nbsp;대표번호 : 1600-4458&nbsp;&nbsp;&nbsp;ㅣ&nbsp;&nbsp;&nbsp;팩스 : 02-6340-1701
                </address>
                <p className="ft_copy">Copyright (C) (주)맥스원이링크  Allright Reserved.</p>
            </footer>

        </div>
    );
}

export default App;
