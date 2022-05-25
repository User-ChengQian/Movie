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
      
      $(".bg_btn li>a").click(function(){
        animateCSS('.tips', 'bounceIn');
      })

      // div点击事件
      for(i=0;i<11;i++){
        $(`.content .box>div:eq(${i})`).click(function(){
          var index =$(this).attr("data-index")
          console.log(index);
          //存储当前点击的自定义属性(=id)
          localStorage.setItem("id",`${index}`)
          //跳转
          location.href="./movie.html"
        })
      }

  // 排版样式1
 arr1= arr.filter(function(item){
    return item.size==1
  })
  arr1.forEach(function(item,i){
    // 设置自定义属性
  $(`.content .s_box:eq(${i})`).attr("data-index",`${item.id}`)
  //内容渲染
    $(`.content .s_box:eq(${i}) img`).attr("src",`./src/mysql/pic/${item.id}.png`)
    $(`.content .s_box:eq(${i}) p i`).text(item.value)
    $(`.content .s_box:eq(${i}) p:eq(1)`).text(item.name)
  })
  // 排版样式2
  arr2= arr.filter(function(item){
    return item.size==2
  })
  arr2.forEach(function(item,i){
  $(`.content .okay:eq(${i})`).attr("data-index",`${item.id}`)
    $(`.content .okay:eq(${i}) img`).attr("src",`./src/mysql/pic/${item.id}.png`)
    $(`.content .okay:eq(${i}) p:eq(0)`).text(item.name)
    $(`.content .okay:eq(${i}) p:eq(1) i`).text(item.loves)
    $(`.content .okay:eq(${i}) p:eq(2) i`).text(item.com)
    $(`.content .okay:eq(${i}) p:eq(3) i`).text(item.share)
    $(`.content .okay:eq(${i}) p:eq(4) i`).text(item.update)

  })
})