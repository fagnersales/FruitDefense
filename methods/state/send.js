const { MessageAttachment, Message } = require('discord.js')
const { readFileSync } = require('fs')

const { join } = require('path')

const f = require('../general/randomFruit')

/**
 * 
 * @param {Message} message 
 */
function send(message) {
    const path = join(__dirname, '..', '..', 'State', 'data.json')

    const StateDataBuffer = readFileSync(path)

    const tooLarge = Buffer.from(StateDataBuffer).toString('utf-8').length > 1500

    if (tooLarge) {
        message.channel.send(f(), new MessageAttachment(StateDataBuffer, 'data.json'))
    } else {
        message.channel.send(`${f()} \`\`\`js\n${readFileSync(path, 'utf-8')}\`\`\``)
    }

}

module.exports = send