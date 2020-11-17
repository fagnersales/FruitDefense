const { Message } = require('discord.js')

const State = require("../../State")
const f = require('../general/randomFruit')

/**
 * Sets a channel as welcome channel (sends a new message when a new member arrives)
 * @param {Message} message 
 * @param {String[]} args 
 */
function set(message, args) {
    const suggestionChannelID = State.get('suggestionChannel')

    if (!args[1]) {
        return message.channel.send(`${f()} Informe o novo canal de sugestões!`)
    }

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])

    if (!channel) {
        return message.channel.send(`${f()} Não pude encontrar o canal informado.`)
    }

    if (suggestionChannelID && suggestionChannelID === channel.id) {
        return message.channel.send(`${f()} Este canal já está configurado para \`sugestão\`.`)
    }

    State.set('suggestionChannel', channel.id)

    return message.channel.send(`${f()} Parabéns, o canal ${channel} agora está configurado para \`sugestão\`!`)

}

module.exports = set