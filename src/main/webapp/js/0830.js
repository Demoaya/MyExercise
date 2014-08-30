$(document).ready(function(){
	$("img#img").mouseover(function(){
		$("#timer").animate({left:"300px",fontSize:"2em"});
	})
});

$(document).ready(function(){
	$("button#bott").click(function(){
		$("p#slide").fadeOut(100)
	})
});

$(document).ready(function(){
    $("a.button").mouseover(function(){
    	$(this).fadeOut(500)
    })
});
 