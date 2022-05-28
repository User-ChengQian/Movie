$(function(){
      // 鼠标经过事件
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

      //鼠标经过头像
      $(".user_pic").hover(function(){
        $(".detail").css({
          "opacity": "1",
        })
      },function(){
        $(".detail").css({
          "opacity":"0",
        })

      }
      )
      // 点击事件
      $(".bg_btn li>a").click(function(){
        if($(this).attr("index")==4){
          return window.open("https://www.ali213.net/")
        }
        if($(this).attr("index")==3){
          return window.open("https://s1.ananas.chaoxing.com/sv-w8/audio/ea/04/01/3cc4848503bf10c9f0c4da4551b55aa8/audio.mp3?at_=1653701165876&ak_=592a608d7fb65c3dc3e0915ea554579b&ad_=901301576ccaddb3a322d892ae3b0bc9")
        }
        if($(this).attr("index")==2){
          sessionStorage.setItem("pig","https://v.qq.com/x/cover/bzfkv5se8qaqel2.html")
          return location.href="./movie.html"
        }
        animateCSS('.tips', 'bounceIn');
      })

      // 存储token
      sessionStorage.setItem("movie_token","12345")
      

      // 跳转页面函数
      function movie_go(id){
        sessionStorage.setItem("id",id) 
        location.href="./movie.html"
      }

      // div点击事件
      for(i=0;i<11;i++){
        $(`.content .box>div:eq(${i})`).click(function(){
          var index =$(this).attr("data-index")
          movie_go(index)
        })
      }

    //轮播图的委托事件
    
    $(".swiper").on("click","img",function(){
     var a= $(this).attr("data_pic")
     switch(a){
       case "1":
        movie_go(a)
        break;
      case "2":
        movie_go(a)
        break;
      case "3":
        movie_go(a)
        break;
      default:
        alert("error")
     }
    })
    // 排版样式1
    arr1= arr.filter(function(item){
        return item.size==1
      })
      arr1.forEach(function(item,i){
      $(`.content .s_box:eq(${i})`).attr("data-index",`${item.id}`)
      //内容渲染
        $(`.content .s_box:eq(${i}) img`).attr("src",`./src/img/mysql/pic/${item.id}.png`)
        $(`.content .s_box:eq(${i}) p i`).text(item.value)
        $(`.content .s_box:eq(${i}) p:eq(1)`).text(item.name)
      })

      // 排版样式2
      arr2= arr.filter(function(item){
        return item.size==2
      })
      arr2.forEach(function(item,i){
  $(`.content .okay:eq(${i})`).attr("data-index",`${item.id}`)
    $(`.content .okay:eq(${i}) img`).attr("src",`./src/img/mysql/pic/${item.id}.png`)
    $(`.content .okay:eq(${i}) p:eq(0)`).text(item.name)
    $(`.content .okay:eq(${i}) p:eq(1) i`).text(item.loves)
    $(`.content .okay:eq(${i}) p:eq(2) i`).text(item.com)
    $(`.content .okay:eq(${i}) p:eq(3) i`).text(item.share)
    $(`.content .okay:eq(${i}) p:eq(4) i`).text(item.update)

       })
})