//class  走得通直接过，走不通先修桥再过
//1.初级版
var obj;
if(!obj){
    obj = xxx;
}
return obj;

//2.中级版
var result;
return result || (result = fn.apply(this, arguments));

//3.高级版
var getSingle = function (fn){
    var result;
    return result || (result = fn.apply(this, arguments));
}

//4.终极版
var getSingle = function (fn){
    var result;
    return function(){
        return result || (result = fn.apply(this, arguments));
    }
}

//登陆弹窗
function test(){
    var createLoginLayer = function(){
        var div = document.createElement('div');
        div.innerHTML = '我是登录悬浮窗';
        div.style.display = 'none';
        document.body.appendChild('div');
        return div;
    }

    var createSingLoginLayer = getSingle(createLoginLayer);
    var loginLayer = createSingLoginLayer();

    loginLayer.style.display = 'block';
}

