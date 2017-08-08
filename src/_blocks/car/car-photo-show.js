if ($(".car__notification-link").length) {
  $(".car__notification-link").on("click", function(e){
    e.preventDefault();
    if ($(this).hasClass("car__notification-link--open")) {
      $(this).removeClass("car__notification-link--open").text("Показать");
      $(".car__notification-photo").removeClass("car__notification-photo--open");
    } else {
      $(this).addClass("car__notification-link--open").text("Свернуть");
      $(".car__notification-photo").addClass("car__notification-photo--open");
    }
  });
}
