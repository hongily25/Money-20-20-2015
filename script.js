$(document).ready(function() {
			
			$('#minus-button').click(function() {
				if ($('#minus-button img').attr('src') == 'images/oowl_close_btn_normal.png') {
					
        $('#minus-button img').attr('src','images/oowl_open_btn_normal.png');
					//var test = $('.bigIMG').css('height') ;
					//alert('test: ' + test);
					$('img:not(.bigIMG)').toggle();
					$('#wrapper').toggleClass("grid-img");
				$('#container').toggleClass("shelf-img");
				} 
				
				else if ($('#minus-button img').attr('src') == 'images/oowl_open_btn_normal.png') {
					$('#wrapper').addClass('grid-img');
				$('#container').addClass('shelf-img');
					$('img').css("display","initial");
				}
				/*else {
        $('#minus-button img').attr('src','images/oowl_open_btn_normal.png');
				$('img:not(.bigIMG)').css('display','inline');
			
				
    } */
		
				
				
		
				
			});
			
			$('.draggable').mouseup(function() {
				
				var offset = $(this).offset().left;
				
				
			if(offset <= 700) {
				alert('Regular offset: ' + offset);
				$(this).addClass('bigIMG');
				$(this).css('position','absolute');
				$(this).css('height','initial');
				$(this).css('width','initial');
				var test2 = $(this).css('height');
				//alert('test2: ' + test2);
			}
			else {
				$(this).css('position','relative');
				$(this).css('height','60px');
				$(this).css('width','60px');
				alert('Else offset: ' + offset);
			}
		});
			
		});