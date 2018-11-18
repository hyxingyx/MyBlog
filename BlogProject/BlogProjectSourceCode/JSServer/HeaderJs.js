// Vue.component('MainNavLi-item',{
//    template:'<li><a >{{MainName}} </a></li> ',
//    props:['MainName']
// })

// var MainNav = {
//     MainNavActive: {
//         MainName: '知识分享',
//         MainHref: '#',
//         MainClass: 'active'
//     },
//     MainNavLis: [
//         {
//             MainName: '知识分享',
//             MainHref: '#'
//         },
//         {
//             MainName: '摄影分享',
//             MainHref: '#'
//         },
//         {
//             MainName: '音乐分享',
//             MainHref: '#'
//         },
//         {
//             MainName: '旅行分享',
//             MainHref: '#'
//         }]
// }



//定义变量
var MainNav = {
    MainNavActive: {
        MainName: '',
        MainHref: '',
        MainClass: ''
    },
    MainNavLis: [
        {
            MainName: '',
            MainHref: ''
        }],
    customDots: [
        {
            alwaysbackgroundimg: "background-image:url(images/home_slider.jpg)",
            categoryhref: "category.html",
            categorycontent: "sport",
            titlehref: "post.html",
            titlecontent: "How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
            linkhref: "post.htm",
            linkcontent: "Continue Reading",
            similarposts: [{
                similarPostHref: "post.html",
                similarPostContent: "How Did van Gogh’s Turbulent Mind Depict One of the Most1"
            },
            {
                similarPostHref: "post.html",
                similarPostContent: "How Did van Gogh’s Turbulent Mind Depict One of the Most1"
            }],
            done: true
        }
    ],
    bolgsections:[{
        section_title: "Don't Miss",
        tags: [{
            activehref: "category.html",
            activecontent: "all1",
            tagsothers: [{
                tagshref: "category.html",
                tagscontent: "style hunter"
            },
            {
                tagshref: "category.html",
                tagscontent: "style hunter"
            }]
        }],
        more: [{
            moreexist: false,
            moreothers: [{
                morehref: "category.html",
                morecontent: "style hunter"
            },
            {
                morehref: "category.html",
                morecontent: "style hunter"
            }]
        }],
        gridclearfixs: [{
            clearfix_class: "card card_largest_with_image grid-item",
            gridclearfix_src: "images/post_1.jpg",
            gridclearfix_alt: "https://unsplash.com/@cjtagupa",
            gridclearfix_titlehref: "post.html",
            gridclearfix_titlecontent: "AAAAAHow Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
            gridclearfix_textcontent: "Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...",
            gridclearfix_metahref: "#",
            gridclearfix_metahrefcontent: "Katy Liu",
            gridclearfix_metacontent: "Sep 29, 2017 at 9:48 am"
        },
        {
            clearfix_class: "card card_default card_small_no_image grid-item",
            gridclearfix_src: "images/post_1.jpg",
            gridclearfix_alt: "https://unsplash.com/@cjtagupa",
            gridclearfix_titlehref: "post.html",
            gridclearfix_titlecontent: "AAAAAHow Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?",
            gridclearfix_textcontent: "Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...",
            gridclearfix_metahref: "#",
            gridclearfix_metahrefcontent: "Katy Liu",
            gridclearfix_metacontent: "Sep 29, 2017 at 9:48 am"
        }]
    }]
}

var returnVal;//转换为json格式的变量
var HeadLineVal;//用于returnVal 转为HeadLineVal。
var jsonVal;//承接webserver返回的数据。

ajaxRequest = function (RequestAPI) {
    var str_UrlVal = "http://47.101.195.78:80/BlogServerAPI/BlogServerAPI.asmx/" + RequestAPI;
    $.ajax({
        async: false,//异步:(默认true:会造成程序加载完后,再返回请求的数据导致加载时没有数据)
        type: "POST", //访问WebService使用Post方式请求
        contentType: "application/xml;charset=utf-8", //WebService 会返回xml类型
        url: str_UrlVal, //调用WebService
        data: "{}", //传参数
        dataType: 'xml',
        beforeSend: function (x) { x.setRequestHeader("Content-Type", "application/xml; charset=utf-8"); },
        error: function (x, e) {

        },
        success: function (response) { //回调函数，result，返回值
            var json = $(response).text();
            jsonVal = response;
            returnVal = JSON.parse(json);//数据转换
        }
    });
}


//Vue
var MainVue = new Vue({
    el: '#MainNav',
    data: MainNav
})

//设置导航菜单
function Get_HeadLine() {
    ajaxRequest("Get_HeadLine");
    HeadLineVal = returnVal;
    for (var i = 0; i < HeadLineVal.MainNavLis.length; i++) {
        MainVue.MainNavLis.push({ MainName: HeadLineVal.MainNavLis[i].MainName, MainHref: HeadLineVal.MainNavLis[i].MainHref })
    }

}

//设置slideritem控件加载，导航
function Get_slideritem() {

}

Get_HeadLine();