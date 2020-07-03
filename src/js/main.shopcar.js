require.config({
    paths: {
        jquery: './jquery-3.2.1.min',
        shopcar: './lib/shopcar',
        cookie: './cookie'
    }
});

require(['jquery','shopcar'], function ($,shopcar) {
    shopcar.render(function () {
        //减号
        $('.inputJian').on('click', function () {
            alert('不能再减了!')
        });

        //加号
        $('.inputJia').on('click', function () {
            alert('该道具单次最多购买1件!')
        });

        //全选
        $('.quanXuan').on('change', function () {
            $('.check').prop('checked', $(this).prop("checked"));

            if ($(this).prop('checked')) {
                zonjia();
            } else {
                $('.price').text(0.00.toFixed(2));
            }
        });

        //单选
        $('.check').on('change', function () {
            if ($('.check:checked').length === $('.check').length) {
                $('.quanXuan').prop('checked', true);
            } else {
                $('.quanXuan').prop('checked', false);
            }

            danjia();
        });

        //总价
        function zonjia() {
            let money = 0;
            $('.money').each(function (index, ele) {
                money += parseFloat($(ele).text());
            });
            $('.price').text(money.toFixed(2));
        }

        //单价
        function danjia() {
            let money = 0;
            let $tr = $("table tr:gt(0)").not("table tr:last").prevObject;
            $tr.each(function () {
                // 复选框是不是选中了
                if ($(this).find(":checkbox").prop("checked")) {
                    money += parseFloat($(this).find("td").eq(7).html());
                }
            });
            $('.price').text(money.toFixed(2));
        }

        //删除
        $('.delete').on('click', function () {
            let str = document.cookie;
            let arr = JSON.stringify(str);
            console.log(str);
            console.log(arr);
            // $(this).parent().parent().remove();
        });
    });
})