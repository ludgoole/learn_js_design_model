//class  多种选择，分门别类， 统一处理
//1.初级版
if(a){

}
if(b){

}
if(c){

}

//2.中级版
S.a = function(){};
S.b = function(){};
S.c = function(){};

//3.高级版
var strategies = {
    a: function(){},
    b: function(){},
    c: function(){}
}

var calculate = function(level, salary){
    return strategies[level](salary);
}

//表单验证
var strategies = {
    a: function(){},
    b: function(){},
    c: function(){}
}

function test() {
    var calculate = function(dom, rule, errorMsg){
        var arr = rule.split(':');
        var strategy = arr.shift();
        arr.unshift(dom.value);
        arr.push(errorMsg);
        return strategies[strategy].apply(dom, arr);
    }
}




