let baseUrl = "http://localhost/lol.com";

define(['jquery'], function ($) {
    return {
        render: function () {
            $.ajax({
                type: "get",
                url: `${baseUrl}/src/php/getall.php`,
                dataType: "json",
                success: function (res) {
                    let temp = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        temp += `
                            <dl>
                                <dt>
                                    <a href="${baseUrl}/src/html/shangpindetails.html?id=${elm.id}">
                                        <img src="${baseUrl}/src/${pic[0].src}" alt="${baseUrl}/src/${pic[0].title}">
                                    </a>
                                </dt>
                                <dd>
                                    <a class="cw-list1" href="#">${elm.title}</a>
                                    <p class="cw-list2">Q币价： <span>${elm.price} Q币</span></p>
                                    <p class="cw-list2">微信价： <span>￥${elm.weixin}</span></p>
                                    <a class="cw-list3" href="${baseUrl}/src/html/shangpindetails.html?id=${elm.id}">立即购买</a>
                                </dd>
                            </dl>`
                    });
                    $('.content-box').html(temp)
                }
            });
        }
    }
});