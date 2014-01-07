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
    $('#input-output-container').addClass('large-12').addClass('columns');
    $('#input-container').addClass('large-3').addClass('columns').addClass('input-container-min');
    $('.salary-input-container').removeClass('large-5').addClass('large-7').addClass('salary-input-container-min').removeClass('salary-input-container');
    $('.salary-guess-input-container').removeClass('large-3').addClass('large-5').addClass('salary-guess-input-container-min').removeClass('salary-guess-input-container');
    $('#salary-guess-2000').attr('readonly', true);
    $('#user-input').removeClass('large-6');
    $('#output-container').fadeIn();
    $('.form-subheader').removeClass('entry-form-header').addClass('entry-form-header-min')
    $('.salary-input-container').removeClass('large-5').addClass('large-8');
    $('.salary-guess-input-container').removeClass('large-3').addClass('large-4');
    $('.happiness-input-container').addClass('happiness-input-container-min');
    $('.side-column').removeClass('large-3').removeClass('columns').hide();
    $('#submit-entry').hide();
    $('#entry-form-guesses').hide();
    $('#resubmit-entry').show();
    $('#back-button').show();

  },

  animateBack: function() {
    $('#user-input').addClass('large-6').removeClass('large-3');
    $('.form-subheader').addClass('entry-form-header').removeClass('entry-form-header-min')
    $('.happiness-input-container').removeClass('happiness-input-container-min');
    $('.side-column').addClass('large-3').addClass('columns').show();
    $('#submit-entry').show();
    $('#entry-form-guesses-static').removeClass('entry-form-guesses-static-show').hide();
    $('#entry-form-guesses').show();
    $('#resubmit-entry').hide();
    $('#back-button').hide();
    $('#output-container').hide();
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
    $('#output-container').empty();
  },

  setSubmitEvent: function() {
    $('#submit-entry').click(function(e){
      e.preventDefault();
      var geo_zone = $('#geo-zone').val(), city_type = $('#city-type').val(), race = $('#race').val(), gender = $('#gender').val(), education = $('#education-level').val(), salary_2013 = $('#salary-2013').val(), salary_guess_2013 = $('#salary-guess-2013').val(), income_happiness_2013 = $('#income-happiness-2013').val(), overall_happiness_2013 = $('#overall-happiness-2013').val(), salary_2000 = $('#salary-2000').val(), salary_guess_2000 = $('#salary-guess-2000').val(), income_happiness_2000 = $('#income-happiness-2000').val(), overall_happiness_2000 = $('#overall-happiness-2000').val(), age = $('#age').val(), invalidFields = $('#user-input-form').find('[data-invalid]');
      var data = {geo_zone: geo_zone, city_type: city_type, race: race, gender: gender, education: education, age: age, salary_2013: salary_2013, salary_guess_2013: salary_guess_2013, income_happiness_2013: income_happiness_2013, overall_happiness_2013: overall_happiness_2013, salary_2000: salary_2000, salary_guess_2000: salary_guess_2000, income_happiness_2000: income_happiness_2000, overall_happiness_2000: overall_happiness_2000};
      if((geo_zone !== null && city_type !== null && race !== null && gender !== null && education !== null && salary_2013 !== "" && salary_guess_2013 !== "" && salary_2000 !== "" && salary_guess_2000 !== "" && age !== null) && invalidFields.length === 0) {
          $.ajax({
            url: 'submit_entry',
            type: 'POST',
            data: data, 
            success: function(){
            }
          });
          Site.animateSubmit();
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
      if((geo_zone !== null && city_type !== null && race !== null && gender !== null && education !== null && salary_2013 !== "" && salary_guess_2013 !== "" && salary_2000 !== "" && salary_guess_2000 !== "" && age !== null) && invalidFields.length === 0) {
          // Site.renderUpdate(data);
      };
    });
  }
}