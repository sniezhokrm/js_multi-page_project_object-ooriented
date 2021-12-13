import Slider from './slider';

export default class MainSlider extends Slider {
  constructor(btns, prev, next) {
    super(btns, prev, next);
  }
  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    try {
      this.hanson.style.opacity = '0';

      if (n == 3) {
        this.hanson.classList.add('animated');
        this.hanson.style.zIndex = '10';
        setTimeout(() => {
          this.hanson.style.bottom = '80px';
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    } catch (e) {}


    for (var slide of this.slides) {
      slide.style.display = 'none';
    }

    this.slides[this.slideIndex - 1].style.display = 'block';

  }


  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  bindTriggers() {

    this.btns.forEach(item => {
      item.addEventListener('click', (e) => {
        this.plusSlides(1);
      });

      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.showSlides(this.slideIndex);

  }

  trigerArrows(arrows) {
    arrows.forEach((arrow) => {
      arrow.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        if (arrow.getAttribute("class").includes('prev')) {
          this.plusSlides(-1);
        }
        if (arrow.getAttribute("class").includes('next')) {
          this.plusSlides(1);
        }

      });
    });
  }


  render() {
    if (this.container) {
      try {
        this.hanson = document.querySelector('.hanson');
      } catch (e) {}
      this.bindTriggers();
      this.trigerArrows(this.prev);
      this.trigerArrows(this.next);
    }
  }
};
