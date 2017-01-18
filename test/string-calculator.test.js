'use strict';

let assert = require('chai').assert;
let Calculator = require("../class/string-calculator");

function createCalculator(){
    return new Calculator();
}

describe("String calculator", function(){

    it("should return 0 if input is empty", function(){
        let calculator = createCalculator();
        let sum = calculator.add('');
        assert.equal(sum, 0);
    });

    it("should return value if input is 1 value", function(){
        let calculator = createCalculator();
        let sum = calculator.add('1');
        assert.equal(sum, 1);
    });

    it("should return sum of 2 comma separated values", function(){
        let calculator = createCalculator();
        let sum = calculator.add('1,2');
        assert.equal(sum, (1 + 2));
    });

    it("should return sum of several comma separated values", function(){
        let calculator = createCalculator();
        let sum = calculator.add('1,2,3,4,5');
        assert.equal(sum, (1 + 2 + 3 + 4 + 5));
    });
});