let wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       50,          // default
    mobile:       true,       // default
    live:         true        // default
})
wow.init();


//Код jQuery, установливающий маску для ввода телефона элементу input
//1. После загрузки страницы, когда все элементы будут доступны выполнить...
$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#f_phone").mask("+7(999) 999-9999");
});

//Скрипт для плавной прокрутки страницы при клике на стрелку в  блоке header
$(function() { 
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        
    var target = this.hash,
    $target = $(target);
    
    $('html, body').stop().animate({
    'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
    window.location.hash = target;
    });
    });
});
