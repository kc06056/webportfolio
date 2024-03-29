$(function(){

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
  $(document).ready(function(){
    let popupOpened = false;

    $(".detail img").click(function(e){
        e.stopPropagation(); 
        const imgSrc = $(this).attr('src');
        $("#popupImg").attr('src', imgSrc);
        $("#imagePopup").show();

        // 팝업이 열릴 때 한 번만 스크롤을 맨 위로 이동시키기
        if (!popupOpened) {
            console.log("팝업이 열릴 때 스크롤을 맨 위로 이동");
            $("#imagePopup").scrollTop(0);
            popupOpened = true;
        }
    });
    //이미지클릭시 팝업 닫을 때
    $("#imagePopup").click(function(){
        $(this).hide();
        popupOpened = false; // 팝업이 닫힐 때 popupOpened 변수 초기화
    });

    // 외부 영역을 클릭해서 팝업을 닫을 때
    $(document).click(function(e){
        if (!$(e.target).closest("#imagePopup").length && !$(e.target).is("#imagePopup")) {
            $("#imagePopup").hide();
            popupOpened = false; 
        }
    });
});


});
