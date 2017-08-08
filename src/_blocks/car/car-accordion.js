if($(".car__accordion-btn").length) {
  $(".car__accordion-btn").on("click", function(){
    var $parent = $(this).closest(".car__accordion");
    $parent.toggleClass("car__accordion--open");
  });
}
