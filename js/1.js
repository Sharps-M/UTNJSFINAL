$(document).ready(function () {
  $('#UsandoJQuery').validate({
    rules: {
      metodo2: {
        required: true,
        email: true
      },
      metodo3: {
        required: true,
        minlength: 5
      }
    },
    submitHandler: function () {
      window.location.href = "trivia.html";
    }
  });
});