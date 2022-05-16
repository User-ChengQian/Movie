$(function(){
     for(i=1;i<=6;i++){
      $(".bg_btn li a").mouseover(function(){
       var index=$(this).attr("index")-1
        $(".tags li:eq("+index+")").css("display","block").addClass("downpx");
      })
      $(".bg_btn li a").mouseleave(function(){
        var index=$(this).attr("index")-1
         $(".tags li:eq("+index+")").css("display","none").removeClass("downpx");
       })

     }                    
})