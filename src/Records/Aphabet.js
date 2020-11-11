export class Alphabet {
    static start = 'A'.charCodeAt(0)
    static getAlphabetFromIndex = index => String.fromCharCode(index + Alphabet.start)
}