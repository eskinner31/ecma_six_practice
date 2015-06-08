var basic = {
  sayHello() {
    return 'hello world';
  },

  doMath(a = 2, b = 2) {
    return a + b;
  },

  randomArray:  [1,2,3,4,5],

  doesExist(array,x) {
    return array.includes(x);
  },

  findGreatest(array) {
    var storage = 0;
    for(let i of array){
      if(i > storage){
        storage = i;
      }
    }
    return storage;
  }

};

module.exports = basic;
