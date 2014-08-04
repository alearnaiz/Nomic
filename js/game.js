function Game($parent, $numberLaws){
	this.numberLaws = 0;
	
	// Methods
	this.addLaw = function(text){
		var newLaw = new Law(text);
		this.numberLaws++;
		
		var me = this;
		
		$parent.append(newLaw.getLaw());
		this.refreshNumberLaws($numberLaws);
		
		addLawToLocalStorage(text);

		newLaw.getDel().click(function(){
			newLaw.getLaw().remove();
			me.numberLaws--;
			me.refreshNumberLaws($numberLaws);
			
			removeLawToLocalStorage(text);
		});
	}
	
	this.refreshNumberLaws = function($number){
		console.log("Number of laws: " + this.numberLaws);
		$number.text(this.numberLaws);
	}
	
	this.reset = function(){
		console.log("Reset the game");
		this.numberLaws = 0;
		$parent.empty();
		this.refreshNumberLaws($numberLaws);
		resetLocalStorage();
	}
}