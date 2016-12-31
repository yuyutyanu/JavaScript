var p = document.getElementById("hoge");
console.log(p,"p 要素取得");
console.log(p.id,"idプロパティ取得");

console.log(p.childNodes,"pの子要素取得");
var children = p.childNodes;

for (var i = 0; i < children.length; i++) {
console.log(children.item(i),"pの子要素の"+ i +"番目取得");
}

p.removeChild(children.item(1));
console.log(p.childNodes,"spanを削除したあとのpの子要素");

var span = document.createElement("span");
var text = document.createTextNode("hogehoge");
span.appendChild(text);

p.insertBefore(span,p.firstChild);
console.log(children,"span 最初に追加");

var form = document.forms.item(1);
console.log(form, "１番目のフォーム要素取得");
