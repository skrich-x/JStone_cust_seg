var fireUrl = "https://luminous-inferno-3512.firebaseio.com/";
var newCustomer = new Firebase(fireUrl);

$("#customer_form").submit(function(event){
      event.preventDefault();
      var firstName = $("#first_name").val();
      newCustomer.push({FirstName: firstName});
});
