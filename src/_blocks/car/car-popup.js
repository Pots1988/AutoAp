if($(".car__photo-list").length) {
  $(".car__photo-list a").on("click", function(e){
    e.preventDefault();
    $("body").addClass("blur");
    $(".popup--photo").addClass("popup--active");
  });
  $(".popup__close").on("click", function(){
    $("body").removeClass("blur");
    $(".popup--photo").removeClass("popup--active");
  });
}
