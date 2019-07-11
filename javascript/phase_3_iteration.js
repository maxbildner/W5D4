Array.prototype.bubbleSort = function() {
  let toggle = true;
  
  while (toggle) {
    toggle = false;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [ this[i], this[i + 1] ] = [ this[i + 1], this[i] ];
        toggle = true;
      }
    }
  }
  return this;
} 



String.prototype.substrings = function() {
  let subStrArr = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      subStrArr.push(this.slice(i, j + 1));
    } 
  }
  return subStrArr;
}