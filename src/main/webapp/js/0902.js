function showCustomer(str)
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
xmlhttp.open("GET","/ajax/getHeroes.aspx?q="+str,true);
xmlhttp.send();
};

$(document).ready(function(){
	$("#sel").change(function(){
		if($("sel").val()=="doom")
			$("img#img").attr("src","http://img1.imgtn.bdimg.com/it/u=2871247443,2888214626&fm=23&gp=0.jpg")
		else if($("sel").val()=="luna")
				$("img#img").attr("src","http://img1.imgtn.bdimg.com/it/u=2195522676,2012681977&fm=15&gp=0.jpg")
			 else if($("sel").val()=="pom")
				 	$("img#img").attr("src","http://img2.imgtn.bdimg.com/it/u=3132782322,3578267952&fm=23&gp=0.jpg")
				  else if($("sel").val()=="tiny")
					   $("img#img").attr("src","http://img0.imgtn.bdimg.com/it/u=4216700514,2190917242&fm=21&gp=0.jpg")
	})
});