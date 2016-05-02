var AI = {
  show: function(input){
	if(input == "gear" ){
		var mu = "<div class='fadeBox'> <div class='spinnerGear'> </div> </div>";
	}
	else if(input == "atom"){
		var mu = "<div class='fadeBox'> <div class='spinnerAtom'> </div> </div>";
	}
	else{
			var mu = "<div class='fadeBox'> <div class='spinner'> </div> </div>";
	}
    document.body.innerHTML += mu;
  },
  hide: function(){
    $(".fadeBox").remove();
  }
}
