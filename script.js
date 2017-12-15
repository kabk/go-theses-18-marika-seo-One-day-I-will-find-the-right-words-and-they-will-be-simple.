// $("p1").lettering();

var time = 0;
setInterval(function(){
	time+=0.3;
	 // $(".wordworld").css("transform", "rotate("+time+"deg)");

},30)



for (var i = 0; i < 57; i++) {
	 $(".char"+(i+1)).css("transform", "rotate("+(i*6.2)+"deg)");
}