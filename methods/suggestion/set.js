const { Message } = require('discord.js')

const State = require("../../State")
const f = require('../general/randomFruit')

/**
 * Sets a channel as welcome channel (sends a new message when a new member arrives)
 * @param {Message} message 
 * @param {String[]} args 
 */
function set(message, args) {
    const suggestionChannels = State.get('suggestionChannels')

    if (!args[1]) {
        return message.channel.send(`${f()} Informe o(s) canal(is) para sugestões!`)
    }

    const channels = message.mentions.channels.array()

    if (!channels) return message.channel.send(`${f()} Mencione o(s) canal(is) para ser(em) configurado(s)!`)

    channels
    .filter(channel => !(suggestionChannels || []).includes(channel.id))
    .map(channel => {
        message.channel.send(`${f()} ${channel} Foi configurado para sugestões!`)
        State.push('suggestionChannels', channel.id)
    })

}

module.exports = set