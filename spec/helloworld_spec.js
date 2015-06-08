let helloWorld  = require('./../helloworld.js');

describe('Say Hello Function', function(){
  it('Should return hello world using ecma6', function(){
    expect(helloWorld.sayHello()).toEqual('hello world');
  })
})

describe('doMath Function', function(){
  it('Should return 4 unless params are passed through', function(){
    expect(helloWorld.doMath()).toEqual(4);
    expect(helloWorld.doMath(2,3)).toEqual(5);
  })
})

describe('doesExist Function',function(){
  it('Should check to see if a value exists in an array', function(){
    expect(helloWorld.doesExist(helloWorld.randomArray,6)).toEqual(false);
    expect(helloWorld.doesExist(helloWorld.randomArray,5)).toEqual(true);
  })
})

describe('findGreatest function',function(){
  it('Should locate the greatest value in an array', function(){
    expect(helloWorld.findGreatest(helloWorld.randomArray)).toEqual(5);
  })
})
