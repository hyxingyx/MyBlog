
//Vue占位变量
var HomeVal = {

    customDots: [
        {
            active: true
        },
        {
            active: false
        },
        {
            active: false
        }
        
    ]
}

    var returnVal;//转换为json格式的变量

    // ajaxRequest = function (RequestAPI) {
    //     var str_UrlVal = "http://localhost:53674/BlogServerAPI.asmx/" + RequestAPI;
    //     $.ajax({
    //         async: false,//异步:(默认true:会造成程序加载完后,再返回请求的数据导致加载时没有数据)
    //         type: "POST", //访问WebService使用Post方式请求
    //         contentType: "application/xml;charset=utf-8", //WebService 会返回xml类型
    //         url: str_UrlVal, //调用WebService
    //         data: "{}", //传参数
    //         dataType: 'xml',
    //         beforeSend: function (x) { x.setRequestHeader("Content-Type", "application/xml; charset=utf-8"); },
    //         error: function (x, e) {

    //         },
    //         success: function (response) { //回调函数，result，返回值
    //             var json = $(response).text();
    //             returnVal = JSON.parse(json);//数据转换
    //         }
    //     });
    // }


    //Vue
    var HomeVue = new Vue({
        el: '#HomeVue',
        data: HomeVal
    })


    // Vue.component("custom_dot", {
    //     template: `AAAA
    //     // <del v-if="active">
    //     // <li class="custom_dot custom_dot_home_slider active"><span></span></li>
    //     // </del>
    //     // <span v-else>
    //     // <li class="custom_dot custom_dot_home_slider"><span></span></li>
    //     // </span>
    // `,
    //     props: ["active"]
    //     // data() {
    //     //     return {
    //     //         isDone: this.done
    //     //     };
    //     // },
    //     // methods: {
    //     //     toggle(e) {
    //     //         this.isDone = !this.isDone;
    //     //     }
    //     // }
    // });











