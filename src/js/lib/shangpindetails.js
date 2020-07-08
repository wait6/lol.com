let baseUrl = "http://localhost/lol.com";

define(['jquery', 'cookie'], function ($, cookie) {
    return {
        render: function (callback) {
            let id = location.search.split("=")[1];
            $.ajax({
                type: "get",
                url: `${baseUrl}/src/php/getitem.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function (res) {
                    let pic = JSON.parse(res.pic);
                    let temp = `
                        <div class="shangpin">
                        <div class="img">
                            <img src="${baseUrl}/src/${pic[1].src}" alt="${baseUrl}/src/${pic[1].title}">
                            <p>收藏商品</p>
                            <a class="fdj" href="javascript:;"></a>
                            <div class="bigImgBox none">
                                <img class="bigImg" src="${baseUrl}/src/${pic[1].src}" alt="${baseUrl}/src/${pic[1].title}">
                            </div>
                            <a href="javascript:;" class="close none"></a>
                        </div>
                        <div class="price">
                            <h3>${res.title}</h3>
                            <div class="bg">
                                <p>Q币价：$${res.price}Q币</p>
                                <p>微信价：<span>￥${res.weixin}</span></p>
                            </div>
                            <p>期限：永久</p>
                        </div>
                        </div>
                        <div class="input">
                            <a class="plus" href="javascript:;">加入购物车</a>
                            <a class="give" href="javascript:;">赠送</a>
                            <input id="btnReduce" type="button" value=" - ">
                            <input id="count" type="text" value="1" min="1" max="1">
                            <input id="btnAdd" type="button" value=" + "><br>
                        </div>
                        <div class="details">
                            <div class="details-h">
                                <a class="d" href="javascript:;">商品详情</a>
                                <a class="p" href="javascript:;">
                                    手机购买
                                    <i></i>
                                    <img class="ewm none" src="../images/code-index.png">
                                </a>
                            </div>
                            <div class="details-f">
                                <p>${res.details}</p>
                            </div>
                        </div>
                    `;
                    $('.commodity-content').html(temp);

                    callback && callback(res.id, res.price);
                }
            });
        },
        //获取cookie
        addItem: function (id, price, num) {
            let shop = cookie.get('shop');
            let product = {
                id: id,
                price: price,
                num: num
            }

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = [];
                shop.push(product);
            }

            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
});