const { Message } = require('discord.js')

const State = require('../../State')
const f = require('../general/randomFruit')

/**
 * 
 * @param {Message} message 
 */
function reset(message) {
    State.reset()
    return message.channel.send(`${f()} Banco de dados resetado.`)

}

module.exports = reset