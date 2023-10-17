
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




//scrollTrigger
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    const text = gsap.timeline();
    text.to(".intro h2", {scale: 60, duration: 2})
        .to(".intro h2", {autoAlpha: 0})

    ScrollTrigger.create({
        animation: text,
        trigger: ".intro",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true, 
        anticipatePin: 1,
        markers: true
    });
});