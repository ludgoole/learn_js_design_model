function changeColor(dom, color, bg) {
  dom.style.color = color;
  dom.style.background = bg;
}

span[0].onmouseover = function() {
  changeColor(this, 'red', 'yellow');
}

span[1].onmouseover = function() {
  changeColor(this, 'yellow', 'red');
}