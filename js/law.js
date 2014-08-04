function Law(text){

	this.$div = $("<div class='list-group-item'>"+text+"</div>");
	this.$delete = $("<button type='button' class='btn btn-danger btn-xs' style='float: right;'><span class='glyphicon glyphicon-remove-circle'></span> Delete</button>");
	
	// Creates the law
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