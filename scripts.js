
/*====================================================
 build array of colors and pull one to each variable
====================================================*/
RandomColor = function() {
    colors = ['#000', '#f00', '#00f', '#1abc9c', '#2ecc71', '#3498db', '#e74c3c', '#9b59b6', '#e67e22', '#f1c40f', '#34495e', '#cbff59', '#59ff9a', '#FF8A80', '#FF5252', '#FF1744', '#D50000', '#FF80AB', '#FF4081', '#F50057', '#C51162', '#EA80FC', '#E040FB', '#D500F9', '#AA00FF', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA', '#8C9EFF', '#536DFE', '#3D5AFE', '#304FFE', '#82B1FF', '#448AFF', '#2979FF', '#2962FF', '#80D8FF', '#40C4FF', '#00B0FF', '#0091EA', '#84FFFF', '#18FFFF', '#00E5FF', '#00B8D4', '#A7FFEB', '#64FFDA', '#1DE9B6', '#00BFA5', '#B9F6CA', '#69F0AE', '#00E676', '#00C853', '#CCFF90', '#B2FF59', '#76FF03', '#64DD17', '#F4FF81', '#EEFF41', '#C6FF00', '#AEEA00', '#FFFF8D', '#FFFF00', '#FFEA00', '#FFD600', '#FFE57F', '#FFD740', '#FFC400', '#FFAB00', '#FFD180', '#FFAB40', '#FF9100', '#FF6D00', '#FF9E80', '#FF6E40', '#FF3D00', '#DD2C00', '#90A4AE', '#78909C', '#607D8B', '#546E7A' ]
    return colors[Math.floor(Math.random()*colors.length)];
}

RandomColor1 = RandomColor();
RandomColor2 = RandomColor();

document.write("<style>.random-color1{background-color:" + RandomColor1 + " !important;</style>");
document.write("<style>.random-color2{background-color:" + RandomColor2 + " !important;</style>");


$(document).ready(function(){

	$('.logo').hover(function(){
		$('.logo-n').toggleClass('random-color1');
		$('.logo-v').toggleClass('random-color2');
	});

	$('.menu-btn').hover(function(){
		$('.bar-t').toggleClass('random-color1');
		$('.bar-m').toggleClass('random-color2');
		$('.bar-b').toggleClass('random-color1');
	});




	$('.featured-area').particleground({
		curvedLines: false,
	    	dotColor: 'rgba(255,255,255,.05)',
	    	lineColor: 'rgba(255,255,255,.05)'
	});




  /*====================================================
    Copyright foreverrrr
  ====================================================*/

    var year = new Date().getFullYear();
    $('.year').text(year);

});
