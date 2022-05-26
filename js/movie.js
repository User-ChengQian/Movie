$(function(){
  $(".logo").click(function(){
      location.href="./index.html"
  })
  $(".btn_parse").click(function(){
    var info = $(".search .info_value").val()
    document.getElementById("jiekou").src = "https://jx.xmflv.com/?url=" + `${info}`;
  })
   // 渲染box,影视logo
   var str = ""
   var item_url = ""
   arr2.forEach((item, i) => {
     str += `
   <li  data-url="${item.url}"><img src="./src/video_logo/${item.id}.png" alt=""></li>
   `
   })
   $(".box ul").html(str)
   $(".box ul li").on("click", function () {
     window.open($(this).attr("data-url"))
   })

})