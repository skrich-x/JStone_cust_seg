//Correcting display issue for select//
$(document).ready(function() {
  $('select').material_select();
  });
//Define and Push form content to Firebase//
var fireUrl ="https://customer-info.firebaseio.com/";
var newCustomer = new Firebase(fireUrl);

$("#customer_form").submit(function(event){
      event.preventDefault();
      var branch = $("#branch_name").val();
      var companyName = $("#company_name").val();
      var accountNumber = $("#account_number").val();
      var firstName = $("#first_name").val();
      var lastName = $("#last_name").val();
      var customerTitle = $("#customer_title").val();
      var customerEmail = $("#customer_email").val();
      var customerOfficePhone = $("#customer_office_phone").val();
      var customerMobilePhone = $("#customer_mobile_phone").val();
      var companyDescription = $("#company_description").val();
      var companyTechs = $("#company_techs").val();
      var companyPrimary = $("#company_primary").val();
      var companySecondary = $("#company_secondary").val();

      //Checking if checkbox is checked//
      var newConstruction = $("#new_construction").is(':checked');
      var retrofit = $("#retrofit").is(':checked');
      var repair = $("#repair").is(':checked');

      newCustomer.push({
        Branch: branch,
        Company: companyName,
        Account: accountNumber,
        FirstName:firstName,
        LastName: lastName,
        Title: customerTitle,
        Email: customerEmail,
        Office: customerOfficePhone,
        Mobile: customerMobilePhone,
        Description: companyDescription,
        Techs: companyTechs,
        PrimaryFocus: companyPrimary,
        SecodaryFocus: companySecondary,
        NewConstruction: newConstruction,
        Retrofit: retrofit,
        Repair: repair
      });


      $("#customer_form").each(function(){
        $('#modal1').openModal();
        this.reset();
        $(window).scrollTop(0);
      });

});
