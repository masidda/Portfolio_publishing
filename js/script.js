
// lenis scroll
const lenis = new Lenis();
    lenis.on('scroll', (e) => {
        console.log(e);
    })
    
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

// a href="#" 반응 없애기
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault(); 
});


// header 영역 스크롤 방향 이벤트
$(function(){
    var prevScrollTop = 0;
    document.addEventListener('scroll', function(){
        let nowScrollTop = $(window).scrollTop()

        if(nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
})


// scrolla
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});      
}); 

//simplyScroll 
$(function(){
    $(".scroller").simplyScroll({
        speed:4,
        pauseOnHover:false,
        pauseOnTouch: false
    });
});


// 각 섹션별 높이 값
// hello : 960
// skills : 2040
// ncs : 3120
// works : 4080
// gallery : 7350
// contact : 8290
// footer : 10240



// $(function() {
//     var scrollHeight = 960; // 특정 높이값

//     $(window).on('scroll', function() {
//     var scrollPos = $(this).scrollTop();

//       // 특정 높이값에 도달하면 CSS 속성 변경
//     if (scrollPos >= scrollHeight) {
//         $('header').css('color', 'white');
//     } else {
//         $('header').css('color', 'black');
//     }
//     });
// });

// $(function() {
//     let scrollRange = {
//         "hello": { start: 960, end: 2040, color: "white" },
//         "skills": { start: 2041, end: 3120, color: "black" },
//         "ncs": { start: 3121, end: 9250, color: "white" },
//         "contact": { start: 9251, end: 10200, color: "black" },
//         "footer": {start: 10201, end: 14000, color: "white"}
//     };

//     let header = $('header');

//     // 스크롤 이벤트를 처리하는 함수
//     $(window).on('scroll', function() {
//         // 현재 스크롤 위치를 가져오기
//         let scrollPos = $(this).scrollTop();
//         // 기본 글자 색상을 'black'으로 설정
//         let currentColor = "black";

//     // 각 섹션에 대해 반복
//         $.each(scrollRange, function(sectionName, range) {
//             // 현재 스크롤 위치가 섹션의 범위 내에 있는지 확인
//             if (scrollPos >= range.start && scrollPos < range.end) {
//                 // 현재 섹션의 글자 색상을 설정
//                 currentColor = range.color;
//                 // 반복을 중지하고 더 이상 확인하지 않음
//                 return false;
//             }
//         });

//         // 헤더의 글자 색상을 변경
//         header.css('color', currentColor);
//     });
// });


// scrolltrigger
$(function(){
gsap.registerPlugin(ScrollTrigger);



    // .ncs li에 mouse hover시 이미지 표출
    let activeImg;

ScrollTrigger.matchMedia({
    '(min-width: 769px)' : function() {
        gsap.utils.toArray('.ncs ul li a').forEach((elem) => {
            let image = elem.querySelector('img.fadeImg'),
            //.ncs ul li a를 배열을 forEach문으로  elme매개변수로 반복문실행 , 
        //elem의 하위요소,showImg를 image에 저장
                align = e => {
                    setX(e.clientX);
                    setY(e.clientY);              
                },
                //이벤트발생시 현재 마우스 위치의 x, y 좌표를 setX, setY 변수에 할당합니다.
                
                startPoint = () => document.addEventListener("mousemove", align),
                //startPoint함수는 mousemove와 align함수가 실행되는 함수
    
                stopPoint = () => document.removeEventListener("mousemove", align)
                //stopPoint함수는 mousemove와 align함수가 제거되는 함수
    
                // 여기서 fade는 왜 let 혹은 const 선언이 안되어 있는지 ..?
                const fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true }); 
                //변수fade는 이미지가 자동투명도를 0.8되서 일시정지하여 변수 fade에 대입함
    
            //.con02 ul li a영역에 들어갔을때 fade변수가 실행되고 startPoint()함수가 호출되라
            elem.addEventListener('mouseenter', (e) => {
                fade.play();
                startPoint();
    
                //액티브이미지가 활성되면!! gsap바로 세팅
                if (activeImg) {
                    gsap.set(image, {x: gsap.getProperty(activeImg, "x"), y: gsap.getProperty(activeImg, "y")}
                    );
                }
            //이미지의 X축은 activeImg의 x값을 반환하고
            //이미지의 y축는 activeImg의 Y값을 반환하고
            //gsap.getProperty()는 (activImage의 X값)=> 속성을 반환
    
                // setX, setY 변수를 gsap.quickTo() 메소드를 사용하여, image 요소의 x, y 위치를 빠르게 변경
                activeImg = image;  //img.fadeImg
                setX = gsap.quickTo(image, "x", {duration: 0.3, ease:Elastic}),
                setY = gsap.quickTo(image, "y", {duration: 0.3, ease:Elastic})
    
                align(e);
                //이벤트시 마우스 위치의 x, y 좌표를 setX, setY 변수에 할당하는 함수호출 
            });
    
            elem.addEventListener('mouseleave', () => fade.reverse());
            
        });
        //.reverse() => 애니메이션 모든 측면이 뒤로 향하도록 재생 반전
    }
})

    




    // index.html bgcolor 바꾸기
    gsap.utils.toArray(".color").forEach((item) => {
        // data-bgColor, data-textColor 속성 값 불러오기
        let color = item.getAttribute("data-bgColor")
        let textColor = item.getAttribute("data-textColor")

        ScrollTrigger.create({
            trigger: item,
            start: "top center", //center
            end: "bottom center", // 70%
            scrub: true,
            // markers: true,
            onEnter: () => gsap.to("section", {backgroundColor: color, color: textColor}),
            onEnterBack: () => gsap.to("section", {backgroundColor: color, color: textColor}),
        });
    });


    // header textColor 변경
    gsap.utils.toArray("section").forEach(function(hdColor){
        let textColor = hdColor.getAttribute('data-textColor')

        ScrollTrigger.create({
            trigger: hdColor,
            start: 'top center',
            end: 'bottom top',
            scrub: true,
            // markers: true,
            onEnter: () => gsap.to('header', {color:textColor}),
            onEnterBack: () => gsap.to('header', {color: textColor})
        })
    })


    // hello text color change animation
    gsap.to(".txt p", {
        backgroundPositionX: "0%",
        stagger: 1,
        duration: 10,
        scrollTrigger: {
            trigger: ".txt p",
            scrub: true,
            start: "top 60%",
            end: "bottom top",
            // markers: true
        },
    });

    // hello imgBox y축 이동 animation, 768px 이상일때만 적용
    ScrollTrigger.matchMedia({
        '(min-width: 769px)' : function() {
            gsap.to(".hello .imgBox", {
                yPercent: -10,
                ease: "none",
                duration: 20,
                scrollTrigger: {
                    trigger: ".imgBox",
                    start: "top center",
                    end: "bottom 10%",
                    // markers: true,
                    scrub: 1
                },
            });
        }
    })



    

    // skills list 이동 animation
    gsap.timeline({
        scrollTrigger: {
            trigger: '.skill',
            start: 'top 30%',
            end: 'bottom',
            scrub: 1,
            //markers: true
        },
    })
    .fromTo('.skill .list .a', {x: '-30%'}, {x: '70%', ease:'none', duration: '10', opacity: 0}, 0)
    .fromTo('.skill .list .b', {x: '30%'}, {x: '-70%', ease:'none', duration: '10', opacity: 0}, 0)


    
    // // work text x축 이동 animation
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.works',
    //         start: 'top top',
    //         pin: true,
    //         anticipatePin:true,
    //         end: '+=100vh',
    //         scrub: 3,
    //         //markers: true
    //     },
    // })
    // .fromTo('.works .textBox .a', {x: '-10%'}, {x: '10%', ease:'none', duration: '10'}, 0)
    // .fromTo('.works .textBox .b', {x: '10%'}, {x: '-10%', ease:'none', duration: '10'}, 0)


    // // contact stroke 색상 채우기 animation
    // gsap.to(".stroke", {
    //     backgroundPositionX: "0%",
    //     stagger: 1,
    //     duration: 0.1,
    //     scrollTrigger: {
    //         trigger: ".stroke",
    //         scrub: true,
    //         start: "top bottom",
    //         end: "70% top",
    //         // markers: true
    //     },
    // });


    // ncs clip path animation

    gsap.timeline({
        scrollTrigger: {
            trigger: '.ncs',
            start: '0% 80%',
            end: '100% 100%',
            scrub: 1,
            //markers: true
        }
    })
    .fromTo('.ncs .video', {'clip-path': 'inset(30%)'}, {'clip-path': 'inset(0%)', ease: 'none', duration: '1'}, 0)

    // contact text fill animation
    gsap.timeline ({
        scrollTrigger :{
            trigger: '.contact',
            start: 'top top',
            end: '+=2000',
            scrub: true,
            pin: true,
            // markers: true
        }
    })
    .to('.contact .stroke', {backgroundPositionX: 0, stagger: 1, duration: 1}, 0)







});



