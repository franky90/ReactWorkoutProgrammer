const chalk = require('chalk')
const log = console.log

class Logger {
    static spaced = lineBreakCount => log('\n'.repeat(lineBreakCount))
    static danger = msg => log(chalk.bgRed.bold.whiteBright(msg))
    static Title = msg => log(chalk.bgWhiteBright.bold.black(msg))
    static Success = msg => log(chalk.bgGreenBright.bold.black(msg))
}


module.exports = Logger