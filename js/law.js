function Law(text){

	this.$div = $("<div class=divLaw></div>");
	this.$p = $("<p><h2 class=textLaw>-"+text+"</h2></p>");
	this.$delete = $("<button class=deleteLaw>Borrar</button>");
	
	// Creates the law
	this.$div.append(this.$p);
	this.$div.append(this.$delete);
	
	// Methods
	
	// Getters and setters
	
	this.getLaw = function(){
		return this.$div;
	}
	
	this.getDel = function(){
		return this.$delete;
	}
}