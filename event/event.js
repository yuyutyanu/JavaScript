function displayHoge(ev){
  console.log("hogehoge");
}
function eventBubbling(ev){
  console.log("イベントバブリング");
  //↓イベントオブジェクトの利用
  console.log("target : "+ev.target.tagName,"currentTarget : "+ev.currentTarget.tagName);
}
function eventCapture(){
  console.log("イベントキャプチャリング");
}
var div = document.getElementById("piyo");
div.addEventListener('click',eventBubbling,false);
div.addEventListener('click',eventCapture,true);

var p = document.getElementById("hogehoge");
p.addEventListener('click',displayHoge,false);


document.addEventListener('mouseover' , displayHoge,false);
