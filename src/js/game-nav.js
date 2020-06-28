$('.submenu').on('mouseover', function () {
    setTimeout(() => {
        $('.list-game').removeClass('none');
    }, 800);
});

$('.submenu').on('mouseout', function () {
    setTimeout(() => {
        $('.list-game').addClass('none');
    }, 800);
});

$('.list-game').on('mouseover', function () {
    setTimeout(() => {
        $('.list-game').removeClass('none');
    }, 500);
});

$('.list-game').on('mouseout', function () {
    setTimeout(() => {
        $('.list-game').addClass('none');
    }, 500);
});