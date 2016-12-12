$(document).ready(function () {
  $(".btn").click(function () {
    $(".btn").after("<img class='inserted' id='insImage' src='img/cat.jpg' alt='An image of a cat.'/>");
    $(".btn").after("<p class='inserted'>Click image to remove.</p>");
  });

  $(document).on("click", "#insImage", function () {
    $(".inserted").remove();
  });
});