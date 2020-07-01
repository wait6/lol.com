require.config({
    paths: {
        jquery: './jquery-3.2.1.min',
        shangpindetails: './lib/shangpindetails',
        cookie: './cookie'
    },
    shim: {}
});

require(['jquery', 'shangpindetails'], function ($, shangpindetails) {
    shangpindetails.render(function (id, price) {
        $('.plus').on('click', function () {
            shangpindetails.addItem(id, price, $('#count').val())
        })
    });
});