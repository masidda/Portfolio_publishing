
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
        var nowScrollTop = $(window).scrollTop()

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


const h2 = document.querySelector('.intro .inner h2');

window.addEventListener('scroll', () => {
    // 텍스트 영역의 상단과 하단 위치 계산
    const intro = document.querySelector('.intro');
    const introTop = intro.getBoundingClientRect().top;
    const introBottom = intro.getBoundingClientRect().bottom;

    // 현재 스크롤 위치
    const scrollY = window.scrollY;

    // 텍스트가 영역 밖에 있는 경우 검은색으로 설정
    if (scrollY + h2.clientHeight < introTop || scrollY > introBottom - h2.clientheight) {
        h2.style.color = 'black';
    } else {
        h2.style.color = 'transparent'; // 그 외에는 투명색으로 설정
    }
});






// scrolltrigger

$(function(){
    gsap.registerPlugin(ScrollTrigger);


    // bgcolor change animation
    gsap.utils.toArray(".color").forEach((item) => {
        // data-bgColor, data-textColor 속성 값 불러오기
        let color = item.getAttribute("data-bgColor")
        // let textColor = item.getAttribute("data-textColor")

        ScrollTrigger.create({
            trigger: item,
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
            onEnter: () => gsap.to("section", {backgroundColor: color}),
            onEnterBack: () => gsap.to("section", {backgroundColor: color}),
        });
    });


    // intro h2 animation
    gsap.timeline({
        scrollTrigger: {
            trigger: '.intro',
            start: 'top 30%',
            end: 'bottom center',
            scrub: 1,
            // markers: 1
        }
    })
    .fromTo('.intro h2', {x: '40%'}, {x: '-10%', ease: 'none', duration: '1'}, 0)



    // .words text animation
    gsap.timeline({
        scrollTrigger: {
            trigger: '.words',
            start: 'top 10%',
            end: 'bottom center',
            scrub: true,
            // markers: true
        }
    })
    .to('.words .textBox p', {
        backgroundPositionX: 0,
        stagger: 1,
        duration: 1,
    }, 0)


    // journey timeline y축 이동 animation
    gsap.to('.journey', {
        yPercent: -30,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
            trigger: '.timeline li',
            start: 'top center',
            end: 'bottom 10%',
            scrub: 1,
            // markers: true
        }
    })






    // .contact text animation
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