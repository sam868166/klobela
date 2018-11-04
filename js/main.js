jQuery(document).ready(function(){
	
//首先将#backTop隐藏
 jQuery("#backTop").hide();
 
//当滚动条的位置处于距顶部400像素以下时，跳转链接出现，否则消失
jQuery(function () {
jQuery(window).scroll(function(){
if (jQuery(window).scrollTop()>400){
jQuery("#backTop").fadeIn(500);
}
else
{
jQuery("#backTop").fadeOut(500);
}
});

//当点击跳转链接后，回到页面顶部位置

jQuery("#backTop").click(function(){
jQuery('body,html').animate({scrollTop:0},500);
return false;
});
});
});

jQuery(document).ready(function(){
	 
	jQuery('.Case .bd ul li').mouseover(function(){
		var b=jQuery(this).find('.txtinfo').outerHeight(true);
		jQuery(this).find('.txtinfo').stop().animate({"bottom": 0}, 100); 
	})
	jQuery('.Case .bd ul li').mouseout(function(){
			var b=jQuery(this).find('.txtinfo').outerHeight(true);
		jQuery(this).find('.txtinfo').stop().animate({"bottom":-36}, 100); 
	})
		var b=jQuery('.txtinfo').length;
		for(var i=0;i<b;i++){
			var b=jQuery(".txtinfo").eq(i).outerHeight(true);
				jQuery(".txtinfo").eq(i).stop().animate({"bottom":-36}, 100); 
			}
});

jQuery(document).ready(function(){
	 
	jQuery('.pageCase .bd ul li').mouseover(function(){
		var b=jQuery(this).find('.nameInfo').outerHeight(true);
		jQuery(this).find('.nameInfo').stop().animate({"bottom": 0}, 200); 
	})
	jQuery('.pageCase .bd ul li').mouseout(function(){
			var b=jQuery(this).find('.nameInfo').outerHeight(true);
		jQuery(this).find('.nameInfo').stop().animate({"bottom": -30}, 200); 
	})
		 
});

jQuery(document).ready(function(){
	 // 固定层
function buffer(a, b, c) {
    var d;
    return function() {
        if (d) return;
        d = setTimeout(function() {
            a.call(this),
            d = undefined
        },
        b)
    }
} (function() {
    function e() {
        var d = document.body.scrollTop || document.documentElement.scrollTop;
        d > b ? (a.className = "pageNav fixtop", c && (a.style.top = d - b + "px")) : a.className = "pageNav"
    }
    var a = document.getElementById("fixNav");
    if (a == undefined) return ! 1;
    var b = 0,
    c, d = a;
    while (d) b += d.offsetTop,
    d = d.offsetParent;
    c = window.ActiveXObject && !window.XMLHttpRequest;
    if (!c || !0) window.onscroll = buffer(e, 1, this)
})(); 
});

jQuery(document).ready(function(){
	 // 固定层 tel400
function buffer(a, b, c) {
    var d;
    return function() {
        if (d) return;
        d = setTimeout(function() {
            a.call(this),
            d = undefined
        },
        b)
    }
} (function() {
    function e() {
        var d = document.body.scrollTop || document.documentElement.scrollTop;
        d > b ? (a.className = "tel400 fixtop400", c && (a.style.top = d - b + "px")) : a.className = "tel400"
    }
    var a = document.getElementById("fixNav400");
    if (a == undefined) return ! 1;
    var b = 0,
    c, d = a;
    while (d) b += d.offsetTop,
    d = d.offsetParent;
    c = window.ActiveXObject && !window.XMLHttpRequest;
    if (!c || !0) window.onscroll = buffer(e, 1, this)
})(); 
});
