$(function () {
  console.log('i am fooM')
  $('#btn').on('click', function () {
    const txt = $('#txt').val()
    $.ajax({
      url: '/testPost',
      data: {
        comment: txt
      }
    }).always(function (res) {
      console.log(res)
      window.location.reload()
    })
  })
})