const { Message } = require('discord.js')

const State = require("../../State")
const f = require('../general/randomFruit')

/**
 * Sets a channel as suggestion channel (reacts with two emojis for every message)
 * @param {Message} message 
 * @param {String[]} args 
 */
function set(message, args) {
    const suggestionChannelID = State.get('suggestionChannel')

    if (!suggestionChannelID) {
        return message.channel.send(`${f()} Não há um canal de sugestões configurado!`)
    }

    State.remove('suggestionChannel')

    return message.channel.send(`${f()} O canal para sugestões foi desconfigurado com sucesso!`)

}

module.exports = set