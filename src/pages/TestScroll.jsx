import React from 'react';
import { Reset } from 'styled-reset';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import '../test.css';

function TestScroll () { 
    gsap.registerPlugin(ScrollTrigger);


   
    useGSAP(() => {
       
      

        
          
      
    }, {});    
     
    return ( 
      <div id="container">
        <div class="hero">
          <img src="/img/testScroll/bg_flower.jpg" alt="" />
        </div>

        <div class="nav_container">
          <div class="inner">
            <header class="header">
              <nav>
                <ul>
                 <li><a href="#none">2024</a></li>
                  <li><a href="#none">color</a></li>
                  <li><a href="#none">Pantone</a></li>
                </ul>
              </nav>
              <div class="logo_container">
                <a href="#" class="logo">
                  <div>
                    PEACH FUZZ
                  </div>
                </a>
              </div>
            </header>
          </div>
        </div>

        <main>
          <div class="section visual_container">
            <div class="header_text">
              <div class="header_text-wrap">
                <div class="header_text-move">
                  <h1>Pantone</h1>
                </div>
              </div>
              <div class="header_text-wrap">
                <div class="header_text-move">
                  <h1>COLOR</h1>
                </div>
              </div>
              <div class="header_text-wrap">
                <div class="header_text-move">
                  <h1 class="is--alt-text">TRENDS</h1>
                </div>
              </div>
              <div class="header_text-wrap">
                <div class="header_text-move">
                  <h1>2024</h1>
                </div>
              </div>
            </div>
            <div class="circle_wrap">
              <div class="circle">
                <div class="circle_element">
                  <img
                    src="/img/testScroll/bg_sea.jpg"
                    alt="쇼파와 풀이 어우러진 인테리어"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="section catories_container">
            <div class="container is--categories">
              <div class="categories">
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Softer Tan</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Pearly White</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Persimmon</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Friendly Yellow</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Dark Auburn</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Cyberspace</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Stardew</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Utaupeia</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Oakmoss</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Blues &amp; Greens</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Reds &amp; Purples</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Deeps &amp; Darks</p>
                </a>
                <a href="#" class="categories_link w-inline-block">
                  <div class="categories_border"></div>
                  <p class="categories_link-text">Delicate tints</p>
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
                <div><img src="./assets/lighthouse/l1.jpg" alt="" /></div>
                <div><img src="./assets/lighthouse/l2.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="./assets/lighthouse/l3.jpg" alt="" /></div>
                <div><img src="./assets/lighthouse/l4.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="./assets/lighthouse/l5.jpg" alt="" /></div>
                <div><img src="./assets/lighthouse/l6.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="./assets/lighthouse/l7.jpg" alt="" /></div>
                <div><img src="./assets/lighthouse/l8.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="./assets/lighthouse/l9.jpg" alt="" /></div>
                <div><img src="./assets/lighthouse/l10.jpg" alt="" /></div>
              </div>
            </div>

            <div class="front_image contents">
              <div>
                <div><img src="./assets/lighthouse/r1.jpeg" alt="" /></div>
                <div><img src="./assets/lighthouse/r2.jpeg" alt="" /></div>
              </div>
              <div>
                <div><img src="./assets/lighthouse/r3.jpeg" alt="" /></div>
                <div><img src="./assets/lighthouse/r4.jpeg" alt="" /></div>
              </div>
              <div>
                <div><img src="./assets/lighthouse/r5.jpg" alt="" /></div>
                <div><img src="./assets/lighthouse/r6.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="./assets/lighthouse/r7.jpg" alt="" /></div>
                <div><img src="./assets/lighthouse/r8.jpg" alt="" /></div>
              </div>
              <div>
                <div><img src="./assets/lighthouse/r9.jpg" alt="" /></div>
                <div><img src="./assets/lighthouse/r10.jpg" alt="" /></div>
              </div>
            </div>
          </div>
        </main>

        <footer class="footer">
          <h1>-END-</h1>
        </footer>
      </div>


    // <div class="wrapper">
    //     <section className='page page01'>
          
    //     </section>

    //     <header className='header'>
    //       <div className='inner'>
    //         <h1 className='logo'><a href="#none">PEACH FUZZ</a> </h1>
    //         <nav className='nav'>
    //           <ul>
    //             <li><a href="#none">2024</a></li>
    //             <li><a href="#none">color</a></li>
    //             <li><a href="#none">Pantone</a></li>
    //           </ul>
    //         </nav>
    //         </div>
    //     </header>

    //     <main className='main'>
    //       <section className='page page02'>
    //         <div class="header_text">
    //           <div class="header_text-wrap">
    //             <div class="header_text-move">
    //               <h1>COLOR</h1>
    //             </div>
    //           </div>
    //           <div class="header_text-wrap">
    //             <div class="header_text-move">
    //               <h1 class="is--alt-text">TRENDS</h1>
    //             </div>
    //           </div>
    //           <div class="header_text-wrap">
    //             <div class="header_text-move">
    //               <h1>2024</h1>
    //             </div>
    //           </div>            
    //         </div>
    //         <div class="circle_wrap">
    //           <div class="circle">
    //             <div class="circle_element">
    //               <img
    //                 src="/img/testScroll/bg_sea.jpg"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </section>

    //       <section className='page page03'>
    //         <div class="categories">
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Softer Tan</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Pearly White</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Persimmon</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Friendly Yellow</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Dark Auburn</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Cyberspace</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Stardew</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Utaupeia</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Oakmoss</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Blues &amp; Greens</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Reds &amp; Purples</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Deeps &amp; Darks</p>
    //           </a>
    //           <a href="#" class="categories_link w-inline-block">
    //             <div class="categories_border"></div>
    //             <p class="categories_link-text">Delicate tints</p>
    //           </a>
    //         </div>
    //       </section>
    //     </main>
        
    //     <section className='page page04'>
          
    //     </section>
    //     <section className='page page05'>
          
    //     </section>
       
    // </div>
  );
}

export default TestScroll;