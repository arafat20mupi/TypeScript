"use strict";
{
    function multiply(...values) {
        return values.reduce((total, current) => total * current, 1);
    }
    console.log(multiply(2, 3, 4)); // 24
}
