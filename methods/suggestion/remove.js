const { Message } = require('discord.js')

const State = require("../../State")
const f = require('../general/randomFruit')

/**
 * Sets a channel as suggestion channel (reacts with two emojis for every message)
 * @param {Message} message 
 * @param {String[]} args 
 */
function set(message, args) {
    const suggestionChannels = State.get('suggestionChannels')

    if (!suggestionChannels) {
        return message.channel.send(`${f()} Não há um canal de sugestões configurado!`)
    }

    if (args[1]) {
        const specificChannel = message.mentions.channels.first() || suggestionChannels.find(channel => channel === args[1])
        if (!specificChannel) {
            return message.channel.send(`${f()} ${args[1]} Não está configurado como um canal ou não foi reconhecido.`)
        } else {    
            State.set('suggestionChannels', suggestionChannels.filter(channelID => channelID !== specificChannel.id))
            return message.channel.send(`${f()} ${specificChannel} Foi desconfigurado com sucesso!`)
        }
    } else {
   
        State.remove('suggestionChannels')
        
        return message.channel.send(`${f()} Todos os canais de sugestões foram desconfigurados!`)
        
    }
}

module.exports = set