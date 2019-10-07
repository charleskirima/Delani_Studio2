  $(document).ready(function(){
    $(".toggle1").click(function(){
    $("#design").toggle();
  });
      $(".toggle2").click(function(){
    	$("#development").toggle();
    });
            $(".toggle3").click(function(){
    	$("#management").toggle();
    });


})
		function get_form(){
					var x = document.getElementById("name").value;
		            var y = document.getElementById("email").value;
		            var z = document.getElementById("message").value;

		            if (x != y && z != y){
		            	alert("Your message has been received");
		            }
		            else{
		            	alert("Invalid Details");
		            }



		}
