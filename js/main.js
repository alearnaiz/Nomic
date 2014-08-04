$(document).ready(function(){
	
	var game;
	
	if (localStorage && localStorage.getItem("continue") == "1"){
		// Continue with the game
		game = new Game($("#list"), $("#numberLaws"));
		
		var myLaws = getAllLaws();
		resetLocalStorage();
		if (myLaws){
			$.each(myLaws, function(i,row){
				game.addLaw(row.law);
			});
		}
	}
	else{
		// New game
		resetLocalStorage();
		game = new Game($("#list"), $("#numberLaws"));
		game.addLaw("Todas las leyes deben ser aprobadas por unanimidad");
	}
	
	// Options
	$("#create").click(function(){
		var val = $("#text").val();
		if (val){
			console.log("Create law: " + val);
			game.addLaw(val);
			$("#text").val("");
		}
	});
	
	$("#home").click(function(){
		window.location.href="index.html";
	})
	
});