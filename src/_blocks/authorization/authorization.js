$("[href='#authorization__email']").on("click", function(e){
  e.preventDefault();
  $(".authorization__list").removeClass("authorization__list--password").addClass("authorization__list--email");
});

$("[href='#authorization__enter']").on("click", function(e){
  e.preventDefault();
  $(".authorization__list").removeClass("authorization__list--password").removeClass("authorization__list--email");
});
