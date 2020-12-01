
const { networkInterfaces } = require('os');
const log = console.log
const clearScreen = console.clear
const logSpaces = () => log('\n\n\n')
const nets = networkInterfaces();
const Logger = require('./../Service/Logger')

for(let o in nets) {
    const addresses = nets[o]
    if(Array.isArray(addresses) && addresses.length > 0) {
        for(let i = 0; i < addresses.length; i++) 
        {
            let IpObject = addresses[i]
            let family = IpObject.family
            if(family === 'IPv4' && IpObject.address !== '127.0.0.1') {
                clearScreen()
                logSpaces()
                Logger.Success(`\t\tIP ADDRESS IS ---> ${IpObject.address}`)
                logSpaces()
                break
            }
        }
    }
}