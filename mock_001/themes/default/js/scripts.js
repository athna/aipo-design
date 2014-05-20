//jQuery Events
$(function () {

	$(".headerToggle").click(function(){
		var target = $("#" + $(this).attr("toggle-target"));
		var pos = $(this).position();
		target.css("left",pos.left);
		target.css("top",50);
		target.toggle();
	});

	// generic toggle
	$(".toggleSwitch").click(function(){
		var target = $("#" + $(this).attr("toggle-target"));
		var pos = $(this).position();
		//alert($(this).width());
		target.css("left",pos.left);
		target.css("top",pos.top + $(this).height());
		target.toggle();
	});

	// all popup hide
	$(document).click(function(event) {
		if (!$.contains($(".popup")[0], event.target)) {
			//$(".popup").hide();
		}
	});

});
