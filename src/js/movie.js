$(function(){
  
  // 跳转首页
  $(".logo").click(function(){
      location.href="./index.html"
  })

  // 点击解析逻辑
  $(".btn_parse").click(function(){
    furl = $(".search .info_value").val()
    document.getElementById("jiekou").src = path + `${furl}`;
    $(".parse").val("")
  })

   // 渲染box,影视logo,绑定点击事件
   var str = ""
   arr2.forEach((item, i) => {
     str += `
   <li  data-url="${item.url}"><img src="./src/img/video_logo/${item.id}.png" alt=""></li>
   `
   })
   $(".box ul").html(str)
   $(".box ul li").on("click", function () {
     window.open($(this).attr("data-url"))
   })


  //  文本框逻辑
   $(".xzmsg").click(function(){
     $(this).css("display","none")
   })
   $(".delete").click(function(){
    $(".parse").val("").focus()
     $(this).css("display","none")
   })
   $(".search .parse").on("keydown",function(e){
     if(e.keyCode==8){
       $(this).val("")
     }
    if($(".parse").val()){
      $(".delete").css("display","block")
      }
    else{
      $(".delete").css("display","none")
      }
   })


})