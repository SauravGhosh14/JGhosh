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

//$(document).ready(function(){
//    console.log('abc');
//   // Variable to hold request
//var request;
//
//// Bind to the submit event of our form
//$("#form").submit(function(event){
//
//    // Prevent default posting of form - put here to work in case of errors
//    event.preventDefault();
//
//    // Abort any pending request
//    if (request) {
//        request.abort();
//    }
//    // setup some local variables
//    var $form = $(this);
//
//    // Let's select and cache all the fields
//    //var $inputs = $form.find("input, select, button, textarea");
//
//    // Serialize the data in the form
//    var serializedData = $form.serialize();
//
//    // Let's disable the inputs for the duration of the Ajax request.
//    // Note: we disable elements AFTER the form data has been serialized.
//    // Disabled form elements will not be serialized.
//    //$inputs.prop("disabled", true);
//
//    // Fire off the request to /form.php
//    request = $.ajax({
//        url: "https://script.google.com/macros/s/AKfycbzVGSMo2EFvvWaEfArX1bQBmLk4vawVNQzB_9F6yN6qet1KyAY9/exec",
//        method: "GET",
//        data: serializedData
//    });
//
//    // Callback handler that will be called on success
//    request.done(function (response, textStatus, jqXHR){
//        // Log a message to the console
//        console.log("Hooray, it worked!");
//    });
//
//    // Callback handler that will be called on failure
//    request.fail(function (jqXHR, textStatus, errorThrown){
//        // Log the error to the console
//        console.error(
//            "The following error occurred: "+
//            textStatus, errorThrown
//        );
//    });
//
//    // Callback handler that will be called regardless
//    // if the request failed or succeeded
//    request.always(function () {
//        // Reenable the inputs
//        //$inputs.prop("disabled", false);
//    });
//
//}); 
//});

//function loaded() {
//  console.log("Contact form submission handler loaded successfully.");
//  // bind to the submit event of our form
////    document.getElementById("input").addEventListener("click", function(){
////        handleFormSubmit();
////});
//    
//  var form = document.getElementById('gform'); console.log(form);
//  form.addEventListener("submit", handleFormSubmit, false);
//};
//window.onload.addEventListener("DOMContentLoaded", loaded, false);

//window.onload = function(){
//    var form = document.getElementById('submit'); console.log(form);
//  form.addEventListener("submit", handleFormSubmit, false);
//    
//}


function validEmail(email) { // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function validateHuman(honeypot) {
  if (honeypot) { //if hidden form filled up
    console.log("Robot Detected!");
    return true;
  } else {
    console.log("Welcome Human!");
  }
}

// get all data in form and return object
function getFormData() {
  var form = document.getElementById("gform");
  var elements = form.elements; // all form elements
  var fields = Object.keys(elements).filter(function(k) {
    // the filtering logic is simple, only keep fields that are not the honeypot
    return (elements[k].name !== "honeypot");
  }).map(function(k) {
    if (elements[k].name !== undefined) {
      return elements[k].name;
      // special case for Edge's html collection
    } else if (elements[k].length > 0) {
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k) {
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
    // it to be appended to for each item in the loop
    if (elements[k].type === "checkbox") { // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append 
      // the current checked value to 
      // the end of it, along with 
      // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space 
      // from the  string to make the output 
      // prettier in the spreadsheet
    } else if (elements[k].length) {
      for (var i = 0; i < elements[k].length; i++) {
        if (elements[k].item(i).checked) {
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });

  // add form-specific values into the data
  //data.formDataNameOrder = JSON.stringify(fields);
  //data.formGoogleSheetName = "Data"; // default sheet name
  //data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  console.log(data);
  return data;
}

function handleFormSubmit(event) { // handles form submit withtout any jquery
  showLoading();
  console.log(event);
  event.preventDefault(); // we are submitting via xhr below
  var data = getFormData(); // get the values submitted in the form
  console.log(data);
  /* OPTION: Remove this comment to enable SPAM prevention, see README.md
  if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
    return false;
  }
  */
  var url = "https://script.google.com/macros/s/AKfycbzVGSMo2EFvvWaEfArX1bQBmLk4vawVNQzB_9F6yN6qet1KyAY9/exec";
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4 && xhr.status == 200) {
      hideLoading();
      console.log(xhr);
      showAlert();
      document.getElementById("gform").reset();
      scrollTop();
    }

    //document.getElementById("gform").style.display = "none"; // hide form
    //var thankYouMessage = document.getElementById("message");
    //if (thankYouMessage) {
    //  thankYouMessage.style.display = "block";
    //}
    return;
  };
  // url encode form data for sending as post data
  var encoded = Object.keys(data).map(function(k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
  }).join('&')
  xhr.send(encoded);
}

$(document).ready(function() {
  var form = document.getElementById('submit');
  console.log(form);
  form.addEventListener("submit", handleFormSubmit, false);
});