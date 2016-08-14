jQuery(document).ready(function($) {

	var naslov1 = $('.naslov1');
	var podnaslov1 = $('.podnaslov1');

	var naslov2 = $('.naslov2');
	var podnaslov2 = $('.podnaslov2');

	var naslov3 = $('.naslov3');
	var podnaslov3 = $('.podnaslov3');

	naslov1.on('click', function(){
		podnaslov1.slideDown();
		podnaslov2.slideUp();
		podnaslov3.slideUp();
	});

	naslov2.on('click', function(){
		podnaslov1.slideUp();
		podnaslov3.slideUp();
		podnaslov2.slideDown();
	});

	naslov3.on('click', function(){
		podnaslov1.slideUp();
		podnaslov2.slideUp();
		podnaslov3.slideDown();
	});
































});