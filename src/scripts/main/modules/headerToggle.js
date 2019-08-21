var header = document.querySelector("header");
var main = document.querySelector("main");

var headerToggle = new Headroom(header,{
            onTop: function() {
                //main.style.paddingTop = "0px";
            },
            onNotTop: function() {
                //main.style.paddingTop = $(header).css('height');
            }
        });
headerToggle.init();
