// import React, { useRef } from 'react';
// import gsap from "gsap"; 





function AnimationControls () {    
    
   
      
  
    
     
    return (         
       <>
        <h2>콜백처리</h2>
        GreenSock의 강력한 기능은 애니메이션의 콜백 처리 입니다. 콜백의 종류, 매개변수, 범위를 학습합니다.<br /><br />
        - 콜백에 매개변수 전달<br />
        - 콜백 범위<br />
        - 콜백에서 애니메이션 참조<br />
        - 화살표 함수를 콜백으로 사용 (좋지 않을 수 있음)<br />
        - 콜백 범위 변경   <br /><br />


        <h2>CSS Plugin : clearProps</h2>
        자바스크립트를 통해 css의 속성을 만질 경우 인라인 스타일로 적용되기 때문에 기존의 css설정 값이 우선순위에 밀리게 됩니다.<br />
        다시 이전 상황으로 돌아가려면 인라인 스타일 자체를 없애는 것 뿐만 아니라, 기존의 css 스타일까지 입혀줘야 하는 번거로움이 발생하게 됩니다. <br />
        이럴 경우 CSSPlugin 기능중 clearProps를 사용할 수 있습니다.<br /><br />

        

       </>
      
   );
}

export default AnimationControls;