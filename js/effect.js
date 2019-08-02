// JavaScript Document

$(function() {
	var topBtn = $('.link_top');	
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn(500);
		} else {
			topBtn.fadeOut(500);
		}
	});
//スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//ページ内リンク
$(function(){
	$('#contents a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

//ハンバーガー
$(function() {
        var $header = $('#top_head');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav_toggle').click(function(){
            $header.toggleClass('open');
						$('#global_nav ul li').removeClass('active');
						$('.sub_nav').hide();
    });
});

//レスポンシブ自動解除
$(window).resize(function(){
    //windowの幅をxに代入
    var x = $(window).width();
    //windowの分岐幅をyに代入
    var y = 799;
    if (x <= y) {
	//ウインドウサイズが1000px未満のときset_spクラスを追加する
        $('body').addClass('set_sp');
    } else {
	//ウインドウサイズが1000pxを超えたときset_spクラスを解除する
        $('body').removeClass('set_sp');
        $('header').removeClass('open');
						$('#global_nav ul li').removeClass('active');
						$('.sub_nav').hide();
 sideResize();
    }
});
//サブメニュー
$(function() {
$('.sub_nav').hide();
$('#global_nav ul li').click(function () {
    $(this).children('.sub_nav').slideToggle();//サブメニューのスライド展開
    $(this).siblings('.active').children('.sub_nav').slideUp()//兄弟要素でactive要素のあるサブメニューを閉じる
    $(this).siblings('#global_nav ul li').removeClass('active');//兄弟要素のactive要素を解除
    $(this).toggleClass('active');
});
});

//Android用行間設定追加
$(function() {
　if ( navigator.userAgent.indexOf('Android') > 0 ) {
　　$("body").addClass("Android");
　};
});