'use strict';

class StringCalculator {

    constructor(){
        this.defaultValue = 0;
    }

    add(input){
        if (this.isEmpty(input)){
            return this.defaultValue;
        }

        return parseInt(input);
    }

    isEmpty(input){
        return (input === "");
    }
}

module.exports = StringCalculator;