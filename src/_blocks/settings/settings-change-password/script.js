if($("#show-hide-password").length) {
  $("#show-hide-password").on("change", function(){
    if ($(this).prop("checked")) {
      $("input:password").prop("type", "text");
    } else {
      $("input:text").prop("type", "password");
    }
  });
}
