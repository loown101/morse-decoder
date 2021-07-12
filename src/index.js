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
    ' ': ' ',
};

function decode(expr) {
    let arrA = expr.split('');

    let arr = [arrA];
    let arrSl = [];
    let arrSlice = [];
    let result = '';


    while (arrA.length > 0) {
        arrSl = arrA.splice(0, 10);
        arrSlice.push(arrSl);
    }

    for (let i = 0; i < arrSlice.length; i++) {
        arr = [];
        for (let j = 0; j < arrSlice[i].length; j++) {
            if (arrSlice[i][j] == '0') {
                j++;
            }

            if (arrSlice[i][j] == '1' && arrSlice[i][j + 1] == '0') {
                arr.push('.');
                j++;
            }

            if (arrSlice[i][j] == '1' && arrSlice[i][j + 1] == '1') {
                arr.push('-')
                j++;
            }

            if (arrSlice[i][j] == '*') {
                arr.push(' ');
                break;
            }
        }

        for (let key in MORSE_TABLE) {
            let str = arr.join('');

            if (str == key) {
                result += MORSE_TABLE[key];
            }

            if (str.length == 0) {
                result += ' ';
            }
        }
    }
    return result
}

module.exports = {
    decode
}