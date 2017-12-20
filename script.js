// $("p1").lettering();

var time = 0;
setInterval(function(){
	time+=0.3;
	 // $(".wordworld").css("transform", "rotate("+time+"deg)");

},30)



for (var i = 0; i < 57; i++) {
	 $(".char"+(i+1)).css("transform", "rotate("+(i*6.2)+"deg)");
}


var textDisplay = false;

$("section").each(function(i){
	$(this).click(function(){
		if (textDisplay===false) {
			textDisplay=true;
			$("section").hide();
			$(this).show();
		} else {
			textDisplay=false;
			$("section").show();
		}
	});
});


$("section").hide();
