  
$(function(){
  var id =localStorage.getItem("id")
  arr.forEach(item => {
  if(item.id==id){
  $('button').html(item.name)
  $('.main .watch #ckplays #jiekou').porp('src',`https://svip.bljiex.cc/?v= `+`${item.url}`)
    
  } 
});   
  $(".back button").click(function(){
    window.location.href="./index.html"
  })
})