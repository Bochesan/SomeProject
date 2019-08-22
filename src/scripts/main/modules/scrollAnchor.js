$("body").on('click', '[href*="#"]', function(e){
    e.preventDefault();
    if ($(this).attr('href') != '#') {        
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
    }
});
