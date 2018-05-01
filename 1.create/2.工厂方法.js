var Factory = function(type, text) {
  if(!(this instanceof Factory)) {
    return new Factory(type, text);
  }

  var s = new this[type](text);
  return s;
}

Factory.prototype = {
  Java: function(text) {
    console.log(text);
  },
  Javascript: function(text) {
    console.log(text);
  },
  php: function(text) {
    console.log(text);
  }
}

var data = [
  {type: 'Java', text: 'Java哪家强'},
  {type: 'Javascript', text: 'Javascript哪家强'},
  {type: 'php', text: 'php哪家强'}
]
function printData() {
  for (var i=0; i<data.length; i++) {
    Factory(data[i].type, data[i].text);
  }
}

module.exports = printData;