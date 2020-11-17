const { MessageAttachment, Message } = require('discord.js')
const { readFileSync } = require('fs')

const { join } = require('path')

/**
 * 
 * @param {Message} message 
 */
function send(message) {
    const path = join(__dirname, '..', '..', 'State', 'data.json')

    const StateDataBuffer = readFileSync(path)

    message.channel.send(new MessageAttachment(StateDataBuffer, 'data.json'))

}

module.exports = send