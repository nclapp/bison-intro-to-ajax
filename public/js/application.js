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

  // select the form and bind to the submit
  $('main').on('submit', '#contact-form', function(event){
    // Browser stop. Seriously don't do it.
    event.preventDefault();
    // pull some info from that form
    var contact = $(this).serialize();
    var url = $(this).attr('action');
    var type = "POST";

    // Send the request
    $.ajax({
      url: url,
      type: type,
      data: contact
    })
      .done(function(response){
        // Add response to the table
        $('tbody').append(response);
        // git rid of the form
        $('#contact-form').remove();
        // show the button again
        $('#new-contact').show();
      })
  });
})
