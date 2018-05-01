var LoopImg = function(imgs, container) {
  this.imgs = imgs;
  this.container = container;
}

LoopImg.prototype = {
  createImg: function() {
    console.log('create image');
  },
  changeImg: function() {
    console.log('change image');
  }
}

var SlideLoopImg = function(imgs, container) {
  LoopImg.call(this, imgs, container);
}
SlideLoopImg.prototype = new LoopImg();
SlideLoopImg.prototype.changeImg = function() {
  console.log('SlideLoopImg change image');
}

var FadeLoopImg = function(imgs, container) {
  LoopImg.call(this, imgs, container);
}
FadeLoopImg.prototype = new LoopImg();
FadeLoopImg.prototype.changeImg = function() {
  console.log('FadeLoopImg change image');
}