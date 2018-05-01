var Human = function(param) {
  this.skill = param && param.skill || '保密';
  this.hobby = param && param.hobby || '保密';
}
Human.prototype = {
  getSkill: function() {
    return this.skill;
  },
  getHobby: function() {
    return this.hobby;
  }
}

var Name = function(name) {
  var self = this;
  (function() {
    self.wholeName = name;
    var spaceIndex = name.indexOf(' ');
    if (spaceIndex > -1) {
      self.firstName = name.slice(0, spaceIndex);
      self.lastName = name.slice(spaceIndex + 1);
    }
  })()
}

var Work = function(work) {
  var self = this;
  (function() {
    switch (work) {
      case 'code':
        self.work = '工程师';
        self.descript = '每天沉醉于编程';
        break;
      case 'UI':
      case 'UE':
        self.work = '设计师';
        self.descript = '设计更似一种艺术';
        break;
      case 'teacher':
        self.work = '教师';
        self.descript = '分享是一种快乐';
        break;
      default:
        self.work = work;
        self.descript = '对比起， 我们不清楚你的职业描述';
    }
  })()
}
Work.prototype.changeWork = function(work) {
  this.work = work;
}
Work.prototype.changeDescript = function(descript) {
  this.descript = descript
}

var Person = function(name, work) {
  var person = new Human();

  person.name = new Name(name);
  person.work = new Work(work);

  return person;
}

module.exports = Person;