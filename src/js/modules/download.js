export default class Download {
    constructor(btn) {
    this.btn = document.querySelectorAll(btn);
    this.path = {
      path1: './assets/img/1.jpg',
      path2: './assets/img/2.jpg',
      path3: './assets/img/3.jpg',
      path4: './assets/img/4.jpg',
      path5: './assets/img/5.jpg',
      path6: './assets/img/6.jpg',
      path7: './assets/img/7.jpg',
      path8: './assets/img/8.jpg'
    }
  }

  download(path, i) {
    const hr = document.createElement("A");
    document.body.appendChild(hr);
    hr.setAttribute("href", path);
    hr.setAttribute("download", "nice-picture"+(1+i));
    hr.style.display = 'none';
    hr.click();
    hr.remove();
  }

  trigers() {
    this.btn.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        const path = "./assets/img/"+(i+1)+".jpg";
        e.stopPropagation(); //stop events on another elements of the page
        this.download(path, i);
      });
    });

  }
  init() {
    this.trigers();
  }
}
