export default class Difference {
  constructor(oldOfficer, newOfficer, items) {

    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
    } catch (e) {

    }
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
  };
};
