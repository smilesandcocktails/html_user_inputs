$(document).ready(function() {
  var $form = $('form')
  var $links = $('a')

  $links.on('click', function(e) {
    e.preventDefault()
  })

  $form.on('submit', function (e) {
    e.preventDefault()
    var array = $(this).serializeArray()

    var $h1 = $('h1')
    // var $name = $('body').find('#name')
    // var $email = $('body').find('#email')

    console.log(array)

    // array.forEach(function(a){
    //   console.log(a.value)
    //   $h1.text(a)
    // })

    // var inputArr = array.map(function (input) {
    //   return input.val
    // })

    var inputStr = array.reduce(function (accu,next) {
      accu += ', ' + next.value
      return accu
    }, ' ')

    $('h1').text(inputArr.join(', '))

  })
})
