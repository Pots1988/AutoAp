if($(".car-inspection__input").length) {
  $(".car-inspection__input").on("change", function(){
    disabledBtn();
  });
  function disabledBtn(){
    if ($(".car-inspection__input:checked").length) {
      $(".btn").prop("disabled", false);
    } else {
      $(".btn").prop("disabled", true);
    }
  }
  disabledBtn();
}
