window.onload = function () {
    $('#preloader').delay(100).fadeOut();
    $('body').removeClass('hidden');
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
