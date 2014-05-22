//jQuery Events
$(function () {

	// all popup hide
	//$(document).click(function(event) {
	//	if (!$.contains($(".popup")[0], event.target)) {
	//		$(".popup").hide();
	//	}
	//});

	// generic toggle
	$(".toggle").click(function(){
		var target = $("#" + $(this).attr("toggle-target"));
		target.toggle();
		$(this).toggleClass("active");
	});

	// position toggle
	$(".posToggle").click(function(){
		var target = $("#" + $(this).attr("toggle-target"));
		var pos = $(this).position();
		target.css("left",pos.left);
		target.css("top",pos.top + $(this).height());
		target.toggle();
		$(this).toggleClass("active");
	});

	// fade toggle
	$(".fadeToggle").click(function(){
		var target = $("#" + $(this).attr("toggle-target"));
		if(target.css("display") != "none") {
			target.fadeOut("200");
		} else {
			target.fadeIn("200");
		}
		$(this).toggleClass("active");
	});

	// slide toggle
	$(".slideToggle").click(function(){
		var target = $("#" + $(this).attr("toggle-target"));
		target.slideToggle("fast");
		$(this).toggleClass("active");
	});

	// header toggle
	$(".headerToggle").click(function(){
		var target = $("#" + $(this).attr("toggle-target"));
		var pos = $(this).position();
		target.css("left",pos.left);
		target.css("top",50);
		target.toggle();
		$(this).toggleClass("active");
	});

	// Launcher toggle
	//$(".launcher a").click(function(){
	//	//alert($("#auiLauncher").css("height"));
	//	if($("#auiLauncher").css("height") != "0px") {
	//		$("#auiLauncher").css("height", 0);
	//	} else {
	//		var listHeight = $("#auiLauncher ul").css("height");
	//		$("#auiLauncher").css("height", listHeight);
	//	}
	//});
});
