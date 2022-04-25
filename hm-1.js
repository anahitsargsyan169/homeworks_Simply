// ==============================
// Don't touch
// ==============================
Array.prototype.forEach = null;
Array.prototype.map = null;
// ==============================

// Implement these methods

Array.prototype.find = function (cb, thisArg) {
  if(typeof cb !== 'function') throw new TypeError('First argument is not a function')
  const {length} = this
  for(let i = 0; i < length; i++) {
      if(cb.call(thisArg,this[i],i,this)) return this[i]
  }
};

Array.prototype.findIndex = function (cb, thisArg) {
  if(typeof cb !== 'function') throw new TypeError('First argument is not a function')
  const {length} = this
  for(let i = 0; i < length; i++) {
      if(cb.call(thisArg,this[i],i,this)) return i;
  }
  return -1;
};

Array.prototype.lastIndexOf = function (element, fromIndex = this.length-1) {
  const index = fromIndex < 0 ? this.length+fromIndex : fromIndex;
  for(let i = index; i >= 0; i--) {
      if(this[i] === element) return i
  }
  return -1;
};

Array.prototype.some = function (cb, thisArg) {
  if(typeof cb !== 'function') throw new TypeError('First argument is not a function')
  const {length} = this
  for(let i = 0; i < length; i++) {
      if(cb.call(thisArg,this[i],i,this)) return true;
  }
  return false;
};

Array.prototype.every = function (cb, thisArg) {
  if(typeof cb !== 'function') throw new TypeError('First argument is not a function')
  const {length} = this
  for(let i = 0; i < length; i++) {
      if(!cb.call(thisArg,this[i],i,this)) return false;
  }
  return true;
};

Array.prototype.reduce = function (cb, initialValue) {
  if(typeof cb !== 'function') throw new TypeError('First argument is not a function')
  let acc, startIndex;
  initialValue === undefined ? (acc = this[0], startIndex = 1) : (acc = initialValue, startIndex = 0)
  for(let i = startIndex; i< this.length; i++) {
      acc = cb(acc, this[i], i , this)
  }
  return acc;
};

Array.prototype.reduceRight = function (cb, initialValue) {
  if(typeof cb !== 'function') throw new TypeError('First argument is not a function')
  const {length} = this
  let acc, startIndex;
  initialValue === undefined ? (acc = this[length-1], startIndex = length-2) : (acc = initialValue, startIndex = length-1)
  for(let i = startIndex; i>=0; i--) {
      acc = cb(acc, this[i], i , this)
  }
  return acc;
};

Array.prototype.join = function (separator = ',') {
  let string = '';
  const {length} = this
  for(let i = 0; i< length; i++) {
      if(this[i] !== undefined && this[i] !== null) string += this[i] 
      if(i !== length-1) string += separator
  }
  return string;
};

Array.prototype.pop = function () {
  if(this.length === 0) return
  const lastElement = this[this.length-1]
  this.length--
  return lastElement
};

Array.prototype.unshift = function (...args) {
  const arr = [...this]
  for(let i = 0; i < args.length; i++) {
      this[i] = args[i]
  }
  for(let i = 0, j = args.length; i< arr.length; i++,j++) {
      this[j] = arr[i]
  }
  return this.length
};
