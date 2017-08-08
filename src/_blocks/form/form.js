// Validation form
  function validEmpty(el) {
    var regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
        regName = /^[A-Za-zА-Яа-яЁё]{2,}$/,
        type = el.attr("type"),
        $parent = el.parent(),
        val = el.val(),
        name = el.attr("name");
    switch(type) {
      case "email":
        checkEmail();
        break;
      case "text":
        checkName();
        break;
      case "password":
        checkPassword();
        break;
    }
    function checkEmail() {
      if (val.search(regEmail) != 0) {
        invalidField(el, $parent, "E-mail не правильный");
      } else {
        validField(el, $parent);
      }
    }
    function checkPassword() {
      if (val.length == 0) {
        invalidField(el, $parent, "Пароль не правильный");
      } else {
        validField(el, $parent);
      }
    }
    function checkName() {
      if (val.search(regName) != 0) {
        invalidField(el, $parent);
      } else {
        validField(el, $parent);
      }
    }
    function validField(el, $parent){
      el.removeClass("form__input--error");
      $parent.find(".form__message").remove();
    }
    function invalidField(el, $parent, message){
      el.addClass("form__input--error");
      $parent.find(".form__message").remove();
      $parent.append('<span class="form__message">' + message + '<svg width="18" height="18"><use xlink:href="#icon-warning"/></svg></span>');
    }
  }

// ----------------------------------------------------

// Submit on form
  // Search keyup on input
    $(".form :required").on("keyup change", function(){
      validEmpty($(this));
    });
  // ----------------------------------------------------
  $(".form [type='submit']").on("click", function(e){
    var $form = $(this).closest("form");
    $form.find(":required").each(function(){
      validEmpty($(this));
    });
    if ($form.find(".form__input--error").length != 0) {
      e.preventDefault();
    }
  });
  $(".form").on("submit", function(e){
    var $form = $(this);
    e.preventDefault();
    if ($form.find(".form__input--error").length == 0) {
      $.ajax({
        url: $form.attr("action"),
        type: $form.attr("method"),
        data: $form.serialize(),
        success: function(message) {
          console.log("YES");
        },
        error: function(){
          console.log("NO");
        }
      });
    }
  });
// ----------------------------------------------------
