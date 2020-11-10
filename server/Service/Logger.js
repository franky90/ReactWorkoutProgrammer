import Chalk from 'chalk'
const log = console.log
export class Logger {
    static spaced = lineBreakCount => log('\n'.repeat(lineBreakCount))
    static danger = msg => log(Chalk.bgRed.bold.whiteBright(msg))
    static Title = msg => log(Chalk.bgWhiteBright.bold.black(msg))
    static Success = msg => log(Chalk.bgGreenBright.bold.black(msg))
}