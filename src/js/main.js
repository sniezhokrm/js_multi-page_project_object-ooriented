import MainSlider from './modules/sliders/mainSlider';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/sliders/miniSlider';
import Difference from './modules/difference';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({
    container: '.page',
    btns: '.next'
  });
  slider.render();

  const sliderPage = new MainSlider({
    container: '.moduleapp',
    btns: '.next'
  });
  sliderPage.render();


  new VideoPlayer('.showup .play', '.overlay').init();
  new VideoPlayer('.module__video-item .play', '.overlay').init();
//  new VideoPlayer('.video .play', '.overlay').init();

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();

  const showUpSecondPageSlider = new MainSlider({
    container: '.moduleapp',
    prev: '.prevmodule',
    next: '.nextmodule'
  });
  showUpSecondPageSlider.render();


  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();

  new Difference('.officernew', '.officerold', '.officer__card-item').init();

  new Forms('.form').init();

});
