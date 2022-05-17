$(function(){
      // $(".bg_btn li ").hover(
      //   function(){
      //   var index=$(this).children().attr("index")-1
      //  console.log(11111111111);
      //   $(".tags li:eq("+index+")").stop().css("display","block").stop().animate({
      //    top:"0px"
      //   },300);
      //   },
      //   function(){
      //  console.log(222222222222);
      //     var index=$(this).children().attr("index")-1
      //    $(".tags li:eq("+index+")").stop().css("display","none").stop().animate({
      //     top:"0px"
      //    },300);
      //   },
      // )
      // --------------------------------
      $(".bg_btn li").mouseenter(function(){
       var index=$(this).children().attr("index")-1
       console.log(1);
        $(".tags li:eq("+index+")").stop().css("display","block").stop().animate({
         top:"10px"
        },300);
        
      })

      $(".bg_btn li").mouseleave(function(){
        var index=$(this).children().attr("index")-1
         $(".tags li:eq("+index+")").stop().css("display","none").stop().animate({
          top:"0px"
         },300);
       })   
       
      
})