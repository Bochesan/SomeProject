function CheckInput(self) {
    this._self = self;
    this._input = this._self.querySelector('.form__input');

    this.init();
}

CheckInput.prototype.init = function() {
    var self = this;

    this._input.addEventListener('input', function() {
        self.clean();
    });

    this._input.addEventListener('focusout', function() {
        this.value = this.value.trim();

        self.valueInput();
        self.valueEmail();

        if (this.value != '') {
            self._self.classList.add('value');
        }
    });

}

CheckInput.prototype.valueInput = function() {
    var self = this;
    this.clean();

    if (this._input.value == '') {
        self._self.classList.add('error');

        var warning = document.createElement('div');
        warning.className = 'warningMsg';
        warning.innerHTML = 'Please fill in the field';
        warning.setAttribute('style', 'opacity: 1;');

        self._self.appendChild(warning);
    }
    else {
        self._self.classList.add('done');
    }
}

CheckInput.prototype.valueEmail = function() {
    var self = this;

    if (this._input.classList.contains('form__input--email')) {
        this.clean();
        var patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (this._input.value.search(patternEmail) === 0) {
            this._self.classList.add('done');
        }
        else {
            this._self.classList.add('error');
            if (this._input.value != '') {
                this._self.classList.add('value');
            }

            var warning = document.createElement('div');
            warning.className = 'warningMsg';
            warning.innerHTML = 'Please enter a valid Email';
            warning.setAttribute('style', 'opacity: 1;');

            this._self.appendChild(warning);
        }
    }
}

CheckInput.prototype.clean = function() {
    var self = this;

    this._self.classList.remove('error');
    this._self.classList.remove('done');
    this._self.classList.remove('value');
    if (self._self.querySelector('.warningMsg')) {
        self._self.removeChild(self._self.querySelector('.warningMsg'));
    }
}




function Form(self) {
    this._self = self;
    this._labels = this._self.querySelectorAll('.form__label');
    this._labelsArr = [];
    this._submited = false;

    this.init();
}

Form.prototype.init = function() {
    var self = this;

    for (var i = 0; i < self._labels.length; i++) {
        var item = self._labels[i];

        self._labelsArr.push(new CheckInput(item));
    }

    this._self.addEventListener('submit', function(e) {
        e.preventDefault();
        self._submited = true;

        for (var i = 0; i < self._labelsArr.length; i++) {
            var item = self._labelsArr[i];

            item.valueInput();
            item.valueEmail();

        }

        for (var i = 0; i < self._labels.length; i++) {
            var item = self._labels[i];
            if (item.classList.contains('error')) {
                self._submited = false;
            }
        }
        if (self._submited) {
            self.submit();
        }
    });
}

Form.prototype.submit = function() {
    var self = this;
    // for Ajax
    self._self.classList.add('succes');

    setTimeout(function() {
        self._self.reset();
        self._self.classList.remove('succes');
        for (var i = 0; i < self._labelsArr.length; i++) {
            var item = self._labelsArr[i];
            item.clean();
        }
    }, 4000)
}

var forms = document.querySelectorAll('.form');
if (forms) {
    for (var i = 0; i < forms.length; i++) {
        var item = forms[i];
        new Form(item);
    }
}
