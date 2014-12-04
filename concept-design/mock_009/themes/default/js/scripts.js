//jQuery Events
$(function () {

	// homeのみ実行
	if(document.getElementById("auiSequence") != null) {
		// Fit Window
		var ch = $(window).outerHeight() - $("#auiHeader").outerHeight();
		$("#auiSequence").css("height",ch);
		$("#auiSide").css("height",ch);
		$(window).resize(function(){
			var ch = $(window).outerHeight() - $("#auiHeader").outerHeight();
			$("#auiSequence").css("height",ch);
			$("#auiSide").css("height",ch);
		});
		// Sequence Control
		var today = $("#sequence20140610").position();
		$("#auiSequence").scrollTop(today.top + 3);
	}

	// Sequence today jump
	$(".jqSqToday").click(function(){
		var obj = "#" + $(this).attr("jq-target");
		var today = $(obj).position();
		var sst = $("#auiSequence").scrollTop();
		var pos = today.top + sst + 10 +11;
		$("#auiSequence").animate({
			scrollTop: pos
		},"slow", "easeInOutCubic");
	});

	// Sequence in Schedule
	$(".scTimeEdit .caret").click(function(){
		var setMin = 1800000;
		if($(this).hasClass("down")){
			setMin = -1800000;
		}
		var p = $($(this).parent().parent()[0]).prev()[0];	//head格納

		var st = $(p).children(".start");
		stDate = Date.parse(st.attr("jq-date")) + setMin;
		var stTime = new Date();
		stTime.setTime(stDate);
		var min = "" + stTime.getMinutes();
		if(min.length === 1) {
			min = "0" + stTime.getMinutes();
		}
		st.html(stTime.getHours() + ":" + min);
		st.attr("jq-date", stTime.getFullYear() + "/" + (stTime.getMonth() + 1) + "/" + stTime.getDate() + " " + stTime.getHours() + ":" + min + ":00");

		var ed = $(p).children(".end");
		edDate = Date.parse(ed.attr("jq-date")) + setMin;
		var edTime = new Date();
		edTime.setTime(edDate);
		var min = "" + edTime.getMinutes();
		if(min.length === 1) {
			min = "0" + edTime.getMinutes();
		}
		ed.html(edTime.getHours() + ":" + min);
		ed.attr("jq-date", edTime.getFullYear() + "/" + (edTime.getMonth() + 1) + "/" + edTime.getDate() + " " + edTime.getHours() + ":" + min + ":00");

	});

	// generic toggle
	$(".toggle").click(function(){
		var target = "#" + $(this).attr("jq-target");
		/*if($(target).css("display") == "none") {
			$(".dropdown").hide();
			$(".active").removeClass("active");
			$(target).show();
			$(this).addClass("active");
		} else {
			$(".dropdown").hide();
			$(this).removeClass("active");
		}*/

		$(target).toggle();
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

	// tab UI
	$('.tab > li').click(function() {
		var index = $('.tab > li').index(this);
		$('.tabContent > li').css('display','none');
		$('.tabContent > li').eq(index).css('display','block');
		$('.tab > li').removeClass('active');
		$(this).addClass('active')
	});

	// placeholder
	$(".placeholderCheck").each(function() {
		if ($(this).attr("jq-placeholder")) {
			$(this).after('<span class="placeholder">' + $(this).attr("jq-placeholder") + '</span>');
		}
	});
	$(".placeholderCheck").focus(function(){
		$(this).next(".placeholder").hide();
	});
	$(".placeholder").click(function(){
		$(this).prev().focus();
	});
	$(".placeholderCheck").blur(function(){
		//$(this).next(".placeholder").hide();
		if($(this).val() == "") {
			$(this).next(".placeholder").show();
		}
	});

	// dialog
	$( ".dialog" ).dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		width: '700px',
		height: 'auto',
		show: 200,
		hide: 200,
		buttons: {
			"OK": function(){
				$(this).dialog('close');
			},
			"キャンセル": function(){
				$(this).dialog('close');
			}
		}
	});
	$(".dialogOpen").click(function(){
		var target = "#" + $(this).attr("jq-target");
		$(target).dialog("open");
	});
	$(document).on("click", ".ui-widget-overlay", function(){
		$(this).next().find(".ui-dialog-content").dialog("close");
	});

	// Generic Alert
	$(".jq-alert").click(function(){
		alert($(this).attr("title"));
	});

	// Fixed Launcher
	var launcher    = $("#auiLauncher");
	var launcherTop = launcher.offset().top;
	$(window).scroll(function () {
		if($(window).scrollTop() >= launcherTop) {
			launcher.css("position","fixed");
			launcher.css("top","0");
		} else {
			launcher.css("position","");
			launcher.css("top","");
		}
	});

	// Toggle Launcher
	$(".toggleLauncher").click(function(){
		$("#auiLauncher").toggleClass("narrow");
		$("#auiContents").toggleClass("narrow");
		$(this).children(".fa").toggleClass("rotate180");
	});

	// Timecard Clock
	/*
	$.extend({
		clock: function clock(target){
			var d = new Date();
			var month = d.getMonth() + 1;
			var day = d.getDate();
			var week = d.getDay();
			switch (week){
				case 0: week = "日"; break;
				case 1: week = "月"; break;
				case 2: week = "火"; break;
				case 3: week = "水"; break;
				case 4: week = "木"; break;
				case 5: week = "金"; break;
				case 6: week = "土"; break;
			}
			var h = d.getHours();
			var m = d.getMinutes();
			var s = d.getSeconds();
			h = h<10?"0"+h:h;
			m = m<10?"0"+m:m;
			var time_str = month + "月" + day + "日（" + week + "）" + h + ":" + m;
			target.html(time_str);
			setTimeout(function(){
				clock(target)
			},1000);
		}
	});
	$(function(){
		$.clock($("#tcClock"));
	});
	*/
});
