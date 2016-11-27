//メソッド呼び出しパターン
var myObject = {
  value: 10,
  show: function() {
    console.log(this);
  }
}
myObject.show(); // 10

//関数呼び出しパターン
function show() {
  console.log(this);
  this.value = 1; // 注１
}
show(); // thisはグローバルオブジェクトをさす

//コンストラクタ呼び出しパターン
function MyObject(value) {
  this.value = value;
  this.increment = function() {
    this.value++;
  };
}
var myObject = new MyObject(0);
console.log(myObject.value); // 0

myObject.increment();
console.log(myObject.value); // 1


//apply,call呼び出しパターン
var myObject = {
  add: function(value1, value2) {
    console.log(this.value + value1 + value2);
  }
};
var yourObject = {
  value: 3
};

myObject.add.apply(yourObject, [2, 10]); // 15
myObject.add.call(yourObject, 2, 10); // 15
