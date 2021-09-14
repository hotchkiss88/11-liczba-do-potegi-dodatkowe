function powerNumber(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        // if (exponent === 0) {
        //     result = 1;
        // }
        // if (exponent === 1) {
        //     result = base;
        // }
        // if (exponent === 2) {
        //     result = base * base
        // } else {
        result *= base;
        // }
    }
    console.log(result);
}
powerNumber(2, 7)