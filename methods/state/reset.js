const {  Message } = require('discord.js')
const { writeFileSync } = require('fs')

const { join } = require('path')
const f = require('../general/randomFruit')

/**
 * 
 * @param {Message} message 
 */
function reset(message) {
    const path = join(__dirname, '..', '..', 'State', 'data.json')

    writeFileSync(path, '{}')

    return message.channel.send(`${f()} Banco de dados resetado.`)

}

module.exports = reset