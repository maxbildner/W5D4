Array.prototype.myEach = function(cb) {
  
  for (let i = 0; i < this.length; i++) {
    // console.log(this[i]);
    cb(this[i], i);
  }
}

// [1, 2, 3].myEach(cb);

function cb(e) {
  return e * 2;
}

Array.prototype.myMap = function(cb) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i]));
  }

  return arr;
}

// 1, 2     =>  3
function callback(acc, el) {
  return acc + el;
}
// [1,2,3].myReduce(callback, 100)    => 106


// [1,2,3].myReduce(callback)         => 6
Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue; 
  let i = 0;

  if (initialValue === undefined) {
    acc = this[i];
    i = 1;
  }

  this.slice(i).myEach(function(el) {
    acc = callback(acc, el);
  });

  return acc;
}





