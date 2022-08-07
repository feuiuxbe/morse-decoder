const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arraytoFill = [];

    const arrayFromExpr = expr.split('');

    arrayFromExpr.forEach((element, index) => {
        Object.getOwnPropertyNames(MORSE_TABLE).some(value => {
            if (MORSE_TABLE[value] === element) {
                arraytoFill[index] = (Object.keys(MORSE_TABLE).find(key => MORSE_TABLE[key] === MORSE_TABLE[value])).split('');
            }
        });
        if (element === ' ') {
            arraytoFill[index] = ['**********'];
        }
        for (let i = 0; i < arraytoFill[index].length; i++) {
            if (arraytoFill[index][i] === '.') {
                arraytoFill[index][i] = '10';
            };
            if (arraytoFill[index][i] === '-') {
                arraytoFill[index][i] = '11';
            };
        }
    });

    for (let i = 0; i < arraytoFill.length; i++) {
        if (arraytoFill[i].length < 5 && arraytoFill[i] != '**********') {
            arraytoFill[i] = arraytoFill[i].join('').padStart(10, '0');
        }
        if (arraytoFill[i] == '**********') {
            arraytoFill[i] = arraytoFill[i].join('');
        }
    }

    return arraytoFill.join('');
}

module.exports = {
    decode
}