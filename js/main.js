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

$(document).ready(function(){
    var form = $('form');
    var url = 'https://script.google.com/macros/s/AKfycbzVGSMo2EFvvWaEfArX1bQBmLk4vawVNQzB_9F6yN6qet1KyAY9/exec';
    

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(function(response) {
      alert('Hello');
		}
  );
})
});


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
