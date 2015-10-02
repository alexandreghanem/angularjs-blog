'use strict';

app
    // Filtre truncate
    .filter(('truncate'), function () {
        return function (input, length) {
            var output = input;
            
            if (input == undefined || length < 0) {
                return output;
            }            
            if (typeof input === 'string' || input instanceof String) {
                if (length <= input.length) {
                    var indexSpace = length;
                    for (var i = length-1; i>= 0; i--) {
                        if (output.charAt(i) == ' ') {
                            indexSpace = i;
                            break;
                        }
                    }
                    output = output.substring(0, indexSpace);
                    output = output + '...';
                }
            }        
            return output;
        }
    })
    // Filtre capitalize
    .filter(('capitalize'), function () {
        return function (input, all) {
            var output = input;
            if (input == undefined) {
                return output;
            }            
            if (typeof input === 'string' || input instanceof String) {
                if (all){
                    var arrayOfStrings = input.split(' ');
                    output = '';
                    for (var i=0; i<arrayOfStrings.length; i++) {
                        output += ' ' + arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].slice(1); 
                    }
                } else {
                    output = input.charAt(0).toUpperCase() + input.slice(1);
                }               
            }
            return output;
        }
    });
