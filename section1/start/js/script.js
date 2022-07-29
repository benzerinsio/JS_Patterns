(function(win, doc, $) {
	var chatModule = (function () {
	//private methods starts with "_"
		var _leadself= 'Me: ',
			_leadcomputer= "PC: ",
			_aSaid= ["This is a Cyber Chat"],
			_msgYes= "Yes, that's a great idea.",
			_msgNo= "No, that must be a mistake.",
			_aSassyStuff= ["Like mold on books, grow myths on history.",
					"She moved like a poem and smiled like a sphinx.",
					"As long as we don’t die, this is gonna be one hell of a story.",
					"She laughed, and the desert sang.",
					"You’ve got about as much charm as a dead slug."];
		
		function _echo(msg) {
			_aSaid.push("<div>" + msg + "</div>");
				
			var aSaidLength = _aSaid.length,
			start = Math.max(aSaidLength - 6,0), 
					out = "";
				
			for(var i=start; i<aSaidLength; i++){
				out += _aSaid[i];
			}
				
			$('.advert').html(out);
				
			$('#talk span').text(msg);
		}
		//positive side: Now the "public" and "private" methods can comunicate with each other directly
		function talk(msg) {
			_echo(_leadself + msg);
		}

		function replyYesNo() {
			var msg = Math.random()>.5 ? _msgYes : _msgNo;
			_echo(_leadcomputer + msg);
		}

		function saySassyStuff() {
			var msg = _aSassyStuff[ Math.floor(Math.random()*_aSassyStuff.length)];
			_echo(_leadcomputer + msg);
		}
		//negative side: we cant override these "public" codes anymore, 
		//because we only have access to their reference
		return {
			talk:talk,
			replyYesNo:replyYesNo,
			saySassyStuff:saySassyStuff,
		}

	})();

	$(doc).ready(function(){
		chatModule.talk("This is great");
		chatModule.replyYesNo();
		chatModule.saySassyStuff();
	});

	if(!win.chatModule){	//letting the function 'chatModule' to be accessible in the global scope by assigning it to window
		win.chatModule = chatModule;
	}
})(window, document, jQuery);

console.log(window.chatModule); 