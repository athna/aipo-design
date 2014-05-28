//jQuery Events
$(function () {


	//alert($(document).outerHeight());
	//$("#auiNavigation").css("height", $(document).outerHeight() - $("#auiHeader").outerHeight());

	// all popup hide
	//$(document).click(function(event) {
	//	if (!$.contains($(".popup")[0], event.target)) {
	//		$(".popup").hide();
	//	}
	//});

	// generic toggle
	$(".toggle").click(function(){
		var target = $("#" + $(this).attr("jq-target"));
		target.toggle();
		$(this).toggleClass("active");
	});

	// focus toggle
	$(".focusToggle").focus(function(){
		var target = $("#" + $(this).attr("jq-target"));
		target.show();
		$(this).addClass("active");
	});
	$(".focusToggle").blur(function(){
		var target = $("#" + $(this).attr("jq-target"));
		target.hide();
		$(this).removeClass("active");
	});


	// position toggle
	$(".posToggle").click(function(){
		var target = $("#" + $(this).attr("jq-target"));
		var pos = $(this).position();
		target.css("left",pos.left);
		target.css("top",pos.top + $(this).height());
		target.toggle();
		$(this).toggleClass("active");
	});

	// fade toggle
	$(".fadeToggle").click(function(){
		var target = $("#" + $(this).attr("jq-target"));
		if(target.css("display") != "none") {
			target.fadeOut("200");
		} else {
			target.fadeIn("200");
		}
		$(this).toggleClass("active");
	});

	// slide toggle
	$(".slideToggle").click(function(){
		var target = $("#" + $(this).attr("jq-target"));
		target.slideToggle("fast");
		$(this).toggleClass("active");
	});

	// header toggle
	$(".headerToggle").click(function(){
		var target = $("#" + $(this).attr("jq-target"));
		var pos = $(this).position();
		target.css("left",pos.left);
		target.css("top",50);
		target.toggle();
		$(this).toggleClass("active");
	});

	// tools > setting toggle
	$(".tools .setting a").click(function(){
		$(this).next(".dropdown").toggle();
		$(this).toggleClass("active");
	});

	$('.tab > li').click(function() {
		var index = $('.tab > li').index(this);
		$('.tabContent > li').css('display','none');
		$('.tabContent > li').eq(index).css('display','block');
		$('.tab > li').removeClass('active');
		$(this).addClass('active')
	});
});
