// remove the start button when clicked
$(document).on('click', '#start', function () {
  $('#start').remove();

  game.loadQuestion();
})

// click event when you click the answer
$(document).on('click', '.answer-button', function (e) {
  game.clicked(e);
})

$(document).on('click', '#reset', function () {
  game.reset();
})

// Variable for questions, an array of objects 
var questions = [{
  question: "Cual es el Lugar Apropiado para insertar el Script de Javascript?",
  answers: ['En la seccion < head >', 'En la seccion < body >', 'Ambas < body > y < head > son correctas'],
  correctAnswer: 'Ambas < body > y < head > son correctas',
  image: "images/imagename",
}, {
  question: "Dentro de que Elemento HTML ponemos el Codigo JavaScript?",
  answers: ["< javascript >", "< script >", "< js >", "< Jscript >"],
  correctAnswer: "< script >",
  image: "images/imagename"
}, {
  question: "Java Y JavaScript Son lenguajes Similares",
  answers: ["Falso", " ", "Verdadero"],
  correctAnswer: "Falso",
  image: "images/imagename"
}];


var game = {
  questions: questions,
  currentQuestion: 0,
  counter: 90,
  correct: 0,
  incorrect: 0,
  unanswered: 0,

  countdown: function () {
    game.counter--;

    $('#counter').html(game.counter);

    if (game.counter <= 0) {
      console.log("TIME UP!")
      game.timeUp();
    }
  },

  loadQuestion: function () {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').html("<h2> Te quedan: <span id ='counter'>90</span> Segundos</h2>");
    $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');

    for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
      $('#subwrapper').append('<button class="answer-button id="button- ' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
    }
  },

  nextQuestion: function () {
    game.counter = 90;

    $('#counter').html(game.counter);

    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function () {
    clearInterval(timer);

    game.unanswered++;

    $('#subwrapper').html('<h2>Se termino el tiempo!<h2>');
    $('#subwrapper').append('<h3>La respuesta Correcta era: ' + questions[game.currentQuestion].correctAnswer + '</h3>');

    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function () {
    clearInterval(timer);

    $('#subwrapper').html('<h2>Terminado!</h2>')
    $('#subwrapper').append('<div class="alert alert-success" role="alert"> Respuestas correctas: ' + game.correct + '</div>');
    $('#subwrapper').append('<div class="alert alert-danger" role="alert"> Respuestas Incorrectas: ' + game.incorrect + '</div>');
    $('#subwrapper').append('<div class="alert alert-dark" role="alert"> Sin Contestar: ' + game.unanswered + '</div>');
    $('#subwrapper').append('<button type="button" class="btn btn-secondary btn-lg" id= reset>Intentar de nuevo?</button>')
  },

  clicked: function (e) {
    clearInterval(timer);

    if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
      game.answeredCorrectly();
    } else {
      game.answeredIncorrectly();
    }
  },

  answeredCorrectly: function () {
    clearInterval(timer);

    game.correct++;

    $('#subwrapper').html('<h2> CORRECTO!</h2>');

    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 2 * 1000);
    } else {
      setTimeout(game.nextQuestion, 2 * 1000);
    }
  },

  answeredIncorrectly: function () {
    clearInterval(timer);

    game.incorrect++;

    $('#subwrapper').html('<h2> Error!</h2>');
    $('#subwrapper').append('<h3>La respuesta correcta es: ' + questions[game.currentQuestion].correctAnswer + '</h3>');

    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 2 * 1000);
    } else {
      setTimeout(game.nextQuestion, 2 * 1000);
    }
  },

  reset: function () {
    game.currentQuestion = 0;
    game.counter = 90;
    game.correct = 0;
    game.incorrect = 0;
    game.unanswered = 0;
    game.loadQuestion();
  }
}
