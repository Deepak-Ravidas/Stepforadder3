jQuery(document).ready(function() {
    
    var downarrow = "<svg class='downarrow' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 50 50' enable-background='new 0 0 64 64' xml:space='preserve'><g><polyline fill='none' stroke='#000000' stroke-width='5' stroke-linejoin='bevel' stroke-miterlimit='10' points='15,24 32,41 49,24'/></g></svg>";
	var uparrow = "<svg class='uparrow' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 50 50' enable-background='new 0 0 64 64' xml:space='preserve'><g><polyline fill='none' stroke='#000000' stroke-width='5' stroke-linejoin='bevel' stroke-miterlimit='10' points='15,41 32,24 49,41'/></g></svg>";

	// jQuery(".s9arr").append(downarrow);

    $(".s9question1").click(function(){
        $(".s9qa1").toggle();
      });

      $(".s9question2").click(function(){
        $(".s9qa2").toggle();
      });

      $(".s9question3").click(function(){
        $(".s9qa3").toggle();
      });

      $(".s9question4").click(function(){
        $(".s9qa4").toggle();
      });

      $(".s9question5").click(function(){
        $(".s9qa5").toggle();
      });
});

// let qaDiv = document.querySelector(".s9qblock");

// function showHide(){
//     qaDiv.classList.toggle(".hide");
//     console.log('con')
// }
