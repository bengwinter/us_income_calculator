$(document).ready(function(){
  Site.setSubmitEvent();
  Site.sizeForm();
  Site.pageResizeListeners();
  Site.animateAbout();
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
  },

  animateBack: function() {
    $('#user-input').addClass('large-12').removeClass('large-3');
    $('.form-column').addClass('large-4').addClass('right-border-column').removeClass('large-12').removeClass('form-column-min');
    $('.form-subheader').addClass('entry-form-header').removeClass('entry-form-header-min')
    $('#submit-entry').show();
    $('#entry-form-guesses-static').removeClass('entry-form-guesses-static-show').hide();
    $('#entry-form-guesses').show();
    $('#resubmit-entry').hide();
    $('#back-button').hide();
    $('#output').hide();
    $('#geo-zone').val('');
    $('#city-type').val('');
    $('#race').val('');
    $('#gender').val('');
    $('#education-level').val('');
    $('#salary-2103').val('');
    $('#assets').val('');
    $('#inherited-assets').val('');
    $('#salary-guess-2013').val('');
    $('#wealth-guess').val('');
    $('#self-wealth-descr').val('');
    $('#self-happiness-descr').val('');
    $('#age').val('');
    $('#output').empty();
  },

  renderGuessData: function(data) {
    var salaryGuess = data["salary_guess_2013"], wealthGuess = "N/A", noEntry = "No Guess";
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
    var html = "<ul>Data<li>Salary: " + data["salary-2013"] + "</li><li>Zip Code: " + data["geo_zone"] + "</li><li>City Type: " + data["city_type"] + "</li><li>Race: " + data["race"] + "</li><li>Gender: " + data["gender"] + "</li><li>Education: " + data["education"] + "</li><li>Age: " + data["age"] + "</li><li>Salary Guess: " + data["salary_guess_2013"] + "</li><li>Happiness Rating: " + data["self_happiness_descr"] + "</li><li>Wealth Happiness Rating: " + data["self_wealth_descr"] + "</li></ul>"
    $('#output').append(html);
  },

  renderUpdate: function(data) {
    $('#output').empty();
    var updated_html = "<ul>Data<li>Salary: " + data["salary-2013"] + "</li><li>Geo Zone: " + data["geo_zone"] + "</li><li>City Type: " + data["city_type"] + "</li><li>Race: " + data["race"] + "</li><li>Gender: " + data["gender"] + "</li><li>Education: " + data["education"] + "</li><li>Age: " + data["age"] + "</li><li>Salary Guess: " + data["salary_guess_2013"] + "</li><li>Happiness Rating: " + data["self_happiness_descr"] + "</li><li>Wealth Happiness Rating: " + data["self_wealth_descr"] + "</li></ul>"
    $('#output').append(updated_html);
  },

  setSubmitEvent: function() {
    $('#submit-entry').click(function(e){
      e.preventDefault();
      var geo_zone = $('#geo-zone').val(), city_type = $('#city-type').val(), race = $('#race').val(), gender = $('#gender').val(), education = $('#education-level').val(), salary_2013 = $('#salary-2013').val(), salary_guess_2013 = $('#salary-guess-2013').val(), income_happiness_2013 = $('#income-happiness-2013').val(), overall_happiness_2013 = $('#overall-happiness-2013').val(), salary_2000 = $('#salary-2000').val(), salary_guess_2000 = $('#salary-guess-2000').val(), income_happiness_2000 = $('#income-happiness-2000').val(), overall_happiness_2000 = $('#overall-happiness-2000').val(), age = $('#age').val(), invalidFields = $('#user-input-form').find('[data-invalid]');
      var data = {geo_zone: geo_zone, city_type: city_type, race: race, gender: gender, education: education, age: age, salary_2013: salary_2013, salary_guess_2013: salary_guess_2013, income_happiness_2013: income_happiness_2013, overall_happiness_2013: overall_happiness_2013, salary_2000: salary_2000, salary_guess_2000: salary_guess_2000, income_happiness_2000: income_happiness_2000, overall_happiness_2000: overall_happiness_2000};
      if((geo_zone !== null && city_type !== null && race !== null && gender !== null && education !== null && salary !== "" && age !== null) && invalidFields.length === 0) {
          $.ajax({
            url: 'submit_entry',
            type: 'POST',
            data: data, 
            success: function(){
            }
          });
          Site.animateSubmit();
          Site.renderGuessData(data);
          // Site.renderOutput(data)
        };
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
      var geo_zone = $('#geo-zone').val(), city_type = $('#city-type').val(), race = $('#race').val(), gender = $('#gender').val(), education = $('#education-level').val(), salary_2013 = $('#salary-2013').val(), salary_guess_2013 = $('#salary-guess-2013').val(), income_happiness_2013 = $('#income-happiness-2013').val(), overall_happiness_2013 = $('#overall-happiness-2013').val(), salary_2000 = $('#salary-2000').val(), salary_guess_2000 = $('#salary-guess-2000').val(), income_happiness_2000 = $('#income-happiness-2000').val(), overall_happiness_2000 = $('#overall-happiness-2000').val(), age = $('#age').val(), invalidFields = $('#user-input-form').find('[data-invalid]');
      var data = {geo_zone: geo_zone, city_type: city_type, race: race, gender: gender, education: education, age: age, salary_2013: salary_2013, salary_guess_2013: salary_guess_2013, income_happiness_2013: income_happiness_2013, overall_happiness_2013: overall_happiness_2013, salary_2000: salary_2000, salary_guess_2000: salary_guess_2000, income_happiness_2000: income_happiness_2000, overall_happiness_2000: overall_happiness_2000};
      if((geo_zone !== null && city_type !== null && race !== null && gender !== null && education !== null && salary !== "" && age !== null) && invalidFields.length === 0) {
          Site.renderUpdate(data);
      };
    });
  }
}