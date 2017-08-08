if($(".car-inspection__comment-bg").length){
  $(".car-inspection__comment-bg").each(function(){
    var imgUrl = "url(" + $(this).closest(".car-inspection__photo").find("img").attr("src") + ")";
    $(this).css("background-image", imgUrl);
  });
}
