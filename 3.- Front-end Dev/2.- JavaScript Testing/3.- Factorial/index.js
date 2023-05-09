const Calculate = {
    factorial(n) {
      if (n < 0) {
        throw new RangeError;
      }
      if (n === 0) {
        return 1;
      }
      let factorial = 1;
      for (let i = n; i > 0; i--) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  module.exports = Calculate;
  
  
  