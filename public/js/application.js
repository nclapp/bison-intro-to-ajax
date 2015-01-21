$(function(){
  // Grab the new-contact link and bind a click event to it
  $('#new-contact').click(function(event){
    // Browser stop. just stop
    event.preventDefault();
    // Where shoult I go to get the form
    var myUrl = $(this).attr('href');
    // Make a request to the server to get the form
    $.ajax({url: myUrl})
      .done(function(response){
        // Hide the button
        $('#new-contact').hide();
        // add the form
        $('main').append(response);
      })
  });
})
