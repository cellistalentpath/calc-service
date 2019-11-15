class Calculator {
  constructor(int) {
    this.num = int;
    add = function(ext) {
      this.num = this.num + ext;
      return this;
    };
    sub = function(ext) {
      this.num = this.num - ext;
      return this;
    };
    mul = function(ext) {
      this.num = this.num * ext;
      return this;
    };
    div = function(ext) {
      this.num = this.num / ext;
      return this;
    };
    equals = function() {
      return this.num;
    };
    clear = function() {
      this.num = 0;
      return this;
    };
  }
}

module.exports = Calculator;
