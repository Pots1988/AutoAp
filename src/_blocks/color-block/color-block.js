if($(".color-block__radio").length) {
  $(".color-block__radio").on("change", function(){
    $(".color-block__name").text($(this).attr("data-name"));
    $(".color-block__number").text($(this).attr("data-number"));
    $(".color-block__descr").addClass("color-block__descr--active");
    $(".btn").prop("disabled", false);
  });
}
