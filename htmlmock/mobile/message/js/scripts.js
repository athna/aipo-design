//Bootstrap Plugins
$(function () {
	//tooltip
	$('[rel=tooltip]').tooltip();
	$('[rel=tooltipBottom]').tooltip({placement:'bottom'});
	$('[rel=tooltipRight]').tooltip({placement:'right'});
	$('[rel=tooltipLeft]').tooltip({placement:'left'});
	$('[rel=tooltipFocus]').tooltip({trigger:'focus'});
	//alert
	$(".alert").alert();
	//fancybox plugin
	$(".popImage").fancybox({
		margin		: 4,
		padding		: 1,
		openEffect	: 'none',
		closeEffect	: 'none',
		closeClick	: true,
		closeBtn	: false,
		arrows		: false,
		helpers : {
			title : {
				type : 'outside'
			},
			overlay : {
				speedOut : 0
			}
		}
	});
});


$(".dropdown-toggle").click(function() {
	$(this).toggle();
});