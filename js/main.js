(function($) {
  $(function() {
		$(window).load(function(){
		  $('.scrollbar').mCustomScrollbar({
		    axis:"y", //set both axis scrollbars
		    advanced:{autoExpandHorizontalScroll:true}, //auto-expand content to accommodate floated elements
		    // change mouse-wheel axis on-the-fly 
		    callbacks:{
		      onOverflowY:function(){
		        var opt = $(this).data("mCS").opt;
		        if(opt.mouseWheel.axis!=="y") opt.mouseWheel.axis="y";
		      }
		    }
		  });
		});
		$('.top-menu .navigation').on('click', function(){
      $('.burger').stop().slideToggle(500);
      return false;
		});
  	$('#devices-scroll').affix({
		  offset: {
		    top: function () {
		      return (this.top = $('.header').outerHeight(true))
		    },
		    bottom: function () {
		      return (this.bottom = $('.footer').outerHeight(true))
		    }
		  }
		});
    
    $('.change').each(function(){
      var _el = $(this), _el1 = _el.find('.i1'), _el2 = _el.find('.i2');
      $(window).on('scroll ready load resize', function(){
        var x1 = $(window).scrollTop() + $(window).height(), x2 = _el.offset().top;
        _el1.css('background-position', 'left ' + parseInt((x1 - x2)/($(window).height()/100)) + 'px');
        _el2.css('background-position', 'right ' + parseInt((x2 - x1)/($(window).height()/100)) + 'px');
      });

      _el.find('.btn.btn-more').on('click', function(){
      	_el.toggleClass('open');
      	return false;
      })
    });
		$('.employees .owl-carousel').owlCarousel({
		  items: 1,
		  loop: true,
		  margin: 0,
		  nav: true,
		  dots: false,
		  responsive:{
		    768:{
		    	margin: 30,
		      items: 2
		    },
		    992:{
		      items: 3
		    },
		    1200:{
		    	margin: 50,
		      items: 4
		    }
		  }
		});
		$('.index-carousel .owl-carousel').owlCarousel({
		  items: 1,
		  loop: true,
		  margin: 0,
		  nav: true,
		  dots: false,
		  responsive:{
		    768:{
		    	margin: 30,
		      items: 3
		    }
		  }
		});
    $('a[href*="#"]:not([href="#"])').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var _target = $(this.hash);
        var _dopheight = 0;
        _target = _target.length ? _target : $('[name=' + this.hash.slice(1) +']');
        if (_target.length) {
          $('html, body').animate({
            scrollTop: _target.offset().top - _dopheight
          }, 1000);
          return false;
        }
      }
    });
  });
})(jQuery);