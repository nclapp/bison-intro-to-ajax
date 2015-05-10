$(function(){
  // Grab new-contact link and bind a click event to it
  $('#new-contact').click(function(event){
    // Browser stop, just stop
    event.preventDefault();
    // Where should I go to get form?
    var myUrl = $(this).attr("href"); // whatever was clicked is `this` (link in this case)
    // console.log(url); test that it's going to /contacts/new. This is just the same place the link usually goes
    // Make a request to server to get form
    $.ajax({
      url: myUrl})  //type: default is get so we don't have to do anything here
        .done(function(response){ // This is the first argument, JS calls it data but response is more clear
          // console.log(arguments);  // arguments is a special variable taht all functions know
          // console.log(response);  // this returns the html of page we'd normally go to
          // At this point JS is getting way more than it nee
          // HIDE THE BUTTON
          // `this` doesn't work anymore, now the window object again, have to select again
          $('#new-contact').hide() // now button disappears on click
          // ADD THE FORM
          $('main').append(response) // `main` is the section we're operating in
          // JS is middle man now, is the http client
        })
    });

  // Have to use `on` since there isn't a form yet
  // select the form and bind to submit
  $("main").on("submit", "#contact-form", function(event){  // "When Duke gets here tell him to open the door"
    // Tested and it wasn't specific enough so added ID to form
    // browser stop again
    event.preventDefault();
    var contact = $(this).serialize();
    var url = $(this).attr("action");
    var type = "POST"
    // send the request
    $.ajax({
      url: url,
      type: type,
      data: contact
    })
    .done(function(response){
      // Add data to the table
      $("tbody").append(response);
      // get rid of form
      $("#contact-form").remove();
      // show button again
      $("#new-contact").show();

    })
  });
})
