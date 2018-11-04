jQuery(document).ready(function(e) {
jQuery("#qqkefu").css("right", "0px");

    var button_toggle = true;
jQuery(".right_ico").live("mouseover", function(){
var tip_top;
var show= jQuery(this).attr('show');
var hide= jQuery(this).attr('hide');
tip_top = show == 'tel' ?  65 :  -10;
button_toggle = false;
jQuery("#right_tip").css("top" , tip_top).show().find(".flag_"+show).show();
jQuery(".flag_"+hide).hide();

}).live("mouseout", function(){
button_toggle = true;
hideRightTip();
});


jQuery("#right_tip").live("mouseover", function(){
button_toggle = false;
jQuery(this).show();
}).live("mouseout", function(){
button_toggle = true;
hideRightTip();
});

function hideRightTip(){
setTimeout(function(){		
if( button_toggle ) jQuery("#right_tip").hide();
}, 500);
}

jQuery("#backToTop").live("click", function(){
var _this = jQuery(this);
jQuery('html,body').animate({ scrollTop: 0 }, 500 ,function(){
_this.hide();
});
});
});