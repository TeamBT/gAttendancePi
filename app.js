$(document).ready(function() {
  const URL = 'https://cors-anywhere.herokuapp.com/https://arcane-spire-19269.herokuapp.com/student/update?rfid='
  $(document).keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault()
      let userRFID = $('#input').val()

      console.log(userRFID)

      $.ajax({
        url: URL + userRFID,
        type: 'PUT',
        data: {},
        dataType: 'json',
        success: function(data) {
          $('#input').val('')
        },
        error: function(err) {
          console.log(err);
        }
      })
      $('#input').val('')
    }
  });

  $('.submit').click(function(event) {
    event.preventDefault()
    let userRFID = $('#input').val()

    console.log(userRFID)

    $('#input').val('')
    $.ajax({
      url: URL + userRFID,
      type: 'PUT',
      data: {},
      dataType: 'json',
      success: function(data) {
        $('#input').val('')
      },
      error: function(err) {
        console.log(err);
      }
    })
    $('#input').val('')
  })
})
