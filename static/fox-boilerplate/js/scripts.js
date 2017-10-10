var toggled = 0;

$('.menu-icon').click(function(){
  $('.main-nav').slideToggle();
  if(toggled == 0){
  $('.line3').stop().transition({rotate: "45", "margin-top": "13px"});
  $('.line2').stop().transition({opacity: "0"}, "fast");
  $('.line1').stop().transition({rotate: "-45", "margin-top": "13px"});
    toggled++;
  }
  else{
  $('.line3').stop().transition({rotate: "+=135", "margin-top": "3px"});
  $('.line2').transition({opacity: "1"}, "fast");
  $('.line1').stop().transition({rotate: "-=135", "margin-top": "23px"});
  toggled--;
  }
});