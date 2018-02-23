//class  实时监控，有选择性的提前处理， 然后报告上级
//1.初级版
var A = {
    send: function(x) {
        x.emit();
    }
}

var Z = {
    emit: function() {}
}

A.send(Z);

//2.中级版
var A = {
    send: function(x) {
        x.emit();
    }
} 

var B = {
    emit: function() {
        Z.emit()
    }
}

var Z = {
    emit: function() {}
}

A.send(B);

//3.高级版
var A = {
    send: function(x) {
        x.emit();
    }
}

var B = {
    emit: function() {
        Z.listenGoodMood(function() {
            Z.emit();
        })
    }
}

var Z = {
    emit: function() {},
    listenGoodMood: function(fn) {}
}

A.send(B);

//图片预加载
function test() {
    var proxyImage = (function() {
        var img = new Image();
        img.onload = function() {
            myImage.setSrc(this.src);
        }

        return {
            setSrc: function(src) {
                myImage.setSrc('loading.gif');
                img.src = src;
            }
        }
    })();

    var myImage = (function(){
        var imgNode = document.createElement('img');
        document.body.appendChild(imgNode);
        return {
            setSrc: function() {
                imgNode.src = src;
            }
        }
    })()
}

proxyImage.setSrc('desktop.jpg');