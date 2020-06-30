let baseUrl = "http://localhost/lol.com";

define(['jquery'],function($){
    return {
        render:function(){
            let id = location.search.split("=")[1];
            $.ajax({
                type:"get",
                url:`${baseUrl}/src/php/getitem.php`,
                data:{
                    id:id
                },
                dataType:"json",
                success:function(res){
                    let pic = JSON.parse(res.pic);
                    let temp = `
                        <div class="shangpin">
                        <div class="img">
                            <img src="${baseUrl}/src/${pic[1].src}" alt="${baseUrl}/src/${pic[1].title}">
                            <p>收藏商品</p>
                            <em></em>
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
                            <a class="plus" href="#">加入购物车</a>
                            <a class="give" href="#">赠送</a>
                            <input id="btnReduce" type="button" value=" - ">
                            <input id="count" type="text" value="1" min="1" max="1">
                            <input id="btnAdd" type="button" value=" + "><br>
                        </div>
                        <div class="details">
                            <div class="details-h">
                                <a class="d" href="#">商品详情</a>
                                <a class="p" href="#">
                                    手机购买
                                    <i></i>
                                </a>
                            </div>
                            <div class="details-f">
                                <p>${res.details}</p>
                            </div>
                        </div>
                    `;
                    $('.commodity-content').html(temp);
                }
            });
        }
    }
});