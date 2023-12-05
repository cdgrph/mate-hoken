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

const splide3 = new Splide('#quoteApplication-splide', {
  type: 'loop',
  drag: false,
  keyboard: false,
  arrows: true,
  pagination: false,
  perMove: 1,
  perPage: 1,
  destroy: true,
  breakpoints: {
		1024: {
			destroy: false,
		},
  }
});

splide3.mount();