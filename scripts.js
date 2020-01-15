window.onload = function(){
	var emojiList = 
	
	var i;
	for(i = 1; i < emojiList.length; i+=2){
		console.log(String.fromCodePoint(emojiList.codePointAt(i)));
	}
	console.log(
		String.fromCodePoint('🌡️'.codePointAt(0))
	); // prints 128568, correct

	var inter = setInterval(function(){
		
		var speed = 1 + (Math.random() * 4);
		var location = Math.random() * document.documentElement.clientWidth;
		var spin = 1 + (Math.random() * 4);
		var direction = Math.round(Math.random());
		var orientation = Math.random()*360;
		var size = Math.random()*5;
       
        //working with emojis really sucks
        //especially when theres no hex support
		
		//grab random WORKING emoji from file
		var emoji = Math.round(Math.random()*(1868/2));
		emoji = emoji*2;
		emoji = emoji+1;
		//console.log(emoji);
        //window.open("winEmojisMin.txt");
        //generate random number in emoji blocks (often shows bad emojis)
        //---------------------------------------------
        // 126976 = 1F000 
//        var block1 = 128512;//1F300 - 1F5FF 768
//        var block2 = 127744;//1F600 - 1F64F 80
//        var block3 = 129280;//1F900 - 1F9FF 256
//        var emoji = ((Math.round(1+Math.random()*2)));
//        
//        if(emoji == 1)
//            emoji = block1 + Math.round(Math.random()*768);
//        else if (emoji == 2)
//            emoji = block2 + Math.round(Math.random()*80);
//        else if (emoji == 3)
//            emoji = block3 + Math.round(Math.random()*256);        
        //---------------------------------------------

		cssString = 'position: absolute;';
		cssString+= 'font-size: '+size+'rem;';
		cssString+= 'transform:' ;
			cssString+= 'translate('+location+'px,'+-3+'rem) ';
			cssString+= 'rotate('+orientation+'deg) ';
		cssString+= ';';
		cssString+= 'animation: falling '+speed+'s linear;';

		var emojirain = document.getElementById("emojirain");
		var div = document.createElement("div");
		
		var divspinner = document.createElement("div");
		var spinnerString = 'animation: spinning '+spin+'s linear infinite;'
		if(direction)
			spinnerString += 'animation-direction: reverse;';
		divspinner.style.cssText = spinnerString;
        
        //divspinner.innerHTML = String.fromCodePoint(127828);
		divspinner.innerHTML = String.fromCodePoint(emojiList.codePointAt(emoji))
		//divspinner.innerHTML = String.fromCodePoint(emoji);
		
		//console.log(String.fromCodePoint(emoji));

		div.style.cssText = cssString;
		div.appendChild(divspinner)
		emojirain.appendChild(div);

		setTimeout(function() {
			emojirain.removeChild(div);
		}, (speed*1000));
	},25);
};