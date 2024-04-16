/* eslint-disable jsx-a11y/anchor-is-valid */ 

import React, { useState } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../test.css';

function TestScroll () { 
    gsap.registerPlugin(ScrollTrigger);  
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useGSAP(() => {
      
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // 컴포넌트가 unmount될 때 이벤트 리스너 제거
      return () => {
        window.removeEventListener('resize', handleResize);
      };


      const theme = {
        primary: "#6067f3",
        secondary: "#e8e2da",
      };
      
      const keywords = ['Jeju','Yang-yang','Mokpo','Busan']
      
      function fixedHeader() {
        ScrollTrigger.create({
          trigger: '.nav_container',
          start: 'top top',
          // endTrigger: '.footer',
          end: 'max',
          pin: true,   
          pinSpacing: false,
        })
      }
      
      function hereAnimation() {
        gsap.set('.logo',{
          width: '100%',
          yPercent: -90
        })
      
        ScrollTrigger.create({
          trigger: '.hero',
          start : 'top top',
          end: 'bottom 20%',
          animation: gsap.to('.logo', {width: '12%', yPercent: 0}),    
          scrub: true,
        })
      
      }
      
      function textAnimation() {
      
      
        gsap.utils.toArray('.header_text-wrap').forEach((text,index)=>{
          
          const target = text.querySelector('.header_text-move');
         
          // const [x,xEnd] = index % 2 ? [innderWidth, 0] : [-innerWidth, 0]
      
          ScrollTrigger.create({
            trigger: text,
            start: 'top center',
            end: 'bottom center',
            animation: gsap.fromTo(text,{ x: index % 2 ? windowWidth : -windowWidth },{ x:0 }),
            scrub: true,
          })
        })
      }
      
      function maskAnimation() {
      
        const cirleTween = gsap.timeline()
        .to('.circle_element',{
          borderRadius: 0,
          width: windowWidth,
          height: window.innerHeight,
        })
        .add(changeTheme(), 0)
      
      
        ScrollTrigger.create({
          trigger: '.circle_wrap',
          start: 'top top',
          end: '+=2000',
          animation: cirleTween,
          pin: true,
          scrub: true,
        })
      }
      
      function categorieAnimation() {
      
        const tween = gsap.from('.categories > a', {
          opacity: 0,
          filter: 'blur(3px)',
          stagger: {
            each: 0.1,
            from: 'random'
          }
        })
      
        ScrollTrigger.create({
          trigger: '.catories_container',
          start: 'top top',
          end: '+=2000',
          animation: tween,
          pin: true,   
        })
      }
      
      function changeTheme(themeMode ='light') {
        const tween = gsap.to('body, .nav_container', {
          backgroundColor: themeMode === 'light' ? theme.secondary : theme.primary, 
          color: themeMode === 'light' ? theme.primary : theme.secondary
        }, 0)
      
        return tween
      }
      
      function gallaryAnimation() {
      
        ScrollTrigger.create({
          trigger: '.text_container',
          start: 'top top',
          endTrigger:'.image_container',
          end: 'bottom bottom',
          animation: gsap.to('.front_image',{yPercent:-20}), 
          pin: true,
          pinSpacing: false,
          markers: true,
          scrub: true,
          onUpdate: ({progress})=>{
      
            const ratio = Math.round(progress * 100);
      
            let index= 0;
            let mode = 'light';
            
            if(ratio > 0 && ratio < 25){
              index = 0;       
            } else if(ratio >= 25 && ratio < 50) {
              index = 1;
              mode="dark"
              
            }else if(ratio >= 50 && ratio < 75) {
              index = 2;
              mode="light"
            } else {
              index = 3;
              mode="dark"
            }   
           
            changeTheme(mode);
            document.querySelector('.text_container span').textContent = keywords[index]
      
          }
        })
      }
      
      
      fixedHeader();
      hereAnimation();
      textAnimation();
      maskAnimation();
      categorieAnimation();
      gallaryAnimation();
  
      
      

        
          
      
    }, {});    
     
    return ( 
      <div id="container">
        <div className="hero">
          <img src="/img/testScroll/bg_flower.jpg" alt="" />
        </div>

        <div className="nav_container">
          <div className="inner">
            <header className="header">
              <nav>
                <ul>
                 <li><a href="#none">2024</a></li>
                  <li><a href="#none">color</a></li>
                  <li><a href="#none">Pantone</a></li>
                </ul>
              </nav>
              <div className="logo_container">
                <a href="#" className="logo">
                  <div>
                    PEACH FUZZ
                  </div>
                </a>
              </div>
            </header>
          </div>
        </div>

        <main>
          <div className="section visual_container">
            <div className="header_text">
              <div className="header_text-wrap">
                <div className="header_text-move">
                  <h1>Pantone</h1>
                </div>
              </div>
              <div className="header_text-wrap">
                <div className="header_text-move">
                  <h1>COLOR</h1>
                </div>
              </div>
              <div className="header_text-wrap">
                <div className="header_text-move">
                  <h1 className="is--alt-text">TRENDS</h1>
                </div>
              </div>
              <div className="header_text-wrap">
                <div className="header_text-move">
                  <h1>2024</h1>
                </div>
              </div>
            </div>
            <div className="circle_wrap">
              <div className="circle">
                <div className="circle_element">
                  <img
                    src="/img/testScroll/bg_sea.jpg"
                    alt="쇼파와 풀이 어우러진 인테리어"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section catories_container">
            <div className="container is--categories">
              <div className="categories">
                <a href="#" className="categories_link w-inline-block" >
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Softer Tan</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Pearly White</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Persimmon</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Friendly Yellow</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Dark Auburn</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Cyberspace</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Stardew</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Utaupeia</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Oakmoss</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Blues &amp; Greens</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Reds &amp; Purples</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Deeps &amp; Darks</p>
                </a>
                <a href="#" className="categories_link w-inline-block">
                  <div className="categories_border"></div>
                  <p className="categories_link-text">Delicate tints</p>
                </a>
              </div>
            </div>
          </div>

          <div className="section text_container">
            <span>Peach Plethora</span>
          </div>
          
          <div className="section image_container">
            <div className="back_image contents">
              <div>
                <div><img src="/lighthouse/l1.jpg" alt="" /></div>
                <div><img src="/lighthouse/l2.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/lighthouse/l3.jpg" alt="" /></div>
                <div><img src="/lighthouse/l4.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/lighthouse/l5.jpg" alt="" /></div>
                <div><img src="/lighthouse/l6.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/lighthouse/l7.jpg" alt="" /></div>
                <div><img src="/lighthouse/l8.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/lighthouse/l9.jpg" alt="" /></div>
                <div><img src="/lighthouse/l10.jpg" alt="" /></div>
              </div>
            </div>

            <div className="front_image contents">
              <div>
                <div><img src="/lighthouse/r1.jpeg" alt="" /></div>
                <div><img src="/lighthouse/r2.jpeg" alt="" /></div>
              </div>
              <div>
                <div><img src="/lighthouse/r3.jpeg" alt="" /></div>
                <div><img src="/lighthouse/r4.jpeg" alt="" /></div>
              </div>
              <div>
                <div><img src="/lighthouse/r5.jpg" alt="" /></div>
                <div><img src="/lighthouse/r6.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/lighthouse/r7.jpg" alt="" /></div>
                <div><img src="/lighthouse/r8.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/lighthouse/r9.jpg" alt="" /></div>
                <div><img src="/lighthouse/r10.jpg" alt="" /></div>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <h1>-END-</h1>
        </footer>
      </div>


    // <div className="wrapper">
    //     <section classNameName='page page01'>
          
    //     </section>

    //     <header classNameName='header'>
    //       <div classNameName='inner'>
    //         <h1 classNameName='logo'><a href="#none">PEACH FUZZ</a> </h1>
    //         <nav classNameName='nav'>
    //           <ul>
    //             <li><a href="#none">2024</a></li>
    //             <li><a href="#none">color</a></li>
    //             <li><a href="#none">Pantone</a></li>
    //           </ul>
    //         </nav>
    //         </div>
    //     </header>

    //     <main classNameName='main'>
    //       <section classNameName='page page02'>
    //         <div className="header_text">
    //           <div className="header_text-wrap">
    //             <div className="header_text-move">
    //               <h1>COLOR</h1>
    //             </div>
    //           </div>
    //           <div className="header_text-wrap">
    //             <div className="header_text-move">
    //               <h1 className="is--alt-text">TRENDS</h1>
    //             </div>
    //           </div>
    //           <div className="header_text-wrap">
    //             <div className="header_text-move">
    //               <h1>2024</h1>
    //             </div>
    //           </div>            
    //         </div>
    //         <div className="circle_wrap">
    //           <div className="circle">
    //             <div className="circle_element">
    //               <img
    //                 src="/img/testScroll/bg_sea.jpg"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </section>

    //       <section classNameName='page page03'>
    //         <div className="categories">
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Softer Tan</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Pearly White</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Persimmon</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Friendly Yellow</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Dark Auburn</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Cyberspace</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Stardew</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Utaupeia</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Oakmoss</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Blues &amp; Greens</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Reds &amp; Purples</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Deeps &amp; Darks</p>
    //           </a>
    //           <a href="#" className="categories_link w-inline-block">
    //             <div className="categories_border"></div>
    //             <p className="categories_link-text">Delicate tints</p>
    //           </a>
    //         </div>
    //       </section>
    //     </main>
        
    //     <section classNameName='page page04'>
          
    //     </section>
    //     <section classNameName='page page05'>
          
    //     </section>
       
    // </div>
  );
}

export default TestScroll;