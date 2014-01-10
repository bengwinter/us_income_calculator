$(document).ready(function(){
  Site.setSubmitEvent();
  Site.sizeForm();
  Site.pageResizeListeners();
  Site.animateAbout();
  Site.setBackEvent();
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
    $('.salary-input-container').removeClass('small-9').addClass('small-7').addClass('salary-input-container-min').removeClass('salary-input-container');
    $('.salary-guess-input-container').removeClass('small-3').addClass('small-5').addClass('salary-guess-input-container-min').removeClass('salary-guess-input-container');
    $('#user-input').removeClass('user-input-class').removeClass('large-6').removeClass('columns').addClass('user-input-min-class');
    $('#output-container').fadeIn();
    $('.side-column').removeClass('large-3').removeClass('columns').hide();
    $('#demographic-entry-container').show();
    $('#submit-entry').val('UPDATE').removeClass('submit-entry-button-large').addClass('submit-entry-button-min');
    $('#form-button-wrapper').addClass('main-button-wrapper-min').removeClass('main-button-wrapper');
    $('#back-button').show();
  },


  animateBack: function() {
    $('#input-output-container').removeClass('large-12').removeClass('columns');
    $('#input-container').removeClass('large-3').removeClass('columns').removeClass('input-container-min');
    $('.salary-guess-input-container-min').removeClass('small-5').addClass('small-3').addClass('salary-guess-input-container').removeClass('salary-guess-input-container-min');
    $('.salary-input-container-min').addClass('small-9').removeClass('small-').addClass('salary-input-container').removeClass('salary-input-container-min');
    $('#user-input').addClass('large-6').addClass('columns').removeClass('user-input-min-class').addClass('user-input-class');
    $('.side-column').addClass('large-3').addClass('columns').show();
    $('#demographic-entry-container').hide();
    $('#output-container').hide();
    $('#submit-entry').val('SUBMIT').removeClass('submit-entry-button-min').addClass('submit-entry-button-large');
    $('#form-button-wrapper').addClass('main-button-wrapper').removeClass('main-button-wrapper-min');
    $('#back-button').hide();
    $('#geo-zone').val('');
    $('#city-type').val('');
    $('#race').val('');
    $('#gender').val('');
    $('#age').val('');
    $('#education-level').val('');
    $('#salary-2013').val('');
    $('#salary-guess-2013').val('');
  },

  setSubmitEvent: function() {
    $('#user-input-form')
      .on('invalid', function () {
        var invalidFields = $(this).find('[data-invalid]');
        console.log(invalidFields);
      })
      .on('valid', function(e) {
        var geoZone = $('#geo-zone').val(), cityType = $('#city-type').val(), race = $('#race').val(), gender = $('#gender').val(), education = $('#education-level').val(), age = $('#age').val(), salary2013 = $('#salary-2013').val(), salaryGuess2013 = $('#salary-guess-2013').val(), submitType = $('#submit-entry').val();
        var data = {geo_zone: geoZone, city_type: cityType, race: race, gender: gender, education: education, age: age, salary_2013: salary2013, salary_guess_2013: salaryGuess2013, submit_type: submitType};
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
      .on('invalid', function() {
        var invalidFields = $(this).find('[data-invalid]');
        console.log(invalidFields);
      })
      .on('valid', function(e) {
        var geoZone = $('#geo-zone').val(), cityType = $('#city-type').val(), race = $('#race').val(), gender = $('#gender').val(), education = $('#education-level').val(), age = $('#age').val(), salary2013 = $('#salary-2013').val(), salaryGuess2013 = $('#salary-guess-2013').val(), submitType = $('#submit-entry').val();
        var data = {geo_zone: geoZone, city_type: cityType, race: race, gender: gender, education: education, age: age, salary_2013: salary2013, salary_guess_2013: salaryGuess2013, submit_type: submitType};
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
