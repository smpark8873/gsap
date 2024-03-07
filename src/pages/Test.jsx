// import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSA, GSDevTools } from "@gsap/react";

function Test () {
    
    var output = document.querySelector("#output");
    gsap.registerPlugin(GSDevTools); 

    gsap.to(".green", {
    duration: 2,
    x: 300,
    onStart: showMessage,
    onStartParams: ["the green div has started to move"],
    onComplete: showMessage,
    onCompleteParams: ["the green div is done moving"],
    delay: 1
    });
    gsap.to(".orange", {
    duration: 2,
    x: 300,
    onStart: showMessage,
    onStartParams: ["the orange div has started to move"],
    onComplete: showMessage,
    onCompleteParams: ["the orange div is done moving"],
    delay: 1
    });

    function showMessage(message) {
    output.innerHTML += message + "<br />"
    }

    var tween = gsap.to(".pink", {duration:1, x:100});
    tween.pause(); //일시 중지
    tween.resume(); //다시시작(방향전환 - 역방향 또는 역방향 제외)
    tween.reverse(); //역방향(항상 처음으로 돌아감)
    tween.seek(0.5); //0.5초 점프
    tween.parogress(0.25); //진행률의 1/4로 점프
    tween.timeScale(0.5); //절반속도
    tween.timeScale(2); //배속
    tween.kill(); //즉시 종료하고 가비지 컬렉션에 적합하게 만듬



    // 위치 매개변수로 배치 제어
    const tl = gsap.timeline({repeat: 3, repeatDelay: 1});
    tl.to(".green", {x:200})
      .to(".orange", {x: 200}, "+=0") //타임라인 종류 후 1초 (갭)
      .to(".pink", {rotation:90}, "-=0.5") //타임라운 종료 0.5초 전(오버랩)
      .to(".gray", {scale: 4}, 6); // 타임라인 시작으로 부터 정확히 6초 (절대적)

  

    tl.to(".green", {duration: 1, x: 200})
    .to(".orange", {duration: 1, x: 200, scale: 0.2}, "+=1")
    .addLabel("grayAndPink") //끝에 레이블 추가
    .to(".gray", {duration: 1, x: 200, scale: 2, y: 20}, "grayAndPink") //두 애니메이션을 동시에 "greyAndPink" 레이블에서 시작
    .to(".pink", {duration: 1, x: 200, rotation: 360}, "grayAndPink");

    //### 타임라인 제어
    const tl22 = gsap.timeline({
        repeat: 1,
        yoyo: true,
        onRepeat: onRepeatHandler,
        onComplete: onCompleteHandler
    });

    function onRepeatHandler () {};
    function onCompleteHandler () {};
    

    // ### 자연과 반복
    // - delay : 애니메이션이 시작되기 전에 지연시간을 지정합니다.
    // - repeat : 애니메이션이 몇번 반복되어야 하는지를 지정합니다.
    // - yoyo : `true` 로 설정하면 애니메이션이 앞뒤로 재생됩니다.
    // - repeatDelay : 각 반복 사이에 발생하는 지연시간을 지정합니다.
    // * 무한 반복은 repeat: -1 을 설정하면 애니메이션이 무기한 반복됩니다.
    // * yoyo 속성은 repeat 설정이 들어있어야 사용가능합니다.


    // ### 가속도
    // ease는 애니메이션이 재생될 떄 변경 속도를 제어
    // - `ease:”bounce”` 애니메이션이 빠질 때 바운스 됩니다.
    // - `ease:”bounce.in”` 애니메이션이 들어올 때 바운스 됩니다.
    // - `ease:”bounce.inOut”` 애니메이션이 들어오고 빠질 때 바운스 됩니다.
    //  * 커브가 가파를수록 더 급격한 변화



    // ### 다중요소 제어하기
    // stagger속성을 사용하면 단일 트윈에서 여러 대상의 시작 시간을 오프셋 설정할 수 있습니다.        
    gsap.to('.stage .box', 
        {y: -100, stagger:{
        amount: 1,
        from: "center"   //어디서부터 시작하느냐, edges, end, start       
        }}
    )



    // ###  트윈 컨트롤
    //  Tween에는 재생을 제어하는 여러 가지 방법들이 있습니다.
    // 트윈을 제어하려면 이를 참조할 방법이 필요합니다. 아래의 코드처럼 트윈을 참조하는 변수를 설정합니다.


    // ### 트윈 컨트롤
    var tween3 = gsap.to(".green", {duration:3, x:600, ease:"linear", paused:true});
    document.getElementById("play").onclick = ()=> tween3.play();
    document.getElementById("pause").onclick = ()=> tween3.pause();
    document.getElementById("reverse").onclick = ()=> tween3.reverse();
    document.getElementById("restart").onclick = ()=> tween3.restart();

    
    // ### from() 트윈의 버그?
    // const circle = document.querySelector(".circle")
    // const bg = document.querySelector(".bg")

    // let getter = gsap.getProperty(bg);
    // let x = getter('width','vw')

    // console.log(x)

    // circle.addEventListener('mouseenter',()=>{
    
    // console.log(gsap.getProperty(bg,'scale'));
    // gsap.fromTo(bg,{scale:0},{scale:1})
    // })

     // ### 요소 속성의 현재 값 얻기
     let w = gsap.getProperty(".green", "width"); //선택기 텍스트를 사용 할 수 있다.
     let bgColor = gsap.getProperty(".orange", "backgroundColor"); //또는 변수 참조를 사용할 수 있다.
 
     // this.targets() 와 함께 사용됩니다.
     gsap.to(".pink", {x: 100, onUpdate: function() {
         let elem = this.targets()[0];
 
         console.log(gsap.getProperty(elem,"x"));
     } });
 

    //### Getter(모든 인수 생략)/Setter(값 전달) 메소드
    // time(): repeat 또는 repeatDelay를 포함하지 않는 재생 헤드의 로컬 위치(현재 시간, 초)
    // progress() : 재생 헤드의 위치를 나타내는 0과 1 사이의 값으로 트윈의 진행률, 여기서 0은 시작 부분, 0.5는 중간 완료, 1은 끝부분
    // duration() : repeat 또는 repeatDealy를 포함하지 않는 애니메니션 지속시간(초)
    // delay() : 애니메이션의 초기 지연 시간(애니메이션이 시작되기 전의 시간, 초)


    // ### **GSAP 공식 문서**
    // GSAP 공식 문서는 매우 강력하고 자세합니다. 처음에는 양이 많아 다소 부담스러울 수 있습니다.
    // 하지만, 어떤 공부든 공식문서를 통해 정보를 습득하는 습관을 가지는게 제일 바람직한 공부방법입니다.


    var tween2 = gsap.to(".orange", {duration: 1, x: 100});
    console.log(tween2.daration()); 
    tween2.duration(2);

    var tl2 = gsap.timeline();
    tl2.to(".green", {duration: 5, x: 200})
    .to(".orange", {duration: 5, x: 200});

    console.log(tl2.duration());
    tl2.duration(2);


    // ### 타임라인이 중요한 이유

    // ### # 기초 타임라인
    // 타임라인은 gsap.timeline()으로 생성됩니다.
    // 타임라인은 모든 트윈을 자연스럽게 순서대로 재생처리합니다.


    // ### Position Parameter 시각적 효과 
    //  타임라인 위치 매개변수 설정
    // 위치 매개변수를 사용하면 타임라인에서 트윈의 시작 시간을 오프셋 할 수 있습니다.
    //"+=" 및 "-=" 위치 매개 변수를 사용하는 상대 트윈은 타임라인 끝을 기준으로 배치됩니다. 이는 항상 타임라인의 이전 트윈일 필요는 없습니다.
    const tl3 = gsap.timeline();
    tl3.to(".green", {y:300}, "+=1")  // 이전 트윈 종료 후 1초 뒤에 시작
    tl3.to(".orange", {x:300}, "-=1")  // 이전 트윈 종료 1초 전에 시작
    tl3.to(".pink", {rotation:90}, "<")  // 이전 트윈 시작될 때 동시에 실행
    tl3.to(".gray", {opacity:0.5}, "<1") // 이전 트윈 시작 된 후 1초 뒤에 실행
    tl3.to(".green", {x:200}, 1) // 타임라인 1초에 실행 
    
   
    // ### 기초 타임라인 포지션 


    // ### 타임라인의 컨트롤과 라벨링
    // 타임라인에는 트윈과 정확히 동일한 제어 방법이 있습니다. 트윈을 play()하는 방법을 이미 알고 있으므로 타임라인을 play()하는 방법도 이미 알고 있습니다.
    // 먼저 다음과 같이 타임라인에 대한 참조를 만들어야 합니다.

        var animation = gsap.timeline()
        
        // later on you can do
        animation.play();
        animation.pause();
        animation.restart();
        animation.reverse();
        animation.play("test");

        //etc
        //라벨을 사용하면 타임라인의 특정 시점을 표시할 수 있습니다. 
        //add() 메소드를 사용하여 타임라인에 라벨을 추가할 수 있습니다.

        // .from("#freds img", {y:160, stagger:0.5, duration:0.8, ease:"back"}, "+=0.5")
        // .add("test")
        // .from("#time", {xPercent:100, duration:1, ease:"bounce"});

        //  ### 플래시를 방지하려면 다음과 같은 몇 가지 조치를 취해야 합니다.

        // 1. CSS 스타일의 가시성:숨김을 제공하여 모든 요소가 포함된 <div>를 숨깁니다.

        // 2. autoAlpha:0 에서 페이드 인되는 gsap 애니메이션 코드 만들기

        // 3. 애니메이션 코드를  init()  함수로 래핑합니다.

        // 4. 로드 이벤트 리스너를 사용하여 페이지가 로드된 후 init() 함수 호출

        // var tl = gsap.timeline({ repeat:4, yoyo:true, defaults:{opacity:0, ease:"back"}});
        // gsap.set("#demo", {rotationY:15})
        // function init() {
        //     tl.from("#demo", {ease:"linear", autoAlpha:0})
        //     .from("h1", {x:80, duration:1})
        //     .from("h2", {x:-80, duration:1}, "<")
        //     .from("p", {y:30}, "-=0.2")
        //     .from("button", {y:50}, "-=0.4") 
        //     .from("#items > g", {scale:0, transformOrigin:"50% 50%", stagger:0.1}, "-=0.5")
        // }

        // window.addEventListener("load", function(event) { 
        // init(); //do stuff
        // GSDevTools.create({animation:tl})
        // });


        // ### 텍스트 플러그인 : https://gsap.com/docs/v3/Plugins/TextPlugin#cdn-link


        GSDevTools.create();

    return(         
        <>
            <div class="green"></div>
            <div class="orange"></div>
            <div class="pink"></div>
            <div class="gray"></div>
            <div id="output"></div>
            <div id="nav">
                <button id="play">play</button>
                <button id="pause">pause</button>
                <button id="reverse">reverse</button>
                <button id="restart">restart</button>
            </div>
        </>
           
    );
}

export default Test;


