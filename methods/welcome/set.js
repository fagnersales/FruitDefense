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

    if (!args[1]) {
        return message.channel.send(`${f()} Informe o novo canal de \`bem-vindo\`!`)
    }

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])

    if (!channel) {
        return message.channel.send(`${f()} Não pude encontrar o canal informado.`)
    }

    if (welcomeChannelID && welcomeChannelID === channel.id) {
        return message.channel.send(`${f()} Este canal já está configurado para \`bem-vindo\`.`)
    }

    State.set('welcomeChannel', channel.id)

    return message.channel.send(`${f()} Parabéns, o canal ${channel} foi configurado para \`bem-vindo\`!`)

}

module.exports = set