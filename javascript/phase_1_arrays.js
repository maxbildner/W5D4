Array.prototype.uniq = function() {
  const uniqArr = [];
  for (let i = 0; i < this.length; i++) {
    if(!uniqArr.includes(this[i])) {
      uniqArr.push(this[i]);
    }
  }
  return uniqArr;
}

Array.prototype.twoSum = function() {
  const Arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      let sum = this[i] + this[j];
      if (sum === 0) {
        Arr.push([i, j]);
      }
    }
  }
  return Arr;
}


Array.prototype.transpose = function() {
  const Arr = [];

  for (let i = 0; i < this.length; i++) {
    let subArr = [];

    for (let j = 0; j < this.length; j++) {
      subArr.push(this[j][i]);
    }
    Arr.push(subArr);
  }

  return Arr;
}



