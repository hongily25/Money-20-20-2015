$(document).ready(function() {
			
			$('#minus-button').click(function() {
				if ($('#minus-button img').attr('src') == 'assets/oowl_close_btn_normal.png') {
					
        $('#minus-button img').attr('src','assets/oowl_open_btn_normal.png');
					//var test = $('.bigIMG').css('height') ;
					//alert('test: ' + test);
					$('img:not(.bigIMG)').toggle();
					$('#wrapper').toggleClass("grid-img");
				$('#container').toggleClass("shelf-img");
				} 
				
				else if ($('#minus-button img').attr('src') == 'assets/oowl_open_btn_normal.png') {
					
					$('#minus-button img').attr('src','assets/oowl_close_btn_normal.png');
					$('img').css("display","initial");
					$('#wrapper').toggleClass('grid-img');
				$('#container').toggleClass('shelf-img');
					
					
				}
				/*else {
        $('#minus-button img').attr('src','assets/oowl_open_btn_normal.png');
				$('img:not(.bigIMG)').css('display','inline');
			
				
    } */
		
			});
			
			$('.draggable').mouseup(function() {
				
				var offset = $(this).offset().left;
				var mytest = $(this).position();
				//alert(mytest);
				
				
			if(offset <= 700) {
				//alert('Regular offset: ' + offset);
				$(this).addClass('bigIMG');
				$(this).css('position','absolute');
				$(this).css('height','initial');
				$(this).css('width','initial');
				$(this).css('transform','rotate(90deg)');
				var test2 = $(this).css('height');
				//alert('test2: ' + test2);
			}
			else {
				$(this).css('position','relative');
				$(this).css('height','60px');
				$(this).css('width','60px');
				$(this).removeClass('bigIMG');
				//alert('Else offset: ' + offset);
			}
		});
	
	var handsFreeMode = false;
	
	$('#hands-free-mode img').click( function() {
		if (handsFreeMode) {
		handsFreeMode = false;
			$('img:not(#myo-img)').css('display','initial');
				
					$('#wrapper').addClass("grid-img");
				$('#container').addClass("shelf-img");
		}
		else 
		{ handsFreeMode = true;
		 		/* ENTER HANDS FREE MODE: Hide everything except one image */
				$('img:not(#myo-img)').css('display','none');
				
					$('#wrapper').removeClass("grid-img");
				$('#container').removeClass("shelf-img");
		 		/* LOAD FIRST IMAGE */
		 	window.setInterval(function(){
				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function() {
						if (xhr.readyState == 4) {
								var gesture = xhr.responseText;
								if(gesture.indexOf('right') >= 0){
									console.log(gesture);
									/* LOAD NEXT IMAGE */
								}else if(gesture.indexOf('left') >= 0){
									console.log(gesture);
									/* LOAD NEXT IMAGE */
								}else if(gesture.indexOf('select') >= 0){
									console.log(gesture);
									/* BUY ITEM */
								}else if(gesture.indexOf('back') >= 0){
									console.log(gesture);
									handsFreeMode = false;
									/* EXIT HANDS FREE */
									/* Restore everything */
														$('img').css("display","initial");
					$('#wrapper').addClass('grid-img');
				$('#container').addClass('shelf-img');
									
								}
						}
				}
				xhr.open('GET', 'http://localhost:5000/myo', true);
				xhr.send(null);
			} ,500);
		};
	});
	document.getElementsByTagName('body')[0].addEventListener('onwheel',function(){
		if ( handsFreeMode == true) { /* LOAD NEXT IMAGE */ };
	});
	document.getElementsByTagName('body')[0].addEventListener('oncontextmenu',function(){
		if ( handsFreeMode == false) { /* EXIT HANDS FREE */ };
	});
			
});