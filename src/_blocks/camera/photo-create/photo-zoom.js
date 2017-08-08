if($(".camera__zoom-btn").length) {
  $(".camera__zoom-btn").on("click", function(){
    var el = $(".camera__photo-done img"),
        elWidth = parseFloat(el.css("width")),
        photoScale = 80;
    if ($(this).hasClass("camera__zoom-btn--plus")) {
      if (elWidth + photoScale >= window.innerWidth) {
        el.css("width", elWidth + photoScale);
      }

    } else {
      if (elWidth - photoScale >= window.innerWidth) {
        el.css("width", elWidth - photoScale);
      }
    }
  });
  $(".camera__btn--comment").on("click", function(){
    if ($(".camera").hasClass("camera--comment")) {
      $(".camera").removeClass("camera--comment");
      $(".comment").removeClass("comment--active");
    } else {
      $(".camera").addClass("camera--comment");
      $(".comment").addClass("comment--active");
    }
  });
}
