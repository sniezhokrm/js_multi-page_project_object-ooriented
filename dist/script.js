/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliders_mainSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders/mainSlider */ "./src/js/modules/sliders/mainSlider.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_sliders_miniSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliders/miniSlider */ "./src/js/modules/sliders/miniSlider.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/download */ "./src/js/modules/download.js");
/* harmony import */ var _modules_customizator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/customizator */ "./src/js/modules/customizator.js");








window.addEventListener('DOMContentLoaded', () => {
  const panel = new _modules_customizator__WEBPACK_IMPORTED_MODULE_7__["default"]();
  panel.render();
  const slider = new _modules_sliders_mainSlider__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.page',
    btns: '.next'
  });
  slider.render();
  const sliderPage = new _modules_sliders_mainSlider__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.moduleapp',
    btns: '.next'
  });
  sliderPage.render();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__["default"]('.showup .play', '.overlay').init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__["default"]('.module__video-item .play', '.overlay').init(); //  new VideoPlayer('.video .play', '.overlay').init(); not work, mistake with player.stop();

  const showUpSlider = new _modules_sliders_miniSlider__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();
  const showUpSecondPageSlider = new _modules_sliders_mainSlider__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.moduleapp',
    prev: '.module__info-controls .prev',
    next: '.module__info-controls .next'
  });
  showUpSecondPageSlider.render();
  const modulesSlider = new _modules_sliders_miniSlider__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  modulesSlider.init();
  const feedSlider = new _modules_sliders_miniSlider__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"]('.officernew', '.officerold', '.officer__card-item').init();
  new _modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"]('.form').init();
  new _modules_accordion__WEBPACK_IMPORTED_MODULE_5__["default"]('.plus__content', '.msg').init();
  new _modules_download__WEBPACK_IMPORTED_MODULE_6__["default"]('.download').init();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
class Accordion {
  constructor(btn, elem) {
    this.btn = document.querySelectorAll(btn);
    this.elem = document.querySelectorAll(elem);
    this.newImg = document.createElement("img");
  }

  hideElem() {
    this.elem.forEach(elem => {
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
        }

        ;
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

/***/ }),

/***/ "./src/js/modules/customizator.js":
/*!****************************************!*\
  !*** ./src/js/modules/customizator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Customizator; });
class Customizator {
  constructor() {
    this.btnBlock = document.createElement('div');
    this.colorPicker = document.createElement('input');
    this.clear = document.createElement('div');
    this.scale = localStorage.getItem('scale') || 1;
    this.color = localStorage.getItem('color') || '#ffffff';
    this.btnBlock.addEventListener('click', e => this.onScaleChange(e));
    this.colorPicker.addEventListener('input', e => this.onColorChange(e));
    this.clear.addEventListener('click', () => this.reset());
  }

  onScaleChange(e) {
    const body = document.querySelector('body');

    if (e) {
      this.scale = +e.target.value.replace(/x/g, "");
    }

    const recursy = element => {
      element.childNodes.forEach(node => {
        if (node.nodeName === '#text' && node.nodeValue.replace(/\s+/g, "").length > 0) {
          if (!node.parentNode.getAttribute('data-fz')) {
            let value = window.getComputedStyle(node.parentNode, null).fontSize;
            node.parentNode.setAttribute('data-fz', +value.replace(/px/g, ""));
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + "px";
          } else {
            node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * this.scale + "px";
          }
        } else {
          recursy(node);
        }
      });
    };

    recursy(body);
    localStorage.setItem('scale', this.scale);
  }

  onColorChange(e) {
    const body = document.querySelector('body');
    body.style.backgroundColor = e.target.value;
    localStorage.setItem('color', e.target.value);
  }

  setBgColor() {
    const body = document.querySelector('body');
    body.style.backgroundColor = this.color;
    this.colorPicker.value = this.color;
  }

  injectStyle() {
    const style = document.createElement('style');
    style.innerHTML = `
            .panel {
                display: flex;
                justify-content: space-around;
                align-items: center;
                position: fixed;
                top: 10px;
                right: 0;
                border: 1px solid rgba(0,0,0, .2);
                box-shadow: 0 0 20px rgba(0,0,0, .5);
                width: 300px;
                height: 60px;
                background-color: #fff;

            }

            .scale {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100px;
                height: 40px;
            }

            .scale_btn {
                display: block;
                width: 40px;
                height: 40px;
                border: 1px solid rgba(0,0,0, .2);
                border-radius: 4px;
                font-size: 18px;
            }

            .color {
                width: 40px;
                height: 40px;
            }

            .clear {
                font-size: 20px;
                cursor: pointer;
            }
        `;
    document.querySelector('head').appendChild(style);
  }

  reset() {
    localStorage.clear();
    this.scale = 1;
    this.color = '#ffffff';
    this.setBgColor();
    this.onScaleChange();
  }

  render() {
    this.injectStyle();
    this.setBgColor();
    this.onScaleChange();
    let scaleInputS = document.createElement('input'),
        scaleInputM = document.createElement('input'),
        panel = document.createElement('div');
    panel.append(this.btnBlock, this.colorPicker, this.clear);
    this.clear.innerHTML = "&times";
    this.clear.classList.add('clear');
    scaleInputS.classList.add('scale_btn');
    scaleInputM.classList.add('scale_btn');
    this.btnBlock.classList.add('scale');
    this.colorPicker.classList.add('color');
    scaleInputS.setAttribute('type', 'button');
    scaleInputM.setAttribute('type', 'button');
    scaleInputS.setAttribute('value', '1x');
    scaleInputM.setAttribute('value', '1.5x');
    this.colorPicker.setAttribute('type', 'color');
    this.colorPicker.setAttribute('value', '#ffffff');
    this.btnBlock.append(scaleInputS, scaleInputM);
    panel.classList.add('panel');
    document.querySelector('body').append(panel);
  }

}

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(oldOfficer, newOfficer, items) {
    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
    } catch (e) {}

    this.newCounter = 0;
    this.oldCounter = 0;
  }

  bindTriggers(container, items, counter) {
    container.querySelector('.plus').addEventListener('click', () => {
      items[counter].classList.add('animated');
      items[counter].classList.add('fadeIn');

      if (counter !== items.length - 2) {
        items[counter].style.display = 'flex';
        counter++;
      } else {
        items[counter].style.display = 'flex';
        items[items.length - 1].remove();
      }
    });
  }

  hideItems(items) {
    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }

  init() {
    try {
      this.hideItems(this.oldItems);
      this.hideItems(this.newItems);
      this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
      this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    } catch (e) {}
  }

}
;

/***/ }),

/***/ "./src/js/modules/download.js":
/*!************************************!*\
  !*** ./src/js/modules/download.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Download; });
class Download {
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
    };
  }

  download(path, i) {
    const hr = document.createElement("A");
    document.body.appendChild(hr);
    hr.setAttribute("href", path);
    hr.setAttribute("download", "nice-picture" + (1 + i));
    hr.style.display = 'none';
    hr.click();
    hr.remove();
  }

  trigers() {
    this.btn.forEach((btn, i) => {
      btn.addEventListener('click', e => {
        const path = "./assets/img/" + (i + 1) + ".jpg";
        e.stopPropagation(); //stop events on another elements of the page

        this.download(path, i);
      });
    });
  }

  init() {
    this.trigers();
  }

}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: '????????????????...',
      success: '??????????????! ?????????? ???? ?? ???????? ????????????????!',
      failure: '??????-???? ?????????? ???? ??????...',
      spinner: 'assets/img/spinner.gif',
      ok: 'assets/img/ok.png',
      fail: 'assets/img/fail.png'
    };
    this.path = 'assets/question.php';
  }

  clearInputs() {
    this.inputs.forEach(item => {
      item.value = '';
    });
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');
    mailInputs.forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    });
  }

  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    function createMask(event) {
      let matrix = '+1 (___) ___-____',
          i = 0,
          def = matrix.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }

  init() {
    this.checkMailInputs();
    this.initMask();
    this.forms.forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault();
        let statusImg = document.createElement('img');
        statusImg.setAttribute('src', this.message.spinner);
        statusImg.classList.add('animated', 'fadeInUp');
        item.parentNode.appendChild(statusImg);
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                    height: 20px;
                `;
        item.parentNode.appendChild(statusMessage);
        setTimeout(() => {
          item.style.display = 'none';
        }, 400);
        statusMessage.textContent = this.message.loading;
        const formData = new FormData(item);
        this.postData(this.path, formData).then(res => {
          console.log(res);
          statusImg.setAttribute('src', this.message.ok);
          statusMessage.textContent = this.message.success;
        }).catch(() => {
          statusImg.setAttribute('src', this.message.fail);
          statusMessage.textContent = this.message.failure;
        }).finally(() => {
          this.clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp');
          }, 113000);
        });
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  bindTriggers() {
    this.btns.forEach((btn, i) => {
      const unBlockElem = btn.closest('.module__video-item') ? btn.closest('.module__video-item') : btn;

      if (i % 2 == 0) {
        unBlockElem.setAttribute("data-disabled", "true");
      }

      btn.addEventListener('click', () => {
        this.activeBtn = btn;

        if (unBlockElem.getAttribute("data-disabled") === "true") {
          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex';

            if (this.path !== btn.getAttribute('data-url')) {
              this.path = btn.getAttribute('data-url');
              this.player.loadVideoById({
                videoId: this.path
              });
            }
          } else {
            this.path = btn.getAttribute('data-url');
            this.createPlayer(this.path);
          }
        }
      });
    });
  }

  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    });
    this.overlay.style.display = 'flex';
  }

  onPlayerStateChange(state) {
    try {
      const blockElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
      const blockedBtn = this.activeBtn.querySelector('svg').cloneNode(true);

      if (state.data == 0) {
        if (blockElem.querySelector('.play__circle').classList.contains('closed')) {
          blockElem.querySelector('.play__circle').classList.remove('closed');
          blockElem.querySelector('.play__text').classList.remove('attention');
          blockElem.querySelector('.play__text').textContent = "play video";
          blockElem.querySelector('svg').remove();
          blockElem.querySelector('.play__circle').appendChild(blockedBtn);
          blockElem.style.opacity = '1';
          blockElem.style.filter = 'none';
          blockElem.setAttribute("data-disabled", "true");
        }
      }
    } catch (e) {}
  }

  init() {
    if (this.btns.length > 0) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTriggers();
      this.bindCloseBtn();
    }
  }

}

/***/ }),

/***/ "./src/js/modules/sliders/mainSlider.js":
/*!**********************************************!*\
  !*** ./src/js/modules/sliders/mainSlider.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    } catch (e) {} //  this.slides.forEach((slide) => {
    //  slide.style.display = 'none';
    //});


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
      item.addEventListener('click', e => {
        this.plusSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex);
  }

  trigerArrows(arrows) {
    arrows.forEach(arrow => {
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

}
;

/***/ }),

/***/ "./src/js/modules/sliders/miniSlider.js":
/*!**********************************************!*\
  !*** ./src/js/modules/sliders/miniSlider.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
    this.numBtn = 1;
  }

  decorizeSlides() {
    for (var slide of this.slides) {
      slide.classList.remove(this.activeClass);

      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }

      if (!this.slides[0].closest('button')) {
        this.slides[0].classList.add(this.activeClass);
      }

      if (this.animate) {
        this.slides[0].querySelector('.card__title').style.opacity = '1';
        this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
      }
    }
  }

  nextSlide() {
    for (let i = 0; i < this.slides.length - 1; i++) {
      if (this.slides[1].tagName !== "BUTTON") {
        this.container.appendChild(this.slides[0]);
        this.decorizeSlides();
      } else {
        for (let i = 0; i < this.numBtn; i++) {
          this.container.appendChild(this.slides[0]);
          this.decorizeSlides();
        }
      }

      break;
    }
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
    this.next.forEach(next => {
      next.addEventListener('click', () => {
        this.nextSlide();
      });
    });
    this.prev.forEach(prev => {
      prev.addEventListener('click', () => this.prevSlide());
    });
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
      this.autoPlaySlide();

      for (let i = 0; i < this.slides.length; i++) {
        //check for btn(not sliders) in slider
        if (this.slides[i].tagName === "BUTTON") {
          this.numBtn++;
        }
      }
    } catch (e) {}

    ;
  }

}
;

/***/ }),

/***/ "./src/js/modules/sliders/slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/sliders/slider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor() {
    let {
      container = null,
      btns = null,
      next = null,
      prev = null,
      activeClass = '',
      animate,
      autoplay
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.container = document.querySelector(container);

    try {
      this.slides = this.container.children;
    } catch (err) {}

    ;
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelectorAll(prev);
    this.next = document.querySelectorAll(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map