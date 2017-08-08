$(".car__rating-btn").on("click", function(){
  $(".car__rating-btn").removeClass("active");
  $(this).addClass("active").prevAll().addClass("active");
});
