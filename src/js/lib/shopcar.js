let baseUrl = "http://localhost/lol.com";

define(['jquery', 'cookie'], function ($, cookie) {
    return {
        render: function (callback) {
            let shop = cookie.get('shop'); //   获取cookie数据

            if (shop) {
                shop = JSON.parse(shop);
                let idlist = shop.map(elm => elm.id).join();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/src/php/shop.php`,
                    data: {
                        idlist: idlist
                    },
                    dataType: "json",
                    success: function (res) {
                        let tempstr = `
                            <h3 class="head">商品信息</h3>
                            <table class="tableBox">
                            <thead id="thead">
                                <tr>
                                    <th class="col1">
                                        <input class="quanXuan" type="checkbox" >
                                        全选
                                    </th>
                                    <th class="col2">商品名称</th>
                                    <th class="col3">类型</th>
                                    <th class="col4">单价Q币</th>
                                    <th class="col5">期限</th>
                                    <th class="col6">数量</th>
                                    <th class="col7">优惠</th>
                                    <th class="col8">小计Q币</th>
                                    <th class="col9">操作</th>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                        `;

                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            let arr = shop.filter(val => val.id == elm.id);
                            tempstr += `
                            <tr>
                                <td class="col1">
                                    <input class="check" type="checkbox">
                                </td>
                                <td class="col2">
                                    <a class="checkbox" href="javascript:;">
                                        <img src="${baseUrl}/src/${pic[1].src}" alt="${pic[1].title}">
                                    </a>
                                    <a href="javascript:;">
                                        <span>${elm.title}</span>
                                    </a>
                                </td>
                                <td class="col3">皮肤</td>
                                <td class="col4">${elm.price}Q币</td>
                                <td class="col5">永久</td>
                                <td class="col6">
                                    <input class="input inputJian" type="button" value="－">
                                    <input class="input2" type="text" value="${arr[0].num}">
                                    <input class="input inputJia" type="button" value="+">
                                </td>
                                <td class="col7">无优惠</td>
                                <td class="col8">${(arr[0].num * elm.price).toFixed(2)}Q币</td>
                                <td class="col9">
                                    <a href="javascript:;">关注</a>
                                    <a class="delete" href="javascript:;">删除</a>
                                </td>
                            </tr>
                            `;
                        });

                        tempstr += `
                            </tbody>
                            </table>
                            <div class="discount">
                                <h3 class="head">您的优惠信息</h3>
                                <div class="discount-d">
                                    <p>优惠券总量：<span>0</span></p>
                                    <a href="#">如何获得优惠券&gt;&gt;</a>
                                </div>
                                <div class="discount-m">
                                    <span>英雄联盟周边商城火热上线</span>
                                    <a href="#">查看详情</a>
                                    <p>
                                        实付歀：
                                        <b>0.00</b>
                                        Q币
                                    </p>
                                    <input type="submit" value="提交订单">
                                </div>
                            </div>
                        `;
                        $('.commodity').html(tempstr);

                        callback && callback();
                    }
                });
            }
        }
    }
});