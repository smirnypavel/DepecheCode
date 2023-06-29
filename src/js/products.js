$("#rose-btn").click(function () {
  if ($(this).hasClass('button-visible')) {
    $("#rose-card").removeClass('card-visible');
    $("#rose-btn").removeClass('button-visible');
  } else {
    $("#rose-card").addClass('card-visible');
    $("#rose-btn").addClass('button-visible');
  }
});

$("#brown-btn").click(function () {
  if ($(this).hasClass('button-visible')) {
    $("#brown-card").removeClass('card-visible');
    $("#brown-btn").removeClass('button-visible');
  } else {
    $("#brown-card").addClass('card-visible');
    $("#brown-btn").addClass('button-visible');
  }
});

$("#green-btn").click(function () {
  if ($(this).hasClass('button-visible')) {
    $("#green-card").removeClass('card-visible');
    $("#green-btn").removeClass('button-visible');
  } else {
    $("#green-card").addClass('card-visible');
    $("#green-btn").addClass('button-visible');
  }
});