$(document).ready(function() {
const putURL = 'https://arcane-spire-19269.herokuapp.com/student/update?rfid='
  $(document).keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault()
      let userRFID = $('#input').val()

      console.log(userRFID)

      // $.ajax({
      //   url: URL + userRFID,
      //   type: 'PUT',
      //   data: {},
      //   dataType: 'json',
      //   success: function(data) {
      //      $('#input').val('')
      //   },
      //   error: function(err) {
      //     alert(err)
      //   },
      // })
      $('#input').val('')
    }
  });


  $('.submit').click(function(event) {
    e.preventDefault()
    let userRFID = $('#input').val()

    console.log(userRFID)

    $('#input').val('')
    // $.ajax({
    //   url: URL + userRFID,
    //   type: 'PUT',
    //   data: {},
    //   dataType: 'json',
    //   success: function(data) {
    //      $('#input').val('')
    //   },
    //   error: function(err) {
    //     alert(err)
    //   },
    // })
    $('#input').val('')
  })
})
