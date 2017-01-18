'use strict';

class StringCalculator {

    constructor(){
        this.defaultValue = 0;
        this.defaultDelimiter = /[\n,]/;
        this.optionalDelimiterExp = /^\/\/.\n/;
    }

    add(input){
        if (this.isEmpty(input)){
            return this.defaultValue;
        }

        let values = this.getValues(input);

        if (this.isNegative(values)){
            throw new Error(`negatives not allowed ${values[0]}`);
        }

        return this.sum(values);
    }

    sum(values){
        return values.reduce((prev, curr) => parseInt(prev) + parseInt(curr));
    }

    isEmpty(input){
        return (input === "");
    }

    isNegative(values){
        return values.some((value) => value < 0);
    }

    getValues(input){
        if (input.search(this.optionalDelimiterExp) == 0)
        {
            let delimiter = input[2];
            let strOfValues = input.substr(4);
            return strOfValues.split(delimiter);
        }
        else
        {
            return input.split(this.defaultDelimiter);
        }
    }
}

module.exports = StringCalculator;