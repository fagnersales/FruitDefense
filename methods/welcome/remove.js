const { Message } = require('discord.js')

const State = require("../../State")
const f = require('../general/randomFruit')

/**
 * Sets a channel as welcome channel (sends a new message when a new member arrives)
 * @param {Message} message 
 * @param {String[]} args 
 */
function set(message, args) {
    const welcomeChannelID = State.get('welcomeChannel')

    if (!welcomeChannelID) {
        return message.channel.send(`${f()} Não há um canal de boas-vindas configurado!`)
    }

    State.remove('welcomeChannel')

    return message.channel.send(`${f()} O canal para boas-vindas foi desconfigurado com sucesso!`)

}

module.exports = set