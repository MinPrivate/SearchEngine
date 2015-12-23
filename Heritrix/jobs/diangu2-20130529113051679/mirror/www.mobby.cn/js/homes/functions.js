var timeoutobj;


function signupFromDisplay() {
	$('.header .tips a').hover(function() {
		$('.signupForm').show();
		$('.signupFormBg').show();
	}, function() {
		//IE7 will hide popup so do nothing
		if($.browser.msie && $.browser.version == 7.0) {
			return;
		}
		$('.signupForm').hide();
		$('.signupFormBg').hide();
	});
	$('.signupFormTable').mouseenter(function() {
		$('.signupForm').show();
		$('.signupFormBg').show();
	});
	$('.signupFormBg').mouseout(function() {
		$('.signupForm').hide();
		$('.signupFormBg').hide();
	});
	$('.inner').mouseenter(function() {
		$('.signupForm').hide();
		$('.signupFormBg').hide();
	});
	$('.bannerSlider').mouseenter(function() {
		$('.signupForm').hide();
		$('.signupFormBg').hide();
	});
};

$(function() {
	$('#bannerSlider').cycle({
		timeout : 10000,
		pager : '#controls',
		pagerAnchorBuilder : function(idx, slide) {
			// return selector string for existing anchor
			return '<a href="#"/>';
		}
	});

	$('a.scroll-to-element').bind('click', function() {
		var targetElementSelectorString = $(this).attr('rel');
		$('.scroll-pane')[0].scrollTo(targetElementSelectorString);
		return false;
	});

})
//Main page slider function Start
