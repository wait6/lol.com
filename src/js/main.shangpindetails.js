require.config({
    paths: {
        jquery: './jquery-3.2.1.min',
        shangpindetails: './lib/shangpindetails',
        cookie: './cookie'
    }
});

require(['jquery', 'shangpindetails'], function ($, shangpindetails) {
    shangpindetails.render(function (id, price) {
        //添加购物车，保存cookie
        $('.plus').on('click', function () {
            alert('添加成功');
            shangpindetails.addItem(id, price, $('#count').val())
        });

        //放大
        $('.close').on('click',function(){
            $('.bigImgBox').addClass('none');
            $('.close').addClass('none');
        });

        //缩小
        $('.fdj').on('click', function () {
            $('.bigImgBox').removeClass('none');
            $('.close').removeClass('none')
        });

        //二维码
        $('.p').on('mouseover',function(){
            $('.ewm').removeClass('none');
        });
        $('.p').on('mouseout',function(){
            $('.ewm').addClass('none');
        });
    });
});