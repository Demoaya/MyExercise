$(document).ready(function(){
	$("img#img").mouseover(function(){
		$("#timer").animate({left:"300px",fontSize:"3em"});
	})
});

$(document).ready(function(){
	$("button#bott").click(function(){
		$("a.button").toggle()
	})
});

$(document).ready(function(){
    $("a.button").mouseover(function(){
    	$("p#slide").fadeToggle(1000)
    })
});
$(document).ready(function(){
    $("#search").click(function(){
    	//$("this").attr("href","#url".val())
    	window.location.href=$("#url").text()
    })
});
$(document).ready(function(){
    $("#red").click(function(){
    	//$("a.button").attr("background","#ff0000")
    	$("a.button").css("color","red")
    })
});
$(document).ready(function(){
    $("#size").click(function(){
    	//$("a.button").attr("font-size","24px")
    	$("a.button").css("font-size","24px")
    })
});
$(document).ready(function(){
    $("#chtext").click(function(){
    	$("a.button").text("Yeah!")    	
    })
});

$(document).ready(function(){
    $("#append").click(function(){
    	var yeah=$("<p></p>").html("<h2>Yeah!</h2>");
      	$("#chtext").append(yeah);
    })
});

$(document).ready(function(){
    $("#remove").click(function(){
      	$("#chtext").empty();
    })
});
















