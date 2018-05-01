var LoginAlert = function(text) {
  this.content = text;
}
LoginAlert.prototype.show = function() {
  console.log('显示警告框');
}

var LoginConfirm = function(text) {
  this.content = text;
}
LoginConfirm.prototype.show = function() {
  console.log('显示确认框');
}

var LoginPrompt = function(text) {
  this.content = text;
}
LoginPrompt.prototype.show = function() {
  console.log('显示提示框');
}

function createPop(type, text) {
  var types = {
        alert: LoginAlert,
        confirm: LoginConfirm,
        prompt: LoginPrompt
      },
      i = 0,
      len = types.length,
      o = new Object();
      
  o.content = text;
  o.show = function() {
    console.log('显示弹框');
    return o;
  }

  for (k in types) {
    if (k === type) {
      o[k] = new types[k](text).show; 
    }
  }

  return o;
}

module.exports = createPop;