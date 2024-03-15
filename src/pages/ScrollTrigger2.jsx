// import React, { useRef } from 'react';
import gsap from "gsap"; 
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ScrollToPlugin from "gsap/ScrollToPlugin";
// import Scrollbar from 'smooth-scrollbar';


// import imagesLoaded from 'imagesloaded';
import '../scrollTrigger2Style.css';



function ScrollTrigger2 () {    
    // gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

    // const container = document.querySelector('#container');


    // const options = {
    
    //     damping: 0.1,
    //     alwaysShowTracks: false,
        
    
    // }
    // const scrollbar = Scrollbar.init(container, {
    // ...options
    // });

    // ScrollTrigger.scrollerProxy(container, {
    // // fixedMarkers:true,
    // scrollTop(value) {
    //     if (arguments.length) {
    //     scrollbar.scrollTop = value; // setter
    //     }
    //     return scrollbar.scrollTop; // getter
    // },
    // });

    // scrollbar.addListener(ScrollTrigger.update);
    // ScrollTrigger.defaults({ scroller: container });
  

    // const markers = () => {
    //     if (document.querySelector('.gsap-marker-scroller-start')) {
    //       const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
      
    //     //   scrollbar.addListener(({ offset }) => {
    //     //     gsap.set(markers, { marginTop: -offset.y });
    //     //   });
    //     }   
    // }      

    const theme = {
        primary: "#6067f3",
        secondary: "#e8e2da",
      };
      
      const keywords = ['Jeju','Yang-yang','Mokpo','Busan']
      
      
      function fixedHeader(){
      
        ScrollTrigger.create({
          trigger: '.nav_container',
          start: 'top top',
          // endTrigger:'.footer',
          end: 'max',
          pin: true,
          pinSpacing: false,
        })
      }
      
      
      function heroAnimation(){
      
      
        gsap.set('.logo',{
          width:'100%',
          yPercent:-90
        })
      
        ScrollTrigger.create({
          trigger: '.hero',
          start: 'top top',
          end: 'bottom 20%',
          animation: gsap.to('.logo',{width:'12%',yPercent:0}),
          scrub: true,
        })
      }
      
      
      
      
      function textAnimation(){
      
        gsap.utils.toArray('.header_text-wrap').forEach((text,index)=>{
          
        //   const target = text.querySelector('.header_text-move');
          // const [x,xEnd] = index % 2 ? [innerWidth , 0] : [-innerWidth, 0]
      
          ScrollTrigger.create({
            trigger: text,
            start: 'top center',
            end: 'bottom center',
            animation: gsap.fromTo(text,{ x: index % 2 ? window.innerWidth : -window.innerWidth },{ x:0 }),
            scrub: true,
          })
        })
      }
      
      
      
      function maskAnimation(){
      
        const circleTween = gsap.timeline()
        .to('.circle_element',{
          borderRadius:0,
          width: window.innerWidth,
          height: window.innerHeight
        })
        .add(changeTheme(),0)
      
      
        ScrollTrigger.create({
          trigger: '.circle_wrap',
          start: 'top top',
          end: '+=2000',
          animation: circleTween,
          pin: true,
          scrub: true,
        })
        
      
      }
      
      
      function categorieAnimation(){
      
      
        const tween = gsap.from('.categories > a',{
          opacity:0,
          filter:'blur(3px)',
          stagger:{
            each:0.1,
            from:'random'
          }
        })
        
        ScrollTrigger.create({
          trigger: '.catories_container',
          start: 'top top',
          end: '+=2000',
          animation: tween,
          pin: true,
          scrub: true,
        })
      }
      
      
      
      function changeTheme(themeMode = 'light'){
      
      
        const tween = gsap.to('body,.nav_container',{
          backgroundColor: themeMode === 'light' ? theme.secondary : theme.primary,
          color:themeMode === 'light' ? theme.primary : theme.secondary
        })
      
        return tween
      
      }
      
      
      function gallaryAnimation(){
      
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
          onUpdate:({progress})=>{
      
            const ratio = Math.round(progress * 100);
      
            let index = 0;
            let mode = 'light'
            // console.log( ratio );
            
            
      
            if(ratio > 0 && ratio < 25){
              index = 0;
              mode = 'light'
            }
            if(ratio >= 25 && ratio < 50){
              index = 1;
              mode = 'dark'
            }
            if(ratio >= 50 && ratio < 75){
              index = 2;
              mode = 'light'
            }
            if(ratio >= 75 && ratio <= 100){
              index = 3;
              mode = 'dark'
            }
            
      
            changeTheme(mode);
            document.querySelector('.text_container span').textContent = keywords[index]
      
      
          }
        })
      }
      
      
      
      
      fixedHeader()
      heroAnimation()
      textAnimation()
      maskAnimation()
      categorieAnimation()
      gallaryAnimation()   
      
      
    //   markers()
      

  

    return (         
        <div id="container">
        <div class="hero">
          <img src="/img/page/scrolltrigger2/lighthouse.jpg" alt="손목 시계 클로즈업" />
        </div>
  
        <div class="nav_container">
          <div class="inner">
            <header class="header">
              <nav>
                <ul>
                  <li><a href="{()=>false}">brand</a></li>
                  <li><a href="{()=>false}">product</a></li>
                  <li><a href="{()=>false}">contact</a></li>
                </ul>
              </nav>
              <div class="logo_container">
                <a href="{()=>false}" class="logo">
                  <div>
                    <svg viewBox="0 0 2000 300" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 206.7 12 L 251 12 L 251 185.9 L 356 185.9 L 356 224 L 206.7 224 Z M 425.4 67.3 L 425.4 224 L 383.9 224 L 383.9 67.3 Z M 425.4 10.7 L 425.4 48.6 L 383.9 48.6 L 383.9 10.7 Z M 509.4 251.5 Q 516 257.1 531.7 257.1 Q 553.8 257.1 561.3 242.3 Q 566.2 232.8 566.2 210.3 L 566.2 200.3 Q 560.3 210.3 553.5 215.4 Q 541.3 224.7 521.8 224.7 Q 491.6 224.7 473.5 203.5 Q 455.5 182.3 455.5 146.1 Q 455.5 111.1 472.9 87.3 Q 490.3 63.5 522.2 63.5 Q 534 63.5 542.8 67.1 Q 557.7 73.3 566.9 89.8 L 566.9 67.3 L 606.7 67.3 L 606.7 215.9 Q 606.7 246.3 596.5 261.7 Q 579 288.1 529.2 288.1 Q 499.2 288.1 480.2 276.3 Q 461.2 264.6 459.2 241.1 L 503.8 241.1 Q 505.5 248.3 509.4 251.5 Z M 502.5 170.5 Q 510.8 190.4 532.4 190.4 Q 546.8 190.4 556.7 179.5 Q 566.6 168.6 566.6 144.9 Q 566.6 122.6 557.2 111 Q 547.8 99.3 532 99.3 Q 510.4 99.3 502.2 119.6 Q 497.9 130.4 497.9 146.2 Q 497.9 159.9 502.5 170.5 Z M 786.6 132 L 786.6 224 L 744.8 224 L 744.8 128.7 Q 744.8 116 740.5 108.2 Q 734.9 97.3 719.2 97.3 Q 702.9 97.3 694.5 108.2 Q 686.1 119 686.1 139.2 L 686.1 224 L 645.3 224 L 645.3 12.8 L 686.1 12.8 L 686.1 87.7 Q 695 74 706.8 68.6 Q 718.5 63.2 731.4 63.2 Q 745.9 63.2 757.8 68.3 Q 769.7 73.3 777.3 83.7 Q 783.8 92.4 785.2 101.7 Q 786.6 111 786.6 132 Z M 896.6 194.8 L 896.6 225.4 L 877.2 226.2 Q 848.2 227.2 837.5 216.1 Q 830.6 209 830.6 194.4 L 830.6 97.9 L 808.8 97.9 L 808.8 68.7 L 830.6 68.7 L 830.6 25 L 871.2 25 L 871.2 68.7 L 896.6 68.7 L 896.6 97.9 L 871.2 97.9 L 871.2 180.7 Q 871.2 190.4 873.6 192.7 Q 876.1 195.1 888.6 195.1 Q 890.5 195.1 892.5 195 Q 894.6 195 896.6 194.8 Z M 1052.7 224 L 1052.7 129.4 L 969.8 129.4 L 969.8 224 L 926 224 L 926 12 L 969.8 12 L 969.8 92.9 L 1052.7 92.9 L 1052.7 12 L 1096.7 12 L 1096.7 224 Z M 1266.3 87.1 Q 1286.2 112 1286.2 145.9 Q 1286.2 180.4 1266.3 204.9 Q 1246.5 229.5 1206.1 229.5 Q 1165.7 229.5 1145.8 204.9 Q 1126 180.4 1126 145.9 Q 1126 112 1145.8 87.1 Q 1165.7 62.2 1206.1 62.2 Q 1246.5 62.2 1266.3 87.1 Z M 1205.9 96.9 Q 1188 96.9 1178.3 109.6 Q 1168.6 122.3 1168.6 145.9 Q 1168.6 169.5 1178.3 182.3 Q 1188 195.1 1205.9 195.1 Q 1223.9 195.1 1233.5 182.3 Q 1243.2 169.5 1243.2 145.9 Q 1243.2 122.3 1233.5 109.6 Q 1223.9 96.9 1205.9 96.9 Z M 1416 201.9 Q 1415.4 202.6 1413.1 206.2 Q 1410.8 209.8 1407.7 212.5 Q 1398 221.1 1389.1 224.3 Q 1380.1 227.5 1368 227.5 Q 1333.2 227.5 1321.1 202.4 Q 1314.4 188.6 1314.4 161.7 L 1314.4 67.3 L 1356.3 67.3 L 1356.3 161.7 Q 1356.3 175.1 1359.5 181.9 Q 1365.1 193.8 1381.5 193.8 Q 1402.5 193.8 1410.3 176.8 Q 1414.3 167.6 1414.3 152.5 L 1414.3 67.3 L 1455.9 67.3 L 1455.9 224 L 1416 224 Z M 1603.4 74.4 Q 1621.8 86.2 1624.5 115 L 1583.5 115 Q 1582.7 107.1 1579.1 102.5 Q 1572.3 94.1 1556.1 94.1 Q 1542.7 94.1 1537 98.3 Q 1531.3 102.5 1531.3 108.1 Q 1531.3 115.1 1537.4 118.3 Q 1543.4 121.6 1580.1 129.7 Q 1604.5 135.4 1616.8 147.1 Q 1628.8 158.9 1628.8 176.5 Q 1628.8 199.8 1611.5 214.6 Q 1594.2 229.3 1558 229.3 Q 1521 229.3 1503.4 213.7 Q 1485.8 198.1 1485.8 174 L 1527.3 174 Q 1528.6 184.9 1532.9 189.5 Q 1540.6 197.7 1561.1 197.7 Q 1573.2 197.7 1580.3 194.1 Q 1587.4 190.5 1587.4 183.3 Q 1587.4 176.4 1581.7 172.8 Q 1575.9 169.2 1539 160.4 Q 1512.4 153.8 1501.4 143.9 Q 1490.5 134.1 1490.5 115.7 Q 1490.5 94 1507.5 78.4 Q 1524.6 62.8 1555.5 62.8 Q 1584.8 62.8 1603.4 74.4 Z M 1793.3 178 Q 1791.7 191.9 1778.8 206.3 Q 1758.7 229.2 1722.4 229.2 Q 1692.5 229.2 1669.7 209.9 Q 1646.8 190.6 1646.8 147.2 Q 1646.8 106.5 1667.4 84.8 Q 1688.1 63.1 1721 63.1 Q 1740.6 63.1 1756.2 70.4 Q 1771.9 77.8 1782.1 93.6 Q 1791.3 107.5 1794 125.9 Q 1795.6 136.7 1795.3 157 L 1688.1 157 Q 1688.9 180.6 1702.9 190.1 Q 1711.4 196 1723.3 196 Q 1736 196 1743.9 188.8 Q 1748.2 184.9 1751.5 178 Z M 1752.8 130 Q 1751.8 113.7 1742.9 105.3 Q 1734.1 96.9 1721 96.9 Q 1706.8 96.9 1698.9 105.8 Q 1691.1 114.7 1689.1 130 Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </a>
              </div>
      
              <div>
                <ul>
                  <li><a href="{()=>false}">photo</a></li>
                  <li><a href="{()=>false}">language</a></li>
                </ul>
              </div>
            </header>
          </div>
        </div>
  
        <main>
          <div class="section visual_container">
            <div class="header_text">
              <div class="header_text-wrap">
                <div class="header_text-move">
                  <h1>The</h1>
                </div>
              </div>
              <div class="header_text-wrap">
                <div class="header_text-move">
                  <h1 class="is--alt-text">LIGHTHOUSE</h1>
                </div>
              </div>
              <div class="header_text-wrap">
                <div class="header_text-move">
                  <h1>will light</h1>
                </div>
              </div>
              <div class="header_text-wrap">
                <div class="header_text-move ">
                  <h1>the way</h1>
                </div>
              </div>
            </div>
            <div class="circle_wrap">
              <div class="circle">
                <div class="circle_element">
                  <img
                    src="/img/page/scrolltrigger2/lighthouse/eho2.jpeg"
                    alt="쇼파와 풀이 어우러진 인테리어"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="section catories_container">
            <div class="container is--categories">
              <div class="categories">
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Jeju</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Busan</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Yang-Yang</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Incheon</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Samcheok</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Yeosu</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Pohang</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Boryeong</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Songdo</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Sokcho</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Tongyeong</p>
                </a>
                <a href="{()=>false}" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">More</p>
                </a>
              </div>
            </div>
          </div>
          <div class="section text_container">
            <span>Jeju</span>
          </div>
          <div class="section image_container">
            <div class="back_image contents">
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l1.jpg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l2.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l3.jpg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l4.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l5.jpg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l6.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l7.jpg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l8.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l9.jpg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/l10.jpg" alt="" /></div>
              </div>
            </div>
  
            <div class="front_image contents">
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r1.jpeg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r2.jpeg" alt="" /></div>
              </div>
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r3.jpeg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r4.jpeg" alt="" /></div>
              </div>
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r5.jpg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r6.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r7.jpg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r8.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r9.jpg" alt="" /></div>
                <div><img src="/img/page/scrolltrigger2/lighthouse/r10.jpg" alt="" /></div>
              </div>
            </div>
          </div>
        </main>
  
        <footer class="footer">
          <h1>-END-</h1>
        </footer>
      </div>
    );
}

export default ScrollTrigger2;