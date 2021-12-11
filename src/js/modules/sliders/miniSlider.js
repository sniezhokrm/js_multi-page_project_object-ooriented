import Slider from './slider';

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorizeSlides() {
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });

    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    for (var i = 0; i < this.slides.length - 1; i++) {
      if (this.slides[i].tagName !== "BUTTON") {
        let active = this.slides[i];
        this.container.appendChild(this.slides[0]);
        this.decorizeSlides();
      }
      break;
    }
    /*  if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") { - not good
        this.container.appendChild(this.slides[0]); // Slide
        this.container.appendChild(this.slides[1]); // Btn
        this.container.appendChild(this.slides[2]); // Btn
        this.decorizeSlides();
      } else if (this.slides[1].tagName == "BUTTON") {
        this.container.appendChild(this.slides[0]); // Slide
        this.container.appendChild(this.slides[1]); // Btn
        this.decorizeSlides();
      } else {
        this.container.appendChild(this.slides[0]);
        this.decorizeSlides();
      }*/
  }

  prevSlide() {
    for (let i = this.slides.length - 1; i > 0; i--) {
      if (this.slides[i].tagName !== "BUTTON") {
        let active = this.slides[i];
        this.container.insertBefore(active, this.slides[0]);
        this.decorizeSlides();
        break;
      }
    }
  }
  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSlide());

    this.prev.addEventListener('click', () => this.prevSlide());
  }

  autoPlaySlide() {
    if (this.autoplay) {
      let autoSlide = setInterval(() => this.nextSlide(), 2000);
      this.container.addEventListener('mouseover', () => {
        clearInterval(autoSlide);
      });
      this.container.addEventListener('mouseout', () => {
        autoSlide = setInterval(() => this.nextSlide(), 2000);
      });
    }

  }


  init() {
    try {
      this.container.style.cssText = `
              display: flex;
              flex-wrap: wrap;
              overflow: hidden;
              align-items: flex-start;
          `;
          this.bindTriggers();
          this.decorizeSlides();
          this.autoPlaySlide()
    } catch (e) {};
  };
};
