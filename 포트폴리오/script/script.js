$(function(){

    //  $(".etcmain>li").click(function(){
    //  $(".etcsub").stop(true).show();
       
    //    })

// etc 목록에 마우스 올렸을때 컨텐츠 나오게
 $(".etcmain",this).on({
  mouseenter:function(){
   $(this).find('.etcsub').stop(true).slideDown();
  },
  mouseleave:function(){
   $(this).find('.etcsub').stop(true).slideUp();
  }
 });

// about box에 마우스 올렸을때 컨텐츠 나오게
 $(".aboutinner .box1").on({
    mouseenter:function(){
     $(".aboutinner .box img").stop(true).show();
    },
    mouseleave:function(){
     $(".aboutinner .box img").stop(true).hide();
    }
   });
     
 // skill box에 마우스 올렸을때 컨텐츠 나오게
 $(".skillinner .box",this).on({
   mouseenter:function(){
    $(".page-loader",this).stop(true).show();
   },
   mouseleave:function(){
    $(".page-loader",this).stop(true).hide();
   }
  });



})