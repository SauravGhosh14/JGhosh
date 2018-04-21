//var $form = $('form#jghoshhealthchart'),
//    url = 'https://script.google.com/macros/s/AKfycbzVGSMo2EFvvWaEfArX1bQBmLk4vawVNQzB_9F6yN6qet1KyAY9/exec'
//
//$('#submit-form').on('click', function(e) {
//  e.preventDefault();
//  var jqxhr = $.ajax({
//    url: url,
//    method: "GET",
//    dataType: "json",
//    data: $form.serializeObject()
//  }).success(
//    // do something
//      alert("The paragraph was clicked.");
//  );
//})

//$(document).ready(function(){
//    console.log('123');
//    var form = $('form');
//    var url = 'https://script.google.com/macros/s/AKfycbzVGSMo2EFvvWaEfArX1bQBmLk4vawVNQzB_9F6yN6qet1KyAY9/exec';
//    
//
//$('#submit-form').on('click', function(e) {
//  e.preventDefault();
//  var jqxhr = $.ajax({
//    url: url,
//    method: "GET",
//    dataType: "json",
//    data: $form.serializeObject()
//  }).success(function(response) {
//      alert('Hello');
//		}
//  );
//})
//});


//$(function() {
//	// Set up an event listener for the contact form.
//	$(form).submit(function(e) {
//		// Stop the browser from submitting the form.
//		e.preventDefault();
//
//		// Serialize the form data.
//		var formData = $(form).serialize();
//
//		// Submit the form using AJAX.
//		$.ajax({
//			type: 'POST',
//			url: $(form).attr('action'),
//			data: formData
//		})
//		.done(function(response) {
//		})
//		.fail(function(data) {
//		});
//	});
//});

$(document).ready(function(){
    console.log('123');
   // Variable to hold request
var request;

// Bind to the submit event of our form
$("#form").submit(function(event){

    // Prevent default posting of form - put here to work in case of errors
    event.preventDefault();

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    //var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    //$inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzVGSMo2EFvvWaEfArX1bQBmLk4vawVNQzB_9F6yN6qet1KyAY9/exec",
        method: "GET",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        //$inputs.prop("disabled", false);
    });

}); 
});
