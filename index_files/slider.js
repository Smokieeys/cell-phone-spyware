currentPos = 0;
	step = 115;
	i = 0;
	j = 0;

function slider(){
	//alert (i, i%3 )
 		
 		if(i == 3) { j++; i = 0}
 		i++;	
 		if( (j % 2) == 0 ) {currentPos = currentPos - step;}
 		else  {currentPos = currentPos + step;}
     	   		
		$('#compatibility .compatibilities .items .brand-items')
		.animate({'marginLeft': currentPos});
}

$(window).load(function(){
	var int=self.setInterval(function(){slider()},3000);
});