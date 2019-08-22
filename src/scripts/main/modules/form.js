function Form(self, labels) {
    this._self = self;
    this._labels = this._self.querySelectorAll('.' + labels);

    this.init();
}

Form.prototype.init = function() {
    var self = this;

    this._self.addEventListener('submit', function(e) {
        e.preventDefault();

        var check = true;
        for (var i = 0; i < checkInputs.length; i++) {
            var item = checkInputs[i];
            item.checkValue();
            item.checkEmail();
        }
        for (var i = 0; i < self._labels.length; i++) {
            var item = self._labels[i];
            if (!item.classList.contains('done')) {
                check = false;
            }
        }

        if (check) {
            self._self.classList.add('succes');

            for (var i = 0; i < checkInputs.length; i++) {
                var item = checkInputs[i];
                item.clear();
            }

            setTimeout(function() {
                self._self.reset();
                self._self.classList.remove('succes');
            }, 4000)
        }
    });
}

function CheckInput(self) {
    this._self = self;
    this._input = this._self.querySelector('input');

    this.init();
}

CheckInput.prototype.init = function() {
    var self = this;

    this._input.addEventListener('input', function() {

        self._self.classList.remove('error');
        self._self.classList.remove('done');

        if (self._self.querySelector('.warningMsg')) {
            self._self.querySelector('.warningMsg').remove();
        }

    });
    this._input.addEventListener('focusout', function() {
        self.checkValue();
        self.checkEmail();
    });
}

CheckInput.prototype.checkValue = function() {
    var self = this;

    self._self.classList.remove('error');
    self._self.classList.remove('done');

    if (self._self.querySelector('.warningMsg')) {
        self._self.querySelector('.warningMsg').remove();
    }

    if (this._input.value == '') {
        self._self.classList.add('error');

        var warning = document.createElement('div');
        warning.className = 'warningMsg';
        warning.innerHTML = 'Please fill in the field';
        warning.setAttribute('style', 'opacity: 1;')

        self._self.appendChild(warning);
    }
    else {
        self._self.classList.add('done');
    }
}

CheckInput.prototype.checkEmail = function() {
    var self = this;

    if (this._input.value != '' && this._input.classList.contains('form__input--email')) {

        self._self.classList.remove('error');
        self._self.classList.remove('done');

        var patternEmail = /^[0-9a-z]([\.-]?\w+)*@[0-9a-z]([\.-]?[0-9a-z])*(\.[0-9a-z]{2,4})+$/;

        if (this._input.value.search(patternEmail) === 0) {
            self._self.classList.add('done');
        }
        else {
            self._self.classList.add('error');

            var warning = document.createElement('div');
            warning.className = 'warningMsg';
            warning.innerHTML = 'Please enter a valid Email';
            warning.setAttribute('style', 'opacity: 1;')

            self._self.appendChild(warning);
        }
    }
}

CheckInput.prototype.clear = function() {
    this._self.classList.remove('error');
    this._self.classList.remove('done');
}

var checkInputs = [];
var inputs = document.querySelectorAll('.form__label');
if (inputs) {
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        checkInputs.push(new CheckInput(item));
    }
}

var forms = document.querySelectorAll('.form');
if (forms) {
    for (var i = 0; i < forms.length; i++) {
        var item = forms[i];
        new Form(item, 'form__label');
    }
}
