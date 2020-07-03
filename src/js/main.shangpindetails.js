require.config({
    paths: {
        jquery: './jquery-3.2.1.min',
        shangpindetails: './lib/shangpindetails',
        cookie: './cookie'
    }
});

require(['jquery', 'shangpindetails'], function ($, shangpindetails) {
    shangpindetails.render(function (id, price) {
        $('.plus').on('click', function () {
            alert('添加成功');
            shangpindetails.addItem(id, price, $('#count').val())
        });
        $('.close').on('click',function(){
            $('.bigImgBox').addClass('none');
            $('.close').addClass('none');
        });
        $('.fdj').on('click', function () {
            $('.bigImgBox').removeClass('none');
            $('.close').removeClass('none')
        });
    });
});