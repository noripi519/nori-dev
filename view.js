class Inview {
  constructor() {
      this.DOM = {};
      this.DOM.href = document.querySelector("#mobile-menu a");
      this.DOM.container = document.querySelector("#global-container");
      // this.eventType = this._getEventType();
      this._addEvent();
  }

  // _getEventType() {
  //   const isTouchCapable =
  //     "ontouchstart" in window ||
  //     (window.DocumentTouch && document instanceof window.DocumentTouch)
  //     navigator.maxTouchPoints > 0 ||
  //     window.navigator.msMaxTouchPoints > 0;

  //   return isTouchCapable ? "touchstart" : "click";
  // }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.href.addEventListener('click', this._toggle.bind(this));
  }
}

new Inview();