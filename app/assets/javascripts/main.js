$(document).ready(function(){
  Site.setSubmitEvent();
  Site.sizeForm();
  Site.pageResizeListeners();
  Site.animateAbout();
  Site.setBackEvent();
  Site.setResubmitEvent();
  Site.setTweetShareEvent();
  Site.setFacebookEvent();
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
    $('#salary-guess-2013').attr('readonly', true);
    $('#user-input').removeClass('large-6');
    $('#output-container').fadeIn();
    $('.form-subheader').removeClass('entry-form-header').addClass('entry-form-header-min')
    $('.salary-input-container').removeClass('large-5').addClass('large-8');
    $('.salary-guess-input-container').removeClass('large-3').addClass('large-4');
    $('.happiness-input-container').addClass('happiness-input-container-min');
    $('.side-column').removeClass('large-3').removeClass('columns').hide();
    $('#submit-entry').hide();
    $('#resubmit-entry').show();
    $('#back-button').show();
  },


  animateBack: function() {
    $('#input-output-container').removeClass('large-12').removeClass('columns');
    $('#input-container').removeClass('large-3').removeClass('columns').removeClass('input-container-min');
    $('.salary-input-container-min').addClass('large-5').removeClass('large-7').addClass('salary-input-container').removeClass('salary-input-container-min');
    $('.salary-guess-input-container-min').removeClass('large-5').addClass('large-3').addClass('salary-guess-input-container').removeClass('salary-guess-input-container-min');
    $('#salary-guess-2000').attr('readonly', false);
    $('#salary-guess-2013').attr('readonly', false);
    $('#user-input').addClass('large-6');
    $('.form-subheader').addClass('entry-form-header').removeClass('entry-form-header-min')
    $('.salary-input-container').removeClass('large-8').addClass('large-5');
    $('.salary-guess-input-container').removeClass('large-4').addClass('large-3');
    $('.happiness-input-container').removeClass('happiness-input-container-min');
    $('.side-column').addClass('large-3').addClass('columns').show();
    $('#submit-entry').show();
    $('#resubmit-entry').hide();
    $('#back-button').hide();
    $('#output-container').hide();
    $('#geo-zone').val('');
    $('#city-type').val('');
    $('#race').val('');
    $('#gender').val('');
    $('#age').val('');
    $('#education-level').val('');
    $('#salary-2013').val('');
    $('#salary-guess-2013').val('');
    $('#income-happiness-2013').val('');
    $('#overall-happiness-2013').val('');
    $('#salary-2000').val('');
    $('#salary-guess-2000').val('');
    $('#income-happiness-2000').val('');
    $('#overall-happiness-2000').val('');
  },
  

  setSubmitEvent: function() {
    $('#user-input-form')
      .on('invalid', function () {
        var invalidFields = $(this).find('[data-invalid]');
        console.log(invalidFields);
      })
      .on('valid', function(e) {
        var geoZone = $('#geo-zone').val(), cityType = $('#city-type').val(), race = $('#race').val(), gender = $('#gender').val(), education = $('#education-level').val(), salary2013 = $('#salary-2013').val(), salaryGuess2013 = $('#salary-guess-2013').val(), incomeHappiness2013 = $('#income-happiness-2013').val(), overallHappiness2013 = $('#overall-happiness-2013').val(), salary2000 = $('#salary-2000').val(), salaryGuess2000 = $('#salary-guess-2000').val(), incomeHappiness2000 = $('#income-happiness-2000').val(), overallHappiness2000 = $('#overall-happiness-2000').val(), age = $('#age').val(), invalidFields = $('#user-input-form').find('[data-invalid]'), submitType = 'submit';
        var data = {geo_zone: geoZone, city_type: cityType, race: race, gender: gender, education: education, age: age, salary_2013: salary2013, salary_guess_2013: salaryGuess2013, income_happiness_2013: incomeHappiness2013, overall_happiness_2013: overallHappiness2013, salary_2000: salary2000, salary_guess_2000: salaryGuess2000, income_happiness_2000: incomeHappiness2000, overall_happiness_2000: overallHappiness2000, submitType: submitType};
          $.ajax({
              url: 'submit_entry',
              type: 'POST',
              data: data, 
              success: function(){
              }
            });
            Site.animateSubmit();
      });
  },

  setBackEvent: function() {
    $('#back-button').click(function(e){
      e.preventDefault();
      Site.animateBack();
    });
  },
  
  setResubmitEvent: function() {
    $('#user-input-form')
      .on('invalid', function () {
        var invalidFields = $(this).find('[data-invalid]');
        console.log(invalidFields);
      })
      .on('valid', function(e) {
        var geoZone = $('#geo-zone').val(), cityType = $('#city-type').val(), race = $('#race').val(), gender = $('#gender').val(), education = $('#education-level').val(), salary2013 = $('#salary-2013').val(), salaryGuess2013 = $('#salary-guess-2013').val(), incomeHappiness2013 = $('#income-happiness-2013').val(), overallHappiness2013 = $('#overall-happiness-2013').val(), salary2000 = $('#salary-2000').val(), salaryGuess2000 = $('#salary-guess-2000').val(), incomeHappiness2000 = $('#income-happiness-2000').val(), overallHappiness2000 = $('#overall-happiness-2000').val(), age = $('#age').val(), invalidFields = $('#user-input-form').find('[data-invalid]'), submitType = 'resubmit';
        var data = {geo_zone: geoZone, city_type: cityType, race: race, gender: gender, education: education, age: age, salary_2013: salary2013, salary_guess_2013: salaryGuess2013, income_happiness_2013: incomeHappiness2013, overall_happiness_2013: overallHappiness2013, salary_2000: salary2000, salary_guess_2000: salaryGuess2000, income_happiness_2000: incomeHappiness2000, overall_happiness_2000: overallHappiness2000, submitType: submitType};
          $.ajax({
              url: 'submit_entry',
              type: 'POST',
              data: data, 
              success: function(){
              }
            });
      });
  },

  setTweetShareEvent: function() {
    $('#tweet-button').click(function(e){
      e.preventDefault();
      var overallPercentile = $('#all-percentile-output').html();
      var tweetText = 'I ranked in the ' + overallPercentile + ' percentile. Find your ranking at www.usincomecalculator.com #incomeinequality';
      var tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(tweetText);
      window.open(tweetUrl, '_blank', 'height=300,width=600');
    });
  },

  setFacebookEvent: function() {
    $('#facebook-button').click(function(e){
      e.preventDefault();
      var overallPercentile = $('#all-percentile-output').html();
      var facebookDescription = 'I ranked in the ' + overallPercentile + ' percentile. Find your ranking at www.usincomecalculator.com #incomeinequality';
      var siteUrl = 'http://localhost:3000';
      var facebookTitle = 'US Income Calculator';
      var facebookImage = 'http://webcastnewsroom.com/wp-content/uploads/2013/10/redsox11.jpg';
      var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?s=100&p[title]=' + encodeURIComponent(facebookTitle) + '&p[summary]=' + encodeURIComponent(facebookDescription) + '&p[url]=' + encodeURIComponent(siteUrl) + '&p[images][0]=' + encodeURIComponent(facebookImage);
      window.open(facebookUrl, '_blank', 'height=300,width=600');
    });
  }
}
