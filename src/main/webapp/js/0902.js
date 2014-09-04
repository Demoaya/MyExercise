function showHeroes(str)
{
var xmlhttp;    
if (str=="")
  {
  document.getElementById("txtHeroAttr").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHeroAttr").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","../ajax/getHeroes.asp?q="+str,true);
xmlhttp.send();
};


$(document).ready(function(){
	$("#sel").change(function(){
		if($("#sel").option.select=="doom")
			$("img#img").attr("src","~/images/doom.jpg")
			else if($("#sel").val()=="luna")
				$("img#img").attr("src","../images/luna.jpg")
			 else if($("#sel").val()=="pom")
				 	$("img#img").attr("src","../images/pom.jpg")
				  else if($("#sel").val()=="tiny")
					   $("img#img").attr("src","../images/tiny.jpg")
	})
});
