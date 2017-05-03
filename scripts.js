$(document).ready(function(){
	
  // Ready.... FIGHT!

	
  /*====================================================
    Particlez <3
  ====================================================*/
	
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
	
	
  /*====================================================
    Natorize --> :n8::gold::eyes:
  ====================================================*/
	
	$.fn.natorize = function(options) {
      var defaults = {
          enterOn: 'click', //timer, click
          delayTime: 1000 //time till nate shows ups
          };

      var options = $.extend(defaults, options);

      return this.each(function() {

			var _this = $(this);

			var nateImg = '<img id="nate" style="display: none; z-index: 100;" src="nate3.png" />'
			var locked = false;

			$('body').append(nateImg);

			var nate = $('#nate').css({
				"position":"fixed",
				"bottom": "-700px",
				"right" : "0",
				"display" : "block",
        		"z-index": "100000"
			})

			function init() {
				locked = true;

				nate.animate({
					"bottom" : "0"
				}, function() {
					$(this).animate({
						"bottom" : "-130px"
					}, 100, function() {
						var offset = (($(this).position().left)+400);
						$(this).delay(300).animate({
							"right" : offset
						}, 2200, function() {
							nate = $('#nate').css({
								"bottom": "-700px",
								"right" : "0"
							})
							locked = false;
						})
					});
				});
			}

			if(options.enterOn == 'timer') {
				setTimeout(init, options.delayTime);
			} else if(options.enterOn == 'click') {
				_this.bind('click', function(e) {
					e.preventDefault();
					if(!locked) {
						init();
					}
				})
			}
    });
  }

});
