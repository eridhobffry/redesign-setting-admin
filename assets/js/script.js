/**
 * Global variables
 */
"use strict";

var userAgent = navigator.userAgent.toLowerCase(),
	initialDate = new Date(),

	$document = $(document),
	$window = $(window),
	$html = $("html"),

	livedemo = false,
	isDesktop = $html.hasClass("desktop"),
	isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	isTouch = "ontouchstart" in window,
	c3ChartsArray = [],
	element = {
		responsiveTabs: $(".responsive-tabs"),
		rdInputLabel: $(".form-label"),
		stepper: $("input[type='number']"),
		rdNavbar: $(".rd-navbar"),
		galleryRDTabs: $(".gallery-tabs")
	}

/**
 * Initialize All Scripts
 */
$document.ready(function () {

	/**
	 * Responsive Tabs
	 * @description Enables Responsive Tabs plugin
	 */
	if (element.responsiveTabs.length) {
		var i = 0;
		for (i = 0; i < element.responsiveTabs.length; i++) {
			var $this = $(element.responsiveTabs[i]);
			$this.easyResponsiveTabs({
				type: $this.attr("data-type"),
				tabidentify: $this.find(".resp-tabs-list").attr("data-group") || "tab"
			});
		}
	}

	/**
	 * RD Input Label
	 * @description Enables RD Input Label element
	 */
	if (element.rdInputLabel.length) {
		element.rdInputLabel.RDInputLabel();
	}

	/**
	 * Stepper
	 * @description Enables Stepper element
	 */
	if (element.stepper.length) {
		element.stepper.stepper({
			labels: {
				up: "",
				down: ""
			}
		});
	}

	/**
	 * RD Navbar
	 * @description Enables RD Navbar elemnent
	 */
	if (element.rdNavbar.length) {
		element.rdNavbar.RDNavbar({
			stickUpClone: (element.rdNavbar.attr("data-stick-up-clone")) ? element.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
			stickUpOffset: (element.rdNavbar.attr("data-stick-up-offset")) ? element.rdNavbar.attr("data-stick-up-offset") : 1,
			anchorNavOffset: -78
		});
		if (element.rdNavbar.attr("data-body-class")) {
			document.body.className += ' ' + element.rdNavbar.attr("data-body-class");
		}
	}

	/**
	 * Gallery RD Material Tabs
	 */
	if (element.galleryRDTabs.length) {
		var uniqueRandoms = [];
		var timer = false,
			timer2 = false;
		element.galleryRDTabs.RDMaterialTabs({
			responsive: {
				0: {
					items: 3
				},
				768: {
					margin: 50
				},
				992: {
					margin: 100,
					items: 4
				},
				1200: {
					items: 5
				},
				1600: {
					items: 6
				}
			},
			callbacks: {
				onInit: function () {
					element.galleryRDTabs.addClass('loaded');
					if ($html.hasClass('desktop')) {
						makeVisible(element.galleryRDTabs.find('.rd-material-tab:first-child .image'));
					}
				},
				onChangeStart: function () {
					if ($html.hasClass('desktop')) {
						makeInvisible();
					}
				},
				onChangeEnd: function () {
					if ($html.hasClass('desktop')) {
						makeVisible(element.galleryRDTabs.find('.rd-material-tab-active .image'));
					}
				}
			}
		});
		$window.trigger("resize");
	}

});

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
	"<label> Farbe auswählen:</label> <br>" +
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
    if ($(this).scrollTop() > 250) {
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
var panel = document.getElementsByClassName('panel');
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

// for (i = 0; i < acc.length; i++) {
// 	acc[i].addEventListener('click', toggleItem, false);
// }
// function toggleItem() {
// 	var itemClass = this.parentNode.className;
// 	for (i = 0; i < panel.length; i++) {
// 		panel.style.maxHeight = null;
// 	}
// 	if (panel.style.maxHeight == null) {
// 		panel.style.maxHeight = panel.scrollHeight + "px";
// 	}
// }

$( "#profil-trigger" ).click(function() {
	$( "#konto-tabs" ).trigger( "click" );
  });

  $(document).ready(function(){ 

	if (document.getElementsByClassName('input-ebr').value !== "") {
		var placeholder = document.getElementsByName(this)[0].placeholder
		var node = this.previousSibling[0].id; 
		  document.getElementById(node).innerHTML = placeholder;
	  }
  })
  
