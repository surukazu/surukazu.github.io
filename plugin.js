'use strict';

{
  var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1.5, // １度に表示するスライド数
    centeredSlides: true, //現在のスライドを中央に表示
    spaceBetween: 20, // スライド同士の余白
  
    // 自動再生
    autoplay: {
      delay: 5000 // 次のスライドに切り替わる時間の設定（ミリ秒:1000=1秒）
    },

    breakpoints: {
      1001: {
        slidesPerView: 3.75, // １度に表示するスライド数
        spaceBetween: 56, // スライド同士の余白
      } 
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

}

