// IDX Jquery Library Here


// ekkoLightbox JS
$(document).ready(function ($) {
    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function() {
                if (window.console) {
                    return console.log('Checking our the events huh?');
                }
            },
onNavigate: function(direction, itemIndex) {
                if (window.console) {
                    return console.log('Navigating '+direction+'. Current item: '+itemIndex);
                }
}
        });
    });

    //Programatically call
    $('#open-image').click(function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });
    $('#open-youtube').click(function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });

// navigateTo
    $(document).delegate('*[data-gallery="navigateTo"]', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function() {

  var a = this.modal_content.find('.modal-footer a');
  if(a.length > 0) {

    a.click(function(e) {

      e.preventDefault();
      this.navigateTo(2);

    }.bind(this));

  }

            }
        });
    });
});

// ekkoLightbox End

// GET Footer Header 

$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html");
});

// End


// Mata Kuliah
$(document).ready(function() {
    
    $("#matkul-1-hover").hide()
    $("#panel-matkul-1").hover(
      function () {
        $('#matkul-1-hover').stop().fadeIn("slow");
        $('#matkul-1').stop().fadeOut(0);
      }, 
      function () {
        $('#matkul-1-hover').stop().fadeOut(0);
        $('#matkul-1').stop().fadeIn("slow");
      }
    );  
});
$(document).ready(function() {
    
    $("#matkul-2-hover").hide()
    $("#panel-matkul-2").hover(
      function () {
        $('#matkul-2-hover').stop().fadeIn("slow");
        $('#matkul-2').stop().fadeOut(0);
      }, 
      function () {
        $('#matkul-2-hover').stop().fadeOut(0);
        $('#matkul-2').stop().fadeIn("slow");
      }
    );  
});
$(document).ready(function() {
    
    $("#matkul-3-hover").hide()
    $("#panel-matkul-3").hover(
      function () {
        $('#matkul-3-hover').stop().fadeIn("slow");
        $('#matkul-3').stop().fadeOut(0);
      }, 
      function () {
        $('#matkul-3-hover').stop().fadeOut(0);
        $('#matkul-3').stop().fadeIn("slow");
      }
    );  
});
$(document).ready(function() {
    
    $("#matkul-4-hover").hide()
    $("#panel-matkul-4").hover(
      function () {
        $('#matkul-4-hover').stop().fadeIn("slow");
        $('#matkul-4').stop().fadeOut(0);
      }, 
      function () {
        $('#matkul-4-hover').stop().fadeOut(0);
        $('#matkul-4').stop().fadeIn("slow");
      }
    );  
});
$(document).ready(function() {
    
    $("#matkul-5-hover").hide()
    $("#panel-matkul-5").hover(
      function () {
        $('#matkul-5-hover').stop().fadeIn("slow");
        $('#matkul-5').stop().fadeOut(0);
      }, 
      function () {
        $('#matkul-5-hover').stop().fadeOut(0);
        $('#matkul-5').stop().fadeIn("slow");
      }
    );  
});
$(document).ready(function() {
    
    $("#matkul-6-hover").hide()
    $("#panel-matkul-6").hover(
      function () {
        $('#matkul-6-hover').stop().fadeIn("slow");
        $('#matkul-6').stop().fadeOut(0);
      }, 
      function () {
        $('#matkul-6-hover').stop().fadeOut(0);
        $('#matkul-6').stop().fadeIn("slow");
      }
    );  
});


// End

// niceScroll
  $("html").niceScroll({
    cursorcolor: "#4f4f4f",
    cursorborder: "1px solid #333333",
    scrollspeed: 50
  });
// End

// Wow
 new WOW().init();
// End