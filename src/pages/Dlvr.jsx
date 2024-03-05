import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";


function Dlvr () {
    const container = useRef();  
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        //dlvr
        gsap.timeline({
            scrollTrigger: {
                trigger: '.dlvr',
                start: 'top center',
            },
        })
        .add([
            gsap.from('.dlvr01_stamp img', {opacity: 0, scale: 2, ease: 'expo.in'}),
            gsap.from('.dlvr01_box02 .cir_bg', {scale: 1.2, duration: 1.5}),
        ])

        duplicateItem($('.dlvr01_flow'), $('.dlvr01_flow .flow_item'));

        $('.dlvr01_flow').marquee({
            speed: 80,
            duplicated: true,
            startVisible: true,
            pauseOnHover: false,
            gap: 0,
        });

        var dlvr01Sl01 = new Swiper('.dlvr01_labels .swiper-container', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            allowTouchMove: false,
        });

        var dlvr01Sl02 = new Swiper('.dlvr01_slide .swiper-container', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            allowTouchMove: false,
            speed: 800,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
        });
        dlvr01Sl01.controller.control = dlvr01Sl02;
        dlvr01Sl02.controller.control = dlvr01Sl01;

        gsap.timeline({
            scrollTrigger: {
                trigger: '.dlvr02_head',
                start: 'center 70%',
                end: 'center 45%',
                scrub: 1
            },
        })
        .to('.dlvr02_rotate', {rotate: 180})

        gsap.timeline({
            scrollTrigger: {
                trigger: '.dlvr02_box',
                start: 'top 55%',
            },
        })
        .from('.dlvr02_box .box_li', {opacity: 0, y: '80%', stagger: 0.2})

        var tl = gsap.timeline({})
        tl.to('.dlvr02_lines .wing_line:nth-child(1)', {scaleY: 0, y: $('.dlvr02_lines').height(), duration: 0.9, repeat: -1})
        tl.to('.dlvr02_lines .wing_line:nth-child(2)', {scaleY: 0, y: $('.dlvr02_lines').height(), duration: 0.9, repeat: -1}, 0.3)
        tl.to('.dlvr02_lines .wing_line:nth-child(3)', {scaleY: 0, y: $('.dlvr02_lines').height(), duration: 0.9, repeat: -1}, 0.6)
        tl.to('.dlvr02_lines .wing_line:nth-child(4)', {scaleY: 0, y: $('.dlvr02_lines').height(), duration: 0.9, repeat: -1}, 0.9)

        var dlvrTabs = function() {
            $('.dlvr02_tab').removeClass('on');
            $('.dlvr02_tab0'+no).addClass('on');

            var tab = $('.dlvr02_tab.on'),
                tabOnBg = tab.find('.tab_bg'),
                tabOnImg = tab.find('.tab_img'),
                tabBg = $('.dlvr02_tab').find('.tab_bg'),
                tabImg = $('.dlvr02_tab').find('.tab_img');

            gsap.set(tabBg, {scale: 0});
            gsap.set(tabImg, {rotate: 0});

            var tl = gsap.timeline({paused: true});
            tl.add([
                gsap.fromTo(tabOnBg, {scale: 0}, {scale: 1, ease: 'back.out'}),
                gsap.fromTo(tabOnImg, {rotate: 0}, {rotate: 15, ease: 'back.out(4)'}),
            ])

            tl.restart();

            no=no+1;
            if(no>3)no=1;
        }

        let no=1;
        tid0 = setInterval(dlvrTabs,1800);
              

    }, { scope: container }) 

    return(         
        <section className="dlvr bg-cover" ref={container}>
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
                        <Marquee speed="80" className="dlvr01_flow flow_container">
                            <p className="flow_item"><img src="/img/page/fran/dlvr01_fl.png" alt="#크로플 잘하는 집 # 가성비 커피 배달 # 인스타 감성 케익" /></p>
                        </Marquee>
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
    );
}

export default Dlvr;