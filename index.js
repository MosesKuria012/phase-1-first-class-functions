function receivesAFunction(callback) {
    callback();
  }


  function returnsANamedFunction() {
    return function namedFunction() {
      // do something
    };
  }
  

  function returnsAnAnonymousFunction() {
    return function() {
      // do something
    };
  }
  