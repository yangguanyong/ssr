$(function () {
  $("li:last").mouseover(function () {
    $(".menu").show();
  }).mouseout(function () {
    $(".menu").hide();
  });
  $('.menu').mouseover(function () {
    $(".menu").show();
  }).mouseout(function () {
    $(".menu").hide();
  });
  $('.menu').click(function () {
    alert('a')
  })
})