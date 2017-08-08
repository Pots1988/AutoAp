if($("#camera-range").length) {
  $("#camera-range").rangeslider({
    polyfill: false,
    onInit: function(){
      $(".rangeslider__handle").text(0);
    },
    onSlide: function(position, value){
      $(".rangeslider__handle").text(value);
      $(".camera__photo").css("opacity", value/100);
    }
  });
  $(".camera__btn-range").on("click", function(){
    var inputRange = $("#camera-range"),
        currentValue = +inputRange.val();
    if($(this).hasClass("camera__btn-range--plus")) {
      if (currentValue < 100) {
        currentValue++;
      }
    } else {
      if (currentValue > 0) {
        currentValue--;
      }
    }
    inputRange.val(currentValue).change();
    $(".camera__photo").css("opacity", currentValue/100);
  });

  $(".camera__btn-photo-add").on("click", function(){
    if ($(this).hasClass("camera__btn-photo-add--on")) {
      $(this).removeClass("camera__btn-photo-add--on");
      $(".camera__photo").removeClass("camera__photo--on");
    } else {
      $(this).addClass("camera__btn-photo-add--on");
      $(".camera__photo").addClass("camera__photo--on").css("opacity", function(){
        $("#camera-range").val(50).change();
        return +$("#camera-range").val()/100;
      });
    }
  });

  $(".camera__btn-flash").on("click", function(){
    if ($(this).hasClass("camera__btn-flash--on")) {
      $(this).removeClass("camera__btn-flash--on");
    } else {
      $(this).addClass("camera__btn-flash--on");
    }
  });
}
