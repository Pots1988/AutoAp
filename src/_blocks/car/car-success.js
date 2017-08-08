if($("#car-inspection-end").length) {
  $("#car-inspection-end").on("click", function(e){
    e.preventDefault();
    $(".popup--success").addClass("popup--active");
  });
}
