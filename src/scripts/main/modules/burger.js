function NavMenu(self, burger, menu) {
    this._self = self;
    this._burger = this._self.querySelector('.' + burger);
    this._menu = this._self.querySelector('.' + menu);

    this.init();
}

NavMenu.prototype.init = function() {
    var self = this;

    this._burger.addEventListener('click', function() {
        if (this.classList.contains('opened')) {
            this.classList.remove('opened');
            self.close();
        }
        else {
            this.classList.add('opened');
            self.open();
        }
    });
}

NavMenu.prototype.open = function() {
    var self = this;

    this._menu.classList.add('opened');
}

NavMenu.prototype.close = function() {
    var self = this;

    this._menu.classList.remove('opened');
}

new NavMenu(document.querySelector('.header'), 'menu-button', 'mainMenu');
