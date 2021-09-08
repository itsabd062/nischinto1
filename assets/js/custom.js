 $(document).ready(function () {
 	$(".list").click(function () {
 	  var value = $(this).attr('data-filter');
 	  if (value == "all") {
 		$('.itembox').show('1000');
 	  }
 	  else {
 		$(".itembox").not('.' + value).hide('3000');
 		$('.itembox').filter('.' + value).show('3000');
 	  }
   // active
 	  $(".list").removeClass('active');
 	  var $this = $(this);
 	  if (!$this.hasClass('active')) {
 		$this.addClass('active');
 	  }
   });
 	});
// $(document).ready(function(){
//     $('.list').click(function(){
//       var value =$(this).attr('data-filter');
//       if (value=='all'){
//         $('.itembox').show('1000');
//       }
//       else{
//         $('.itembox').not('.'+value).hide('1000');
//         $('.itembox').filter('.'+value).show('1000');
//       }
//     })
// 	$()
//   })

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}
