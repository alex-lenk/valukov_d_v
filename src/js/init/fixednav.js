// Определяем мобильный браузер
function MobileDetect() {
    var UA = navigator.userAgent.toLowerCase();
    return (/android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(UA)) ? true : false;
}

// Если браузер не мобильный, работаем
if (!MobileDetect()) {
    var sidebarFilter = $("#mse2_filters"),
        fixedSidebarFilter = 'fixed',
        mainNav = $(".main-nav"),
        mainNavFixed = 'main-nav-fixed';

    $window = $(window);
    // Определяем координаты верха блока навигации
    $h = sidebarFilter.offset().top;
    $h2 = mainNav.offset().top;
    $window.scroll(function () {
        // Если прокрутили скролл ниже макушки блока, включаем фиксацию
        if ($window.scrollTop() > $h) {
            sidebarFilter.addClass(fixedSidebarFilter);
        } else {
            //Иначе возвращаем всё назад
            sidebarFilter.removeClass(fixedSidebarFilter);
        }

        // Если прокрутили скролл ниже макушки блока, включаем фиксацию
        if ($window.scrollTop() > $h2) {
            mainNav.addClass(mainNavFixed);
        } else {
            //Иначе возвращаем всё назад
            mainNav.removeClass(mainNavFixed);
        }
    });
}
