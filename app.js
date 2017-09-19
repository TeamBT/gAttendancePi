$(document).ready(function() {

$(document).keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault()
      let userRFID = $('#input').val()
      console.log(userRFID)
      $('#input').val('')      
    }
});
  $('.submit').click(function (event){
    let userRFID = $('#input').val()
    console.log(userRFID)
  })
})



