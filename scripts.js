var emojiCount = emojiList.length;

window.onload = function(){

	var inter = setInterval(function(){
		
		//random generator
		//-------------------------
		var speed = 1 + (Math.random() * 5);
		var location = Math.random() * document.documentElement.clientWidth;
		var spin = 1 + (Math.random() * 5);
		var direction = Math.round(Math.random());
		var orientation = Math.random()*360;
		var size = 0.5 + (Math.random()*5);
		var emoji = Math.round(Math.random()*emojiCount);
		//-------------------------

		//CSS for each raindrop
		//-------------------------
		cssString = 'position: absolute;';
		cssString+= 'font-size: '+size+'rem;';
		cssString+= 'transform:' ;
			cssString+= 'translate('+location+'px,'+-3+'rem) ';
			cssString+= 'rotate('+orientation+'deg) ';
		cssString+= ';';
		cssString+= 'animation: falling '+speed+'s linear;';
		//-------------------------

		//rain setup
		//-------------------------
		var emojirain = document.getElementById("emojirain");
		var div = document.createElement("div");
		
		var divspinner = document.createElement("div");
		var spinnerString = 'animation: spinning '+spin+'s linear infinite;';
		if(direction)
			spinnerString += 'animation-direction: reverse;';
		divspinner.style.cssText = spinnerString;
		//-------------------------
		
		//raindrop creation
		//-------------------------
		divspinner.innerHTML = (emojiList[emoji]);
		div.style.cssText = cssString;
		div.appendChild(divspinner);
		emojirain.appendChild(div);
		//-------------------------

		setTimeout(function() {
			emojirain.removeChild(div);
		}, (speed*1000));
	},25);
};

