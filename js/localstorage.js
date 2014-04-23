function HistoryLaw(law){
	this.law = law;
}

function addLawToLocalStorage(object){
	if (localStorage){
		var laws = localStorage["laws"];
		var historyLaw = new HistoryLaw(object);
		if (!laws){
			laws = "["+JSON.stringify(historyLaw)+"]";
		}
		else{
			var history = JSON.parse(laws);
			history.push(historyLaw);
			laws = JSON.stringify(history);
		}
		console.log("Informacion guardada: " + laws);
		localStorage.setItem("laws", laws);
	}
}

function removeLawToLocalStorage(object){
	if (localStorage){
		var laws = localStorage.getItem("laws");
		history = JSON.parse(localStorage.getItem("laws"));
		history.splice(history.indexOf(object), 1);
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