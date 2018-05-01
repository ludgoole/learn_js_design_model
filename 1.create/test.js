// var createPop = require('./1.简单工厂');
// createPop('alert', '请输入密码').show().alert();

// var printData = require('./2.工厂方法');
// printData();

var Person = require('./4.建造者');
var xiaoHong = new Person('xiao hong', 'code');
console.log(xiaoHong.name.firstName);
console.log(xiaoHong.name.lastName);
console.log(xiaoHong.work.work);
console.log(xiaoHong.work.descript);
