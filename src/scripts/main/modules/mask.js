var phone =  document.querySelector('.phoneMask');
if (phone) {
    Inputmask({
        mask: "+7(999) 999-99-99",
        clearIncomplete:  true,
    }).mask(phone);
}
