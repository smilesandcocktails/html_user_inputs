$(document).ready(function() {
  var $form = $('form')
  var $links = $('a')

  // $links.on('click', function(e) {
  //   e.preventDefault()
  // })

  $form.on('submit', function (e) {
    e.preventDefault()
    alert('You have submitted your enquiry.')
    var array = $(this).serializeArray()
    var $h1 = $('h1')
    var textContent = ''

    array.forEach(function(a){
      textContent += a.value
      $h1.text(textContent)
    })


    // var inputArr = array.map(function (input) {
    //   return input.val
    // })

    // var inputStr = array.reduce(function (accu,next) {
    //   accu += ', ' + next.value
    //   return accu
    // }, ' ')
    //
    // $('h1').text(inputArr.join(', '))

  })
})
