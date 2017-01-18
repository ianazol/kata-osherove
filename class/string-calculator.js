'use strict';

class StringCalculator {

    constructor(){
        this.defaultValue = 0;
        this.defaultDelimiter = /[\n,]/;
        this.optionalDelimiterExp = /^\/\/;\n/;
    }

    add(input){
        let values = [];

        if (this.isEmpty(input)){
            return this.defaultValue;
        }

        if (input.search(this.optionalDelimiterExp) == 0)
        {
            let delimiter = input[2];
            let strOfValues = input.substr(4);
            values = strOfValues.split(delimiter);
        }
        else
        {
            values = input.split(this.defaultDelimiter);
        }

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