import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
 
window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.start()


// Splideのインスタンスを作成
const splide1 = new Splide('#premiumSimulation-splide1', {
  type: 'loop',
  drag: false,
  keyboard: false,
  arrows: false,
  pagination: false,
  perMove: 1,
  perPage: 1,
});

const splide2 = new Splide('#premiumSimulation-splide2', {
  type: 'fade',
  drag: false,
  pagination: true,
  rewind: true,
  autoplay: true,

});

splide2.sync(splide1)
// Splideをマウント
splide1.mount();
splide2.mount();

// // splide2の矢印ボタンにイベントリスナーを追加
// document.querySelector('#premiumSimulation-splide2 .splide__arrow--prev').addEventListener('click', function() {
//   splide1.go('<');  // splide1の前のスライドへ移動
// });

// document.querySelector('#premiumSimulation-splide2 .splide__arrow--next').addEventListener('click', function() {
//   splide1.go('>');  // splide1の次のスライドへ移動
// });