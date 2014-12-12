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

	// halfRow & fullRow Height Setting
	// 35 : portletHead / 40 : portletFoot / 15 : 2margin-half / 2 : border
	var hrow = ($(window).outerHeight() - $("#auiHeader").outerHeight()) /2 - 35 - 40 - 15 - 2 - $("#auiFooter").outerHeight() /2;
	var frow = ($(window).outerHeight() - $("#auiHeader").outerHeight()) - 35 - 40 - 20 - 2  - $("#auiFooter").outerHeight();
	var trow = frow  - 20 - $("#inputField").outerHeight() - 15 - 26 - 15 - 15 - 2;
	$(".halfRow .portletBody").css("height", hrow);
	$(".fullRow .portletBody").css("height", frow);
	$("#timeline").css("height", trow);
	$(window).resize(function(){
		//halfRow
		var hrow = ($(window).outerHeight() - $("#auiHeader").outerHeight()) /2 - 35 - 40 - 15 - 2 - $("#auiFooter").outerHeight() /2;
		$(".halfRow .portletBody").css("height", hrow);
		//fullRow
		var frow = ($(window).outerHeight() - $("#auiHeader").outerHeight()) - 35 - 40 - 20 - 2  - $("#auiFooter").outerHeight();
		$(".fullRow .portletBody").css("height", frow);

		var trow = frow  - 20 - $("#inputField").outerHeight() - 15 - 26 - 15 - 15 - 2;
		$("#timeline").css("height", trow);
	});

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
