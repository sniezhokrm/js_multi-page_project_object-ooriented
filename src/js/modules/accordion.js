export default class Accordion {
  constructor(btn, elem) {
      this.btn = document.querySelectorAll(btn);
      this.elem = document.querySelectorAll(elem);
      this.newImg = document.createElement("img");
  }

  hideElem() {
    this.elem.forEach((elem) => {
      elem.style.display = "none";
      elem.classList.add("animated");
    });
  }
  triggersBtn() {
    this.btn.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (!btn.querySelector('.img-minus')) {
          this.newImg.style.display = "none";
          this.newImg.style.width = "100%";
          this.newImg.setAttribute("SRC", './assets/icons/minus.png');
          this.newImg.classList.add('img-minus');
          btn.appendChild(this.newImg);
        };
        this.elem[i].classList.remove("fadeIn", "fadeOut");
        if (window.getComputedStyle(this.elem[i]).display === "none") {
          this.elem[i].style.display = "block";
          btn.querySelector('SVG').style.display = "none";
          this.newImg.style.display = "block";
          this.elem[i].classList.add("fadeIn");
        } else {
          this.elem[i].classList.add("fadeOut");
          this.elem[i].style.display = "none";
          btn.querySelector('SVG').style.display = "block";
          this.newImg.style.display = "none";
        }
      });
    });
  }

  init() {
    if (this.elem.length > 0) {
      this.hideElem();
      this.triggersBtn();
    }

  }
}
