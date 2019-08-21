function ScrollAnimate(self) {
    this._self = self;
    this._scrollPoint;
    this._classAnimate = this._self.getAttribute('data-animation');

    this.init();
}

ScrollAnimate.prototype.init = function() {
    var self = this;

    function show() {
        var scrolled = this.pageYOffset;

        self._scrollPoint = parseInt(self._self.getBoundingClientRect().top);
        if (scrolled + window.innerHeight / 1.3 >= (self._scrollPoint + scrolled)) {
            self.animation();
        }
    }

    window.addEventListener("scroll", function() {
        show();
    });
    window.addEventListener("touchmove", function() {
        show();
    });
}

ScrollAnimate.prototype.animation = function() {
    if (typeof this._callBack === "function") {
        this._callBack.call(this._obj);
    } else {
        this._self.classList.add(this._classAnimate);
    }
}

var animateElements = document.querySelectorAll(".scrollAnimate");
if (animateElements) {
    for(var i = 0; i < animateElements.length; i++) {
        new ScrollAnimate(animateElements[i]);
    }
}
