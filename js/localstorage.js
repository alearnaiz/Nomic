function HistoryLaw(law){
	this.law = law;
}

function findAndRemove(array, property, value) {
	var find = false;
	$.each(array, function(index, result) {
		if (!find){
			if(result[property] == value) {
				//Remove from array
				array.splice(index, 1);
				find = true;
			}
		}
   });
}

function addLawToLocalStorage(text){
	if (localStorage){
		var laws = localStorage["laws"];
		var historyLaw = new HistoryLaw(text);
		if (!laws){
			laws = "["+JSON.stringify(historyLaw)+"]";
		}
		else{
			var history = JSON.parse(laws);
			history.push(historyLaw);
			laws = JSON.stringify(history);
		}
		console.log("Stored information: " + laws);
		localStorage.setItem("laws", laws);
	}
}

function removeLawToLocalStorage(text){
	if (localStorage){
		var laws = localStorage.getItem("laws");
		var history = JSON.parse(laws);
		findAndRemove(history, "law", text);
		localStorage.setItem("laws", JSON.stringify(history));
	}
}

function getAllLaws(){
	if (localStorage){
		return JSON.parse(localStorage.getItem("laws"));
	}
}

function resetLocalStorage(){
	if (localStorage){
		localStorage.clear();
	}
}

function continueLocalStorage(){
	if (localStorage){
		localStorage.setItem("continue", "1");
	}
}

function startLocalStorage(){
	if (localStorage){
		localStorage.setItem("continue", "0");
	}
}