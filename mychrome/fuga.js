$(function(){
	//alert(window.location.href);
	var kumo = location.href;
	//$(document.body).css( "background", "black" );

	if(kumo == 'https://portal.sa.dendai.ac.jp/up/faces/login/Com00505A.jsp'){
		setInterval( function(){
			var date = new Date(jQuery.now()).toLocaleString();
			date = date.split(" ");
			$("#time").text(date[0]+data[1]);
		}, 1000);
		//alert("hello");
		$(document.body).css('background-image','url(chrome-extension://nmhbfgbcbbliomemhopegjeoilhcnbha/food.png)');
		$(document.body).css('font-family', '"Architects Daughter",cursive')
		$("tr:nth-child(5)").eq(1).children().append("<img src='chrome-extension://nmhbfgbcbbliomemhopegjeoilhcnbha/reimu1.gif' alt='hoge'>");
		//$("tr:nth-child(5)").eq(1).children().append("<span style='font-size:40px'>Time Now</span>");
		$("tr:nth-child(5)").eq(1).children().append("<span id='time' style='font-size:50px'></span>");
		$(".style2").remove();
	}


}); // -- funciton --
