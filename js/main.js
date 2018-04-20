var $form = $('form#jghoshhealthchart'),
    url = 'https://script.google.com/macros/s/AKfycbzVGSMo2EFvvWaEfArX1bQBmLk4vawVNQzB_9F6yN6qet1KyAY9/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
      console.log('Done');
  );
})