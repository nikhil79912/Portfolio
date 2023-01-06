function higherOrder2() {
    return function () {
      return function () {
        return function () {
          return function () {
            return "Do something";
          };
        };
      };
    };
  }
  var x = higherOrder2();
  console.log(x())
   