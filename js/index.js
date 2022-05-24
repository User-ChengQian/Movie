$(function(){
      $(".bg_btn li ").hover(
        function(){
        var index=$(this).children().attr("index")-1
        $(".tags li:eq("+index+")").stop().css("display","block").stop().animate({
         top:"11px"
        },300);
        },
        function(){
          var index=$(this).children().attr("index")-1
         $(".tags li:eq("+index+")").stop().css("display","none").stop().animate({
          top:"0px"
         },300);
        },
      ) 
      //  $(".user a").click(function(e){
      //    e.preventDefault();
      //    console.log(11);
      //    window.location.href="./user.html"
      //  })
       $(".content>div").click(function(){
         window.location.href="./movie.html"
       })
       $(".bg_btn li>a").click(function(){
         $(".tips").stop().animate({ 
       opacity: 1,
        top:"-100px"
        }, 1500 ,function(){
          $(".tips").css({top:"-30px",opacity:0})
        });
       })
      
})