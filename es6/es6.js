//変数と文字列の連結
var text = 'hogehoge';
console.log(`${text}piyopiyo`);

{
    let error = "ブロックスコープエラーがでる";
}
//console.log(error);
const num = 1;
//num = 2; //error

//テンプレート文字列
var str = `a
i
u`
console.log(str);

// 分割代入
var [bunkatu, dainyu] = [10, 20];
console.log(bunkatu, dainyu);

[dainyu, bunkatu] = [bunkatu, dainyu];
console.log(bunkatu, dainyu);

// 引数で初期化　戻り値複数
function getFruit(apple = 'りんご') {
    return [apple, 'バナナ'];
}
var fruit = getFruit();
console.log(fruit);

// ... 演算子
var [poka, poyo, ...popo] = ['ぽか', 'ぽよ', 'ぽぽ', 'ほげ'];
console.log(poka, poyo, popo);

var show = () => {
    console.log("アロー関数")
}
show();

//this 束縛
var this_obj = {
    obj: 'thisを束縛するよ',
    start: function() {
        setTimeout(() => {
            console.log(this.obj)
        }, 1000)
    }
}
console.log(this_obj.start());
