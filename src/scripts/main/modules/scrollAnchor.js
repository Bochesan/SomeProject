$("body").on('click', '[href*="#"]', function(e){
    e.preventDefault();
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
});
