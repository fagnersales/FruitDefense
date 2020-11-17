const { Message } = require("discord.js")

const State = require('../../State')
const f = require('../general/randomFruit')

/**
 * @param {Message} message 
 */
function main(message) {
    const suggestionChannels = State.get('suggestionChannels')

    if (!suggestionChannels) return message.channel.send(`${f()} Não há canal configurado para sugestões.`)

    suggestionChannels
    .map(channelID => message.guild.channels.cache.get(channelID))
    .forEach(channel => {
        if (channel) return message.channel.send(`${f()} ${channel} Está configurado para sugestões!`)
    })
}

module.exports = main