export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  bindTriggers() {
    this.btns.forEach((btn, i) =>  {
      const unBlockElem = btn.closest('.module__video-item') ? btn.closest('.module__video-item') : btn;
        if (i%2 == 0) {
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

      blockElem.setAttribute("data-disabled", "true")
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
