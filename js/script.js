/*--------------ROTATING CIRCLE------------------*/
$(document).ready(function(){
    //Auto Radius
    new CircleType(document.getElementById("circle_in"));

    // //반응형 적용
    // var demo4 = new CircleType(document.getElementById("circle_in"));
	// window.addEventListener('onresize', function updateRadius() {  
	//   demo4.radius(demo4.element.offsetWidth / 2);
	// });
	// updateRadius();
});



/*--------------MOUSE CURSOR------------------*/
const cursor = document.querySelector("#cursor");
//확장 좌표
const touch = document.querySelectorAll("a");

//마우스 좌표 확인
document.addEventListener("mousemove", (e) => {
    let x = e.pageX,
        y = e.pageY;    
        //console.log(x, y);

    //이동 방향과 커서 일치
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

//마우스를 올릴 시 확장 실행
touch.forEach((tou) => {
    tou.addEventListener("mouseover", () => {
        cursor.style.transform ="scale(2.5)";
        cursor.style.animationName = "borderAni";
    
    });
    tou.addEventListener("mouseleave", () => {
        cursor.style.transform ="";
        cursor.style.animationName = "";
        
    });
});



/*--------------TEXT BANNER------------------*/
let scroll = window.scrollY / 1;
const moveScroll = () => {
    scroll = window.scrollY / 1.5;
    document.getElementById("textBanner1").style.transform = "translateX(-"+scroll+"px)";
    document.getElementById("textBanner2").style.transform = "translateX(-"+scroll+"px)";
}
setInterval(moveScroll, 1);



/*--------------TYPING------------------*/
const typed = new Typed(".typing", {

    strings : ["or... let's back to the beginning!"], //브라우저에 띄울 문구
    stringsElement : null,  //초기 공간을 비운다.
    typeSpeed : 100,  //타이핑 속도
    backSpeed : 100,  //backspace 속도
    startDelay : 1000,  //최초 타이핑 시간을 1초만큼 지연
    backDelay : 1000,  //이전 문장을 모두 타이핑하고 1초 후 backspace가 진행되도록 구성
    loop : true, 
    showCursor : true,
    cursorChar : "|"  //커서 모양
  });



/*--------------SCROLL TRIGGER & GSAP------------------*/
gsap.registerPlugin(ScrollTrigger);

//타겟 설정
let bright = document.querySelector(".about");
let morning = document.querySelector(".contact"); 
let menu = document.querySelectorAll(".nav_l, .nav_r"); 
let heading1 = document.querySelector(".main .first");
let heading2 = document.querySelector(".main .second");
let heading3 = document.querySelector(".main .third");

//애니메이션 구성
gsap.fromTo( morning, {
        clipPath: "circle(5% at center)",
    },
    {
        clipPath: "circle(80% at center)",
        scrollTrigger: {
            trigger: morning,
            scrub: 1,
            start: "top center"
    }
}); // section contact

gsap.from( menu, {
    y: -20, 
    opacity: 0, 
    delay: .5, 
    duration: 1,
    stagger: .2
});  // section hero - menu

gsap.from( heading1, {
    duration: .7,
    opacity: 0,
    y: -30,
    delay: .6
});  
gsap.from( heading2, {
    duration: .7,
    opacity: 0,
    y: -30,
    delay: .7
});
gsap.from( heading3, {
    duration: .7,
    opacity: 0,
    y: -30,
    delay: .8
});  // section hero - main

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: bright,
        toggleClass: 'active',
        start: "top top",
        end: "bottom bottom",
        duration: .2
    }   
});
tl.fromTo( bright, {
        backgroundColor: "#080808",
        color: "#fff",
        duration: 2
    },
    {
        backgroundColor: "#e8e7e5",
        color: "#080808",
        duration: 2
});  

gsap.from('.about_cont .cont_l h1', {
    scrollTrigger: {
        trigger: '.about_cont .cont_l h1'
    },
    y: -30,
    duration: .4,
    stagger: .2,
    opacity: 0
}); 
gsap.from('.about_cont .cont_l h5', {
    scrollTrigger: {
        trigger: '.about_cont .cont_l h5'
    },
    y: -30,
    duration: .3,
    stagger: .1,
    opacity: 0
}); 
gsap.from('.about_cont .cont_l a', {
    scrollTrigger: {
        trigger: '.about_cont .cont_l a'
    },
    y: -30,
    duration: .3,
    stagger: .1,
    opacity: 0
});  
gsap.from('.gage span', {
    scrollTrigger: '.gage',
    width: '0px',
    ease: Power2.easeInOut,
    duration: 2,
    stagger: .1
}); // section about

gsap.from('.work_left', {
    scrollTrigger: {
        trigger: '.work'
    },
    x: -50,
    duration: 1,
    stagger: 1,
    opacity: 0
});
gsap.from('.work_right', {
    scrollTrigger: {
        trigger: '.work'
    },
    x: 50,
    duration: 1,
    stagger: 1,
    opacity: 0
}); // section about



/*--------------#about에서 헤더 텍스트 색상 변경-----------------*/
$(function(){
    $(window).scroll(function(){
        const $scrollY = $(this).scrollTop();

        if(scrollY >= 1300 && scrollY < 2300) {

            $('header a').addClass('txtColor');
        
        }else{
            $('header a').removeClass('txtColor');
        }
    });
});


/*--------------SCROLL TOP-----------------*/
const scrollTopBtn = document.querySelector("#top_btn");

scrollTopBtn.addEventListener("click", function(){
    $("html, body").animate({ scrollTop: 0}, "slow");
});



//   const scrollTxt = document.querySelector(".scroll_position");

// window.addEventListener("scroll", function(){
//     let scrollLocation = window.scrollY;
//     console.log(scrollLocation);
//     //scrollTxt.textContent = scrollLocation;
// });

// const resizeEvt = function(){
//     // console.log("resize 이벤트 발생");
//     const 
// }

// resizeEvt(); 
// window.onresize = resizeEvt; 
