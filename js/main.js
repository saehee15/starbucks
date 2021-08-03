
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window, scrollY);
  if (window, scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// .throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function(fadeEL, index){
    // gasp.to(요소, 지속시간, 옵션);
    gsap.to(fadeEL, 1, {
        delay: (index + 1) *.7, 
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
direction: 'vertical',
autoplay: true, //자동재생
loop: true, //반복
});


new Swiper('.promotion .swiper-container', {
slidesPerView: 3, //한번에 보여줄 슬라이드 개수
spaceBetween: 10, //슬라이드 사이 여백
centeredSlides: true, //1번 슬라이드가 가운데 보이기
loop: true,
autoplay: {
    delay: 5000 //5초
},
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
  pagination: {
    el:'.promotion .swiper-pagination',
    clickable: true
  },
});


new Swiper('.awards .swiper-container', {
autoplay: true,
loop: true,
spaceBetween: 30, //여백 
slidesPerView: 5, //하나의 하나에 몇개의 슬라이드가 보일건지
navigation: {
  prevEl: '.awards .swiper-prev',
  nextEl: '.awards .swiper-next'
}
});






const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
 isHidePromotion = !isHidePromotion //!가 붙여있으면 반대로 해주세요, 즉 !이즈하이드프로모션은 ture
if(isHidePromotion) {
//숨김처리
promotionEl.classList.add('hide');
} else {
//보임처리
promotionEl.classList.remove('hide');
}
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1, //-1은 무한반복,js에서 지원하는 값
      yoyo: true, //한번 재생된 애니메이션 다시 뒤로 재생
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
 new ScrollMagic
  .Scene({
    triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면 중간이 .5이고 .8이면은 절반보다 밑이겠지? .8에 걸리면 setClassToggle 실행 
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
}); 

