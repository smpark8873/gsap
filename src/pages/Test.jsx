// import React, { useRef } from 'react';
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";

function Test () {
    
    var output = document.querySelector("#output");

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
    var tl = gsap.timeline({repeat: 3, repeatDelay: 1});
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
    var tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        onRepeat: onRepeatHandler,
        onComplete: onCompleteHandler
    });

    function onRepeatHandler () {};
    function onCompleteHandler () {};
    
    // repeat : 애니메이션이 반복되는 횟수
    // repeatDelay : 반복 사이의 시간(초)
    // yoyo : true이면 재생이 반복될 때마다 앞뒤로번갈아 재생
    //delay : 타임라인이 시작되기 전 시간(초)
    // onComplete: 타임라인 재생이 끝났을때 호출할 함수


    //### Getter(모든 인수 생략)/Setter(값 전달) 메소드

    // time(): repeat 또는 repeatDelay를 포함하지 않는 재생 헤드의 로컬 위치(현재 시간, 초)
    // progress() : 재생 헤드의 위치를 나타내는 0과 1 사이의 값으로 트윈의 진행률, 여기서 0은 시작 부분, 0.5는 중간 완료, 1은 끝부분
    // duration() : repeat 또는 repeatDealy를 포함하지 않는 애니메니션 지속시간(초)
    // delay() : 애니메이션의 초기 지연 시간(애니메이션이 시작되기 전의 시간, 초)


    var tween2 = gsap.to(".orange", {duration: 1, x: 100});
    console.log(tween2.daration()); 
    tween2.duration(2);

    var tl2 = gsap.timeline();
    tl2.to(".green", {duration: 5, x: 200})
    .to(".orange", {duration: 5, x: 200});

    console.log(tl2.duration());
    tl2.duration(2);

    // ### 요소 속성의 현재 값 얻기

    let w = gsap.getProperty(".green", "width"); //선택기 텍스트를 사용 할 수 있다.
    let bgColor = gsap.getProperty(".orange", "backgroundColor"); //또는 변수 참조를 사용할 수 있다.

    // this.targets() 와 함께 사용됩니다.
    gsap.to(".pink", {x: 100, onUpdate: function() {
        let elem = this.targets()[0];

        console.log(gsap.getProperty(elem,"x"));
    } });


    // ### 트윈 컨트롤
    var tween3 = gsap.to(".green", {duration:3, x:600, ease:"linear", paused:true});

    document.getElementById("play").onclick = ()=> tween3.play();
    document.getElementById("pause").onclick = ()=> tween3.pause();
    document.getElementById("reverse").onclick = ()=> tween3.reverse();
    document.getElementById("restart").onclick = ()=> tween3.restart();


        //  ###   위치 매개변수
        // 위치 매개변수를 사용하면 타임라인에서 트윈의 시작 시간을 오프셋할 수 있습니다.

        var tl = gsap.timeline();
        tl.to("green", {y:300}, "+=1")  // start 1 second after previous tween ends
        tl.to("green", {x:300}, "-=1")  // start 1 second before previous tween ends
        tl.to("green", {rotation:90}, "<")  // start when previous tween begins
        tl.to("green", {opacity:0.5}, "<1") // start 1 second after previous tween begins
        tl.to("green", {x:200}, 1) // start exactly at a time of 1

        //"+=" 및 "-=" 위치 매개 변수를 사용하는 상대 트윈은 타임라인 끝을 기준으로 배치됩니다. 이는 항상 타임라인의 이전 트윈일 필요는 없습니다.

    return(         
        <>
            <div class="green"></div>
            <div class="orange"></div>
            <div class="pink"></div>
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


