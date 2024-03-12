// import React, { useRef } from 'react';
import gsap from "gsap"; 
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from 'imagesloaded';
import '../scrollStyle.css';



function Scroll () {    
 
    gsap.registerPlugin(ScrollTrigger);  

    const sectionColors = ['#f2eee5','#e5c1c5','#c3e2dd','#6eceda','#FB9DA7','#FCCCD4','#FBDEA2','#F2E2C6','#8EB695']

    gsap.set('.section',{backgroundColor:gsap.utils.wrap(sectionColors)})


    gsap.utils.toArray('.section').forEach((item,index)=>{

        let h2 = `
        <h2>section${index + 1}</h2>
        `
        item.insertAdjacentHTML('beforeend',h2);

    })

    const showDemo = () => {

        gsap.to('.loader',{autoAlpha:0});
        document.body.style.overflow = 'auto';
        document.scrollingElement.scrollTo(0,0);
    
        gsap.utils.toArray('section').forEach((section,index) => {
            const w = section.querySelector('.wrapper');
    
            if(w) {
                const[x,xEnd] = index % 2 ? ['100%', -(w.scrollWidth - window.innerWidth)] : [-(w.scrollWidth),0]
                // console.log(x,xEnd);
    
                gsap.fromTo(w,{x},{
                    x:xEnd,
                    scrollTrigger: {
                        trigger: section,
                        scrub: 0.5
                    }
                })
            }
        })
    }
    
    const awsome = () => {
        const tl = gsap.timeline({
            default: {
                ease: 'none'
            }
        })
        .from('.awsome .text',{x:window.innerWidth})
        .to('.awsome .text',{scale:50,xPercent:-200})
        .to('body',{duration: 0.3, backgroundColor:'black'},'-=0.5')  
      
        ScrollTrigger.create({
          trigger: '.awsome',
          start: 'top top',
          end: '+=3000',
          animation: tl,
          pin: true,
          scrub: 1,
        })
    }
    
    const tryNow = () => {
        ScrollTrigger.create({
            trigger: '.try',
            start: 'top top',
            end: '+=2000',
            animation: gsap.from('.try',{y: 50, opacity: 0}),
            pin: true,
            scrub: true,
        })
    }
    
    
    
    function init() {
        showDemo();
        awsome();
        tryNow();
    }
    
    const img = gsap.utils.toArray('img');  
    const loader = document.querySelector('.loader--text');

    const updateProgress = (instance) => {
        loader.textContent = `${Math.round(instance.progressedCount*100 /img.length)}%`
    }

    imagesLoaded(img)
    .on('progress', updateProgress)
    .on('always',init)


    return (         
       <>
            <div class="loader df aic jcc">
                <div>
                    <h1>Loading</h1>
                    <h2 class="loader--text">0%</h2>
                </div>
            </div>
            <div class="demo-wrapper">
            <header class="df aic jcc">
                <div>
                <h1>ScrollTrigger</h1>
                <h2>Practice</h2>
                </div>
            </header>
            <section class="demo-text">
                <div class="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            </section>
            <section class="demo-gallery">
                <ul class="wrapper">
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=190"
                    width="1240"
                    alt=""
                    />
                </li>
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=192"
                    width="1240"
                    alt=""
                    />
                </li>
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=111"
                    width="1240"
                    alt=""
                    />
                </li>
                </ul>
            </section>
            <section class="demo-gallery">
                <ul class="wrapper">
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=75"
                    width="1240"
                    alt=""
                    />
                </li>
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=112"
                    width="1240"
                    alt=""
                    />
                </li>
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=166"
                    width="1240"
                    alt=""
                    />
                </li>
                </ul>
            </section>
            <section class="demo-gallery">
                <ul class="wrapper">
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=82"
                    width="1240"
                    alt=""
                    />
                </li>
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=58"
                    width="1240"
                    alt=""
                    />
                </li>
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=158"
                    width="1240"
                    alt=""
                    />
                </li>
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=75"
                    width="1240"
                    alt=""
                    />
                </li>
                </ul>
            </section>
            <section class="demo-gallery">
                <ul class="wrapper">
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=197"
                    width="1240"
                    alt=""
                    />
                </li>
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=29"
                    width="1240"
                    alt=""
                    />
                </li>
                <li>
                    <img
                    height="874"
                    src="https://source.unsplash.com/random/1240x874?sig=74"
                    width="1240"
                    alt=""
                    />
                </li>
                </ul>
            </section>
            <section class="demo-text">
                <div class="wrapper text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            </section>

            <section class="awsome">
                <div class="text">AWSOME</div>
            </section>
            
            <section class="try">
                <div class="text">Try NOW.</div>
            </section>
            <footer class="df aic jcc">
                <p>Images from <a href="https://unsplash.com/">Unsplash</a></p>
            </footer>
            </div>
       </>
    );
}

export default Scroll;