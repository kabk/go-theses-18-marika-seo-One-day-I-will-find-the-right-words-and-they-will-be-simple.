// $("p1").lettering();

// var time = 0;
// setInterval(function(){
// 	time+=0.3;
// 	 // $(".wordworld").css("transform", "rotate("+time+"deg)");

// },30)



for (var i = 0; i < 57; i++) {
	 $(".char"+(i+1)).css("transform", "rotate("+(i*6.2)+"deg)");
}


var textDisplay = false;

$(".textWraps").each(function(i){
	$(this).addClass("textWrap"+i);
});


var bgColours = ["black", "gray", "gray", "black", "gray", "black","gray","gray","black","gray","black",];

$("section").each(function(i){

	var $this = $(this);

	var w = $this.width();
	var h = $this.height();
	var pos = $this.position();
	var x = pos.left;
	var y = pos.top;

	var currentClass = $this.attr("class");

	$(this).hover(function(){
		$(this).css("background-color", bgColours[i]);
	},function(){
		$(this).css("background-color", "white");
	});

	$(this).click(function(){

		if (textDisplay===false) {
			textDisplay=true;
			$("section").hide().css("z-index",-6);
			$(".textWraps").hide();
			$(".textWrap"+i).fadeIn().css("z-index",6);
			// $(this).show();

			$("body").prepend("<div class='singleSection'>"+$this.html()+"</div>");
			$(".singleSection").css({
				top:　y+"px",
				left:　x+"px",
				width: 1+w+"px",
				height:　h+"px"
			}).addClass(currentClass);

			$(".singleSection").click(function(){
				textDisplay=false;
				$(".singleSection").remove();

				$(".textWraps").hide().css("z-index",-6);	
				$("section").show().css("z-index",6);
			});


		} else {
			textDisplay=false;
		}
	});

	$(".back").click(function(){
		textDisplay=false;
		$(".singleSection").remove();

		$(".textWraps").hide().css("z-index",-6);	
		$("section").show().css("z-index",6);
	});

});