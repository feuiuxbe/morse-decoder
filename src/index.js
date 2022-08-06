const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let encodedStr = '';
    let arraytoFill = [];
    let arrayEncoded = [];
    let arrayEncoded2 = [];
    const arrayFromExpr = expr.split('');
    
    arrayFromExpr.forEach((element, index) => {
        
        Object.getOwnPropertyNames(MORSE_TABLE).some(value => {
            if (MORSE_TABLE[value] === element) {
                arraytoFill[index] = (Object.keys(MORSE_TABLE).find(key => MORSE_TABLE[key] === MORSE_TABLE[value])).split('');
            }
        });

        if (element === ' ') { 
            arraytoFill[index] = '**********';
        }

        for(let i=0; i<arraytoFill[index].length; i++) {
            if (arraytoFill[index][i] === '.') { 
               arraytoFill[index][i] = '10';
            } else if (arraytoFill[index][i] === '-') {
                arraytoFill[index][i] = '11';
            } else {
                arraytoFill[index][i] = '*';
            }
        }


    });

    // arraytoFill.forEach((element, index) => {
    //     if (element === '**********') {
    //         arrayEncoded[index] = '**********';
    //     } else {
    //     arrayEncoded[index] = element.split('');
    //     }
    // });

    return console.log(arraytoFill);;
}

decode('hello hello');

// module.exports = {
//     decode
// }