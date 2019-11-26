// jQuery(document).ready(function(){
//     function resizeForm(){
//         var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
//         if(width > 1024){
//             $(document).ready(function(){
//                 $(window).scroll(function(){
//                   if($(this).scrollTop() > 1){
//                     $('.wrap').addClass('sticky')
//                   }
//                   else($('.wrap').removeClass("sticky"))
//                 });
//               });
//         } else {

//         }    
//     }
//     // window.onresize = resizeForm;
//     resizeForm();
// });

// var fixmeTop = $('#identity-profile').offset().top;
// $(window).scroll(function() {
//     var currentScroll = $(window).scrollTop();
//     if (currentScroll >= fixmeTop) {
//         $('#identity-profile').css({
//             position: 'fixed',
//             top: '0',
//             left: '0'
//         });
//     } else {
//         $('#identity-profile').css({
//             position: 'static'
//         });
//     }
// });


$(document).ready(function(){

    // Add new element
    $("#add").click(function(){
   
     // Finding total number of elements added
     var total_element = $(".add-able").length;
    
     // last <div> with element class id
     var lastid = $(".add-able:last").attr("id");
     var split_id = lastid.split("_");
     var nextindex = Number(split_id[1]) + 1;
   
     var max = 999;
     // Check total number elements
     if(total_element < max ){
      // Adding new div container after last occurance of element class
      $(".add-able:last").append("<div class='add-able' id='akten_"+ nextindex +"'> </div>");
    
      // Adding element to <div>
      $("#akten_" + nextindex).append(
          "<br/>" +
        "<div class='card section-34 inset-left-30 inset-right-30'>" +
          "<div class=''>" +
      "<div style='float: right;'>" +
      "<span id='remove_"+ nextindex +"' class='remove'>" +
        "<i class='fa fa-close'>" +
        "</i>" +
      "</span>"+
    "</div>" +
    "<h5>"  +
      "<span id='label-kategorie'>"+ nextindex +"</span>. Kategorie" +
    "</h5>" +
    "<label class='form-label form-label-outside' for='box-description'>Beschreibung:</label>" +
    "<textarea class='form-control' id='box-description'></textarea>" +
    "<br/>" +
    "<input id='color' type='color' value='#000000'>" +
  "</div>" +
  "</div>"
  );
     }
    
    });
   
    // Remove element
    $('.add-able').on('click', '.remove', function(){
    
     var id = this.id;
     var split_id = id.split("_");
     var deleteindex = split_id[1];
   
     // Remove <div> with id
     $("#akten_" + deleteindex).remove();
   
    }); 
   });


   $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('#myToTop').fadeIn();
    } else {
        $('#myToTop').fadeOut();
    }
});

$("#myToTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});

// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}