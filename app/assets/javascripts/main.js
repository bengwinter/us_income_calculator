$(document).ready(function(){
  Site.setSubmitEvent();
  Site.sizeForm();
  Site.pageResizeListeners();
  Site.animateAbout();
  Site.animateInheritanceCalculator();
  Site.setBackEvent();
  Site.setResubmitEvent();
});

var Site = {
  sizeForm: function() {
    $("#container").css('max-height', $(window).height() - $('#bottom-bar').height());
  },

  pageResizeListeners: function() {
    $(window).resize(function() {
      Site.sizeForm();
    });
  },

  animateAbout: function() {
    $('#about').click(function(e){
      e.preventDefault();
      if($('#bottom-bar').hasClass('open')) {
        $('#bottom-bar').removeClass('open').transition({
          height: "25px"
        });
      }else{
        $('#bottom-bar').addClass('open').transition({
          height: "200px"
        });
      }
    })
  },

  animateSubmit: function() {
    $('#user-input').removeClass('large-12').addClass('large-3');
    $('.form-column').removeClass('large-4').removeClass('right-border-column').addClass('large-12').addClass('form-column-min');
    $('.form-subheader').removeClass('entry-form-header').addClass('entry-form-header-min')
    $('#submit-entry').hide();
    $('#entry-form-guesses').hide();
    $('#resubmit-entry').show();
    $('#back-button').show();
    $('#output').fadeIn();
    $('#inheritance-calculator-container').removeClass('display-calc').hide();
  },

  animateBack: function() {
    $('#user-input').addClass('large-12').removeClass('large-3');
    $('.form-column').addClass('large-4').addClass('right-border-column').removeClass('large-12').removeClass('form-column-min');
    $('.form-subheader').addClass('entry-form-header').removeClass('entry-form-header-min')
    $('#submit-entry').show();
    $('#entry-form-guesses').show();
    $('#resubmit-entry').hide();
    $('#back-button').hide();
    $('#output').hide();
    $('#inheritance-calculator-container').removeClass('display-calc').hide();
  },

  animateInheritanceCalculator: function() {
    $('#inheritance-calculator-link').click(function(e){
      e.preventDefault();
      if($('#inheritance-calculator-container').hasClass('display-calc')) {
          $('#inheritance-calculator-container').removeClass('display-calc').hide();
        } else {
          $('#inheritance-calculator-container').addClass('display-calc').show();
        }
    });
  },

  renderGuessData: function(data) {
    var salaryGuess = data["salary_guess"], wealthGuess = data["wealth_guess"], noEntry = "No Guess";
    if(salaryGuess !== "" && wealthGuess !== "") {
      $('#salary-percentile-guess').append(salaryGuess);
      $('#wealth-percentile-guess').append(wealthGuess);
      $('#entry-form-guesses-static').addClass('entry-form-guesses-static-show').show();
    } else if(salaryGuess === "" && wealthGuess !== "") {
      $('#salary-percentile-guess').append(noEntry);
      $('#wealth-percentile-guess').append(wealthGuess);
      $('#entry-form-guesses-static').addClass('entry-form-guesses-static-show').show();
    } else if(salaryGuess !== "" && wealthGuess === "") {
      $('#salary-percentile-guess').append(salaryGuess);
      $('#wealth-percentile-guess').append(noEntry);
      $('#entry-form-guesses-static').addClass('entry-form-guesses-static-show').show();
    } else {
      $('#entry-form-guesses-static').removeClass('entry-form-guesses-static-show').hide();
    };
  
  },

  renderOutput: function(data) {
    var html = "<h2>Zip Code: </h2>" + data["zip_code"] + "<h3>Salary Guess: </h3>" + data["salary_guess"]
    $('#output').append(html);
  },

  setSubmitEvent: function() {
    $('#submit-entry').click(function(e){
      e.preventDefault();
      var zip_code = $('#zip-code').val(), race = $('#race').val(), gender = $('#gender').val(), education = $('#education-level').val(), salary = $('#salary').val(), assets = $('#assets').val(), inherited_assets = $('#inherited-assets').val(), salary_guess = $('#salary-guess').val(), wealth_guess = $('#wealth-guess').val(), self_wealth_descr = $('#self-wealth-descr').val(), self_happiness_descr = $('#self-happiness-descr').val(), age = $('#age').val();
      var data = {zip_code: zip_code, race: race, gender: gender, education: education, salary: salary, assets: assets, inherited_assets: inherited_assets, salary_guess: salary_guess, wealth_guess: wealth_guess, self_happiness_descr: self_happiness_descr, self_wealth_descr: self_wealth_descr, age: age};
      
      $.ajax({
        url: 'submit_entry',
        type: 'POST',
        data: data, 
        success: function(){
        }
      });
      Site.animateSubmit();
      Site.renderGuessData(data);
      Site.renderOutput(data)
    });
  },

  setBackEvent: function() {
    $('#back-button').click(function(e){
      e.preventDefault();
      Site.animateBack();
    });
  },
  
  setResubmitEvent: function() {
    $('#resubmit-entry').click(function(e){
      e.preventDefault();
      Site.animateBack();
    });
  },

}