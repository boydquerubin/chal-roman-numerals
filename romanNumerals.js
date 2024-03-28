function convertToRoman(num) {
    const romanNumerals = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    };
    
    let result = '';

    const sortedKeys = Object.keys(romanNumerals).sort((a, b) => b - a);

    for (let key of sortedKeys) {
        let value = parseInt(key);
        while (num >= value) {
            result += romanNumerals[value];
            num -= value;
        }
    }

    return result;
}

console.log(convertToRoman(256));