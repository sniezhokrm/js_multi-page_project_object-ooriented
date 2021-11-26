export default class Slider {
  constructor(page, btns) {
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btns = document.querySelectorAll(btns);
    this.pageIndex = 1;
  }
  showSlides(n) {
    if (n > this.slides.length) {
      this.pageIndex = 1;
    };
    if (n < 1) {
      this.pageIndex = this.slides.length;
    }
    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });
    this.slides[this.pageIndex - 1].style.display = 'block';
  }


  plusSlide(n) {
    this.showSlides(this.pageIndex += n);
  };

  render() {

    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlide(1);
      });
      btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault;
        this.pageIndex = 1;
        this.showSlides(this.pageIndex);
      });

      this.showSlides(this.pageIndex);
    });


  }


}
