$(function () {
    //画面ドラッグ
    let clickX;
    let clickY;
    let clickPosition;
    let isClick;

    $('.calc_app').css("position", "fixed");
    $('.calc_app').css("top", "20px");
    $('.calc_app').css("left", "40px");
    $('.calc_app').on("mousedown", function (e) {
        isClick = true;
        clickX = e.screenX;
        clickY = e.screenY;
        clickPosition = $('.calc_app').position();
        console.log("X:" + e.screenX);
        console.log("Y:" + e.screenY);
        console.log("POS" + $('.calc_app').position().left);
    });
    $('.calc_app').on("mousemove", function (e) {
        if (!isClick) return;
        $('.calc_app').css('top', clickPosition.top + (e.screenY - clickY) + 'px');
        $('.calc_app').css('left', clickPosition.left + (e.screenX - clickX) + 'px');
        console.log("moveX:" + $('.calc_app').position().left);
        console.log("moveY:" + $('.calc_app').position().top);
    });
    $('.calc_app').on("mouseup", function (e) {
        isClick = false;
        console.log("mouseup");
    });

    //電卓メインロジック
    //変数定義

    //数値ボタンクリック
    $('.switch').on("click", function (e) {
        console.log("switch:click" + $(e.target).text());

        //ボタンの内容（text)を表示
        $('.display').text($('.display').text() + $(e.target).text());

    });
    //計算ボタンクリック
    $('.calculation').on("click", function (e) {
        console.log("calculation:click" + $(e.target).text());

        //ボタンの内容（text)を表示
        $('.display').text($('.display').text() + $(e.target).text());

    });
    //クリアボタンクリック
    $('.reset').on("click", function (e) {
        console.log("reset:click" + $(e.target).text());

        //ボタンの内容（text)を表示
        $('.display').text($('.display').text() + $(e.target).text());

    });
    //イコールボタン（=）クリック
    $('.result').on("click", function (e) {
        console.log("result:click" + $(e.target).text());

        //ボタンの内容（text)を表示
        $('.display').text($('.display').text() + $(e.target).text());

    });

});