$(document).ready(function(){
  $('#submit-entry').click(function(e){
    e.preventDefault();
    var zip_code = $('#zip-code').val();
    var race = $('#race').val();
    var gender = $('#gender').val();
    var education = $('#education-level').val();
    var salary = $('#salary').val();
    var assets = $('#assets').val();
    var inherited_assets = $('#inherited-assets').val();
    var salary_guess = $('#salary-guess').val();
    var wealth_guess = $('#wealth-guess').val();

    $('#zip-code').val('');
    $('#race').val('');
    $('#gender').val('');
    $('#education-level').val('');
    $('#salary').val('');
    $('#assets').val('');
    $('#inherited-assets').val('');
    $('#salary-guess').val('');
    $('#wealth-guess').val('');   

    $.ajax({
      url: 'submit_entry',
      dataType: 'script',
      type: 'POST',
      data: {zip_code: zip_code, race: race, gender: gender, education: education, salary: salary, assets: assets, inherited_assets: inherited_assets, salary_guess: salary_guess, wealth_guess: wealth_guess}, 
      success: function(){
      }
    });
    return false;
  });
  
});
