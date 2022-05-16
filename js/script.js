/*--------------ROTATING CIRCLE------------------*/
$(document).ready( () => {
    //Auto Radius
    new CircleType(document.getElementById("circle_in"));
});



/*--------------MOUSE CURSOR------------------*/
const cursor = document.querySelector('#cursor');
//확장시킬 범위
const touch = document.querySelectorAll('a');

//마우스를 이동 시키면
$(window).on('mousemove', (e) => {

    let x = e.pageX, // 현재 x좌표
        y = e.pageY; // 현재 y좌표     
        //console.log(x, y);

    //이동 방향과 커서 일치
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});


touch.forEach( (tou) => {
    // 마우스를 올리면
    tou.addEventListener('mouseover', () => {
        // 확장과 애니메이션 실행
        cursor.style.transform ='scale(2.5)';
        cursor.style.animationName = 'borderAni';
    
    });
    // 마우스를 떼면
    tou.addEventListener('mouseleave', () => {
        // 원래대로
        cursor.style.transform = '';
        cursor.style.animationName = '';
        
    });
});



/*--------------TEXT BANNER------------------*/
let scroll = window.scrollY / 1;

const moveScroll = () => {
    scroll = window.scrollY / 1.5;
    $("#textBanner1").css('transform', `translateX(-${scroll}px)`);
    $("#textBanner2").css('transform', `translateX(-${scroll}px)`);
}
setInterval(moveScroll, 1);



/*--------------TYPING------------------*/
const typed = new Typed(".typing", {
    
    //브라우저에 띄울 문구
    strings : ["or... let's back to the beginning!"], 
    //초기 공간은 공백으로
    stringsElement : null,  
    //타이핑 속도
    typeSpeed : 100,  
    //backspace 속도
    backSpeed : 100,  
    //최초 타이핑 시간 1초 지연
    startDelay : 1000,  
    //문장 모두 타이핑하고 1초 후 backspace가 진행되도록 구성
    backDelay : 1000,  
    //반복
    loop : true, 
    //커서 보이기
    showCursor : true,
    //커서 모양
    cursorChar : "|"  
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
gsap.from('.about_cont .cont_l p', {
    scrollTrigger: {
        trigger: '.about_cont .cont_l p'
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
$(window).scroll( () => {

    // 현재 높이 변수로 설정
    const height = $(window).scrollTop();
    //console.log(height);

    // 스크롤이 about section에 있는 동안
    if(height >= 900 && height < 1900) {
        // 텍스트 색상 변경
        $('header a').addClass('txtColor');
        // 아닐 경우 원래대로
    }else{
        $('header a').removeClass('txtColor');
    }

});



/*--------------SCROLL TOP-----------------*/
// 스크롤 버튼 
const scrollTopBtn = $('#top_btn');

// 버튼을 클릭하면
scrollTopBtn.on('click', () => {
    // 스크롤바 위치를 0으로 천천히 이동
    $('html, body').animate({ scrollTop: 0}, 'slow');
});