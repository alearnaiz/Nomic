$(document).ready(function(){

	// Empezar nueva partida
	$("#start").click(function(){
		console.log("Empezamos!");
		startLocalStorage();
		window.location.href="main.html";
	});
	
	// Continuar
	$("#continue").click(function(){
		console.log("Continuamos!");
		continueLocalStorage();
		window.location.href="main.html";
	});
});