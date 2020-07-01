$(function(){
	$(window).scroll(function (){
		$('h2').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});


$(function() {
   var navLink = $('.header-right-pc li a');

   var contentsArr = new Array();
  for (var i = 0; i < navLink.length; i++) {
      var targetContents = navLink.eq(i).attr('href');
      if(targetContents.charAt(0) == '#') {
            var targetContentsTop = $(targetContents).offset().top - 3;
            var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
            contentsArr[i] = [targetContentsTop, targetContentsBottom]
      }
   };

   function currentCheck() {
        var windowScrolltop = $(window).scrollTop();
        for (var i = 0; i < contentsArr.length; i++) {
          if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
               navLink.removeClass('current');
               navLink.eq(i).addClass('current');
                i == contentsArr.length;
            }
       };
  }

  $(window).on('load scroll', function() {
      currentCheck();
 });

    navLink.click(function() {
      $('html,body').animate({
          scrollTop: $($(this).attr('href')).offset().top
       }, 300);
        return false;
   })
});
