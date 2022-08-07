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
    let decodedText = '';

    for (let i = 0; i < expr.length; i = i + 10) {

        let subStr = expr.substring(i, i + 10);
        if (subStr === '**********') {
            decodedText += ' ';
            continue;
        }

        let morseText = '';

        for (let i = 0; i < 10; i = i + 2) {
            if (subStr.substring(i, i + 2) === '10') {
                morseText += '.';
            }
            if (subStr.substring(i, i + 2) === '11') {
                morseText += '-';
            }
        }
        decodedText += MORSE_TABLE[morseText];
    }

    return decodedText;
}

module.exports = {
    decode
}