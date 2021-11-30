import Slider from './modules/slider';

window.document.addEventListener('DOMContentLoaded', () => {

  const slider = new Slider('.page', '.next', '.hanson');

  slider.render();


});
