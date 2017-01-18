'use strict';

class StringCalculator {

    constructor(){
        this.defaultValue = 0;
    }

    add(input){
        if (this.isEmpty(input)){
            return this.defaultValue;
        }

        let values = input.split(/[\n,]/);

        return this.sum(values);
    }

    sum(values){
        return values.reduce((prev, curr) => parseInt(prev) + parseInt(curr));
    }

    isEmpty(input){
        return (input === "");
    }
}

module.exports = StringCalculator;