//this is good to create a single instance of the object and keep referring to it
//in this example we are creating circles in the page
//with the click, the circles only appear inside a class named 'advert'
//with the keyboard press "a" the circles appear inside all document
(function(win, $){
	var CircleGeneratorSingleton = (function () {
		var instance;
		
		function init() {
			var _aCircle = [],
				_stage = $('.advert');

			function _position(circle, left, top) {
				circle.css('left',left);
				circle.css('top',top);
			}

			function create(left, top) {
				var circle = $('<div class="circle"></div>');
				_position(circle, left, top)
				return circle;
			}

			function add(circle) {
				_stage.append(circle);
				_aCircle.push(circle);
			}

			function index() {
				return _aCircle.length;
			}

			return {
				index:index,
				create:create,
				add:add
			};
		}

		return {
			getInstance: function() {
				if(!instance){
					instance = init();
				}

				return instance;
			}
		}

	})();

	$(win.document).ready(function(){
		$('.advert').click(function(e){
			var cg = CircleGeneratorSingleton.getInstance();
			var circle = cg.create(e.pageX-25, e.pageY-25);

			cg.add(circle);

		});

		$(document).keypress (function(e){
			if(e.key == 'a'){
				var cg = CircleGeneratorSingleton.getInstance();
				var circle = cg.create(Math.floor(Math.random()*600), Math.floor(Math.random()*600));
				cg.add(circle);
			}
		});

	});

})(window, jQuery); 