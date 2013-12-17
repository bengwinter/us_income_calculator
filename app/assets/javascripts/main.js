$(document).ready(function(){
  Site.setSubmitEvent();
  Site.sizeForm();
  Site.pageResizeListeners();
  Site.animateAbout();
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
          height: "100px"
        });
      }
    })
  },

  animateSubmit: function() {
    $('#user-input').removeClass('large-12').addClass('large-3');
    $('.form-column').removeClass('large-4').removeClass('right-border-column').addClass('large-12').addClass('form-column-min');
    //$('.input-container').removeClass('small-5').addClass('small-3');
    //$('.input-container-no-columns-class').addClass('small-3 columns');
    $('.form-subheader').removeClass('entry-form-header').addClass('entry-form-header-min')
    $('#submit-entry').remove();
    $('#output').fadeIn();
  },

  renderData: function(data) {
    var zipHtml = "<h2>Zip Code: </h2>" + data["zip_code"] + "<h3>Salary Guess: </h3>" + data["salary_guess"]
    $('#output').append(zipHtml);
  },

  setSubmitEvent: function() {
    $('#submit-entry').click(function(e){
      console.log('i got clicked');
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
      Site.renderData(data);
    });

  }
}