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
    const regex = /\d{10}\*{0,}/g;
    let array = [...expr.matchAll(regex)]

    let newArray = array.map(arr => {
        let result = [];

        for (i = 0; i < arr[0].length; i += 2) {
            if (`${arr[0][i]}${arr[0][i + 1]}` == '10') {
                result.push('.')
            } else if (`${arr[0][i]}${arr[0][i + 1]}` == '11') {
                result.push('-')
            } else if (arr[0].slice(i, i + 10) == '**********') {
                result.push(' ')
            }
        }
        return result;
    })

    var words = ''
    newArray.forEach(arr => {
        if (arr.indexOf(' ') != -1) {
            words += MORSE_TABLE[arr.join('').trim()] + ' '
        } else { words += MORSE_TABLE[arr.join('').split(' ')] }
    })
    return (words.split("  ")).join(" ")
}


module.exports = {
    decode
}
