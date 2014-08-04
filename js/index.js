$(document).ready(function(){

	// Empezar nueva partida
	$("#start").click(function(){
		console.log("We start");
		startLocalStorage();
		window.location.href="main.html";
	});
	
	// Continuar
	$("#continue").click(function(){
		console.log("We continue");
		continueLocalStorage();
		window.location.href="main.html";
	});
});