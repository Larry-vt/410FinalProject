const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});



  /* used for on mobile. 
     It will display only the tabs and whatever is clicked on it will display only its contents
     Tabs will disappear. but there will be a back button of some sort for the user to click on to view other tabs */
$(document).ready(function() {
  $('.nav-tabs .nav-link').on('click', function() {
    //if ($(window).width() < 768) {
      var target = $(this).attr('href');
      $(target).toggle();
      $(target).siblings().hide();
    //}
  });
});


// $(document).ready(function() {
//   // Show and hide tab content on mobile devices
//   $('#tab-menu a').on('click', function(e) {
//     e.preventDefault();
//     var tabId = $(this).attr('href');
//     $(this).tab('show');
//     $(tabId).show();
//     $('.tab-content').not(tabId).hide();
//     $('#tab-menu').hide();
//     $('#back-button').show();
//   });

//   $('#back-button').on('click', function() {
//     $('.tab-content').hide();
//     $('#tab-menu').show();
//     $('#back-button').hide();
//   });
// });
