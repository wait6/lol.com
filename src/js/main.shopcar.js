require.config({
    paths: {
        jquery: './jquery-3.2.1.min',
        shopcar: './lib/shopcar',
        cookie: './cookie'
    }
});

require(['shopcar'], function (shopcar) {
    shopcar.render(function () {
        $('.inputJian').on('click', function () {
            alert('不能再减了!')
        });

        $('.inputJia').on('click', function () {
            alert('该道具单次最多购买1件!')
        });

        $('.quanXuan').on('change', function () {
            $('.check').prop('checked', $(this).prop("checked"));
        });

        $('.check').on('change',function(){
            if($('.check:checked').length === $('.check').length){
                $('.quanXuan').prop('checked',true);
            }else{
                $('.quanXuan').prop('checked',false);
            }
        });

        $('.delete').on('click',function(){
            alert('1')
        })
    });
})