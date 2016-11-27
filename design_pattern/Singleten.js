function Earth(){

  // 既存のインスタンスの有無をチェック
  if (typeof Earth.instance === "object"){
    return Earth.instance;
  }

  this.name = "Earth";
  this.age = "4.7+E9"; // 地球の寿命は47億年

  // キャッシュする
  Earth.instance = this;
  return this;
}

var earth = new Earth();
var earth2 = new Earth();

earth === earth2 ? console.log("Singleton!") : console.log("Not singleton");
