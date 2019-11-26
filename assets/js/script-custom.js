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