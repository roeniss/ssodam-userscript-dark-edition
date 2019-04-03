// (deprecated) cssHooks
/*
$.cssHooks.background_color = {
    get: function (elm, computed) {
        return $(elm).css('background-color');
    },
    set: function (elm, value) {
        return $(elm).css('background-color', value); // red로 셋팅
    }
};
const light_black = "rgb(51,51,51)"
$("body").css("background_color", light_black)
*/

// 요소 리스트 (순서대로 설명)
// 전체 배경
let background_color_black_elems = ["body",];
// 푸터 배경, 메인화면 각 게시판 미리보기 배경, 헤더 배경
let background_color_light_black_elems = ["footer > .container", "div.image > .image-view", "div.panel-group > div.panel"];
// 상단 적색 바 배경
let background_color_darker_elems = ["div.alert.alert-default"];
// 메인화면 각 게시판 글 제목들
let color_white_elems = ["table a",]
// 푸터 내 작은 글씨들
let color_darker_elems = [".footer-menu .submenu a", "footer .copyright"]
// 메인화면 각 게시판 제목들, 푸터 내 큰 카테고리들
let color_lighter_elems = [".image-view > .title", ".footer-menu .menu-name"]


// 컬러 리스트
const black = "rgb(51,51,51)"
const light_black = "rgb(80, 80, 80)"
const darker = -60
const lighter = 100
const white = "white"

// 배경색 바꾸기
const _hexify = function (colorval) {
    let parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete (parts[0]);
    for (let i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return '#' + parts.join('');
}
const adjust_background_color = function (selector, amt) {
    let x = $(selector).css('backgroundColor') || "#FFFFFF"
    let = hexColor = _hexify(x);
    let usePound = false;
    if (hexColor[0] == "#") {
        hexColor = hexColor.slice(1);
        usePound = true;
    }
    let num = parseInt(hexColor, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
const adjust_color = function (selector, amt) {
    let x = $(selector).css('color') || "#000000"
    let = hexColor = _hexify(x);
    let usePound = false;
    if (hexColor[0] == "#") {
        hexColor = hexColor.slice(1);
        usePound = true;
    }
    let num = parseInt(hexColor, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
// important가 필요하지 않은 것 같아서 일단 보류
/*
const change_background_color_black = function (i, s) { return s ? s + `background-color: ${black} !important;` : `background-color: ${black} !important;`}
const change_background_color_light_black = function (i, s) { return s ? s + `background-color: ${light_black} !important;` : `background-color: ${light_black} !important;`}
$(elemList_for_background_color_black.join()).attr('style', change_background_color_black);
$(elemList_for_background_color_light_black.join()).attr('style', change_background_color_light_black);
*/
background_color_black_elems.forEach(elem => $(elem).css("background-color", black))
background_color_light_black_elems.forEach(elem => $(elem).css("background-color", light_black))
background_color_darker_elems.forEach(elem => $(elem).css("background-color", adjust_background_color(elem, darker)))
color_white_elems.forEach(elem => $(elem).css("color", white))
color_darker_elems.forEach(elem => $(elem).css("color", adjust_color(elem, darker)))
color_lighter_elems.forEach(elem => $(elem).css("color", adjust_color(elem, lighter)))


// elem = ".image-view span"; console.log(elem); $(elem).css("color", adjust_color(elem, 100))