$(function(){
  $('#ser').eq(0).focus();
  // Serch box
  $('#ser').keypress(function ( e ) { //キーが押された時に呼ばれるハンドラ
   if(e.which == 13){//そのキーがenterなら
     var mes = $("#ser").val(); // get value
     //return false;
     window.location.href = 'https://www.google.com/#q=' + mes;
   }
  });
  //clock
  setInterval( function(){
    var date = new Date(jQuery.now()).toLocaleString();
    date = date.split(" ")
    //console.log(date);
    date = date[1].split(":");
    //console.log(date[0]);
    $("#clock").text(date[0]+ ":" +date[1]);
  }, 1000);

})
