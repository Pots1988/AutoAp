if($(".header__menu-btn").length) {
  $(".header__menu-btn").on("click", function(){
    $(".header__menu-link").toggleClass("header__menu-link--active");
  });
}
