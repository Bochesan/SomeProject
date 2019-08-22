function OpenPopup(button) {
    this._button = button;
    this._popup = document.getElementById(this._button.getAttribute('data-popup'));
    this.init();
}

OpenPopup.prototype.init = function() {
    var self = this;
    if (this._popup) {
        this._close = this._popup.querySelector('.popup__close');

        this._button.addEventListener('click', function(e) {
            e.preventDefault();

            self._popup.classList.add('is-opened');
        });

        this._popup.addEventListener('click', function(event) {
            if (event.target == self._popup) {
                self._popup.classList.remove('is-opened');
            }
        });

        this._close.addEventListener('click', function() {
            self._popup.classList.remove('is-opened');
        });
    }
}

var popups = document.querySelectorAll('.js-popup');
if (popups) {
    for (var i = 0; i < popups.length; i++) {
        var item = popups[i];
        new OpenPopup(item);
    }
}
