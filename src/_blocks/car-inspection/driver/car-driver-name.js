if ($("#driver-name-all").length) {
  var fullname = [];
  fullname = document.querySelector("#driver-name-all").value.split(",");

  $("#driver").autocomplete({
    source: fullname,
    delay: 100,
    minLength: 0,
    open: function(event, ui) {
      var autocomplete = $(".ui-autocomplete");
      var oldTop = autocomplete.offset().top;
      var newTop = oldTop + 11;
      autocomplete.css("top", newTop);
    },
    select: function(e, ui){
      fullnameValidation(ui.item.value);
    }
  }).on("focus", function(){
    $(this).autocomplete("search", "");
  });

  $("#driver").on("keyup change", function(){
    fullnameValidation(this.value);
  });

  function fullnameValidation(name){
    if (fullname.indexOf(name) != -1) {
      $(".btn").prop("disabled", false);
    } else {
      $(".btn").prop("disabled", true);
    }
  }
}
