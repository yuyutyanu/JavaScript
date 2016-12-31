//オブジェクトは全て参照型なので参照先がコピーされる


var obj_1 = {};
obj_2 = obj_1;
obj_1.a = 5;
obj_2.a = 10;
console.log(obj_1.a);
console.log(obj_2.a);


function aaa() {
    return function() {
        console.log("aaaa");
    }
}
console.log(aaa());
aaa()();
