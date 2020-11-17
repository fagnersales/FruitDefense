const { Message } = require('discord.js')

const State = require("../../State")
const f = require('../general/randomFruit')

/**
 * Sets a channel as welcome channel (sends a new message when a new member arrives)
 * @param {Message} message 
 * @param {String[]} args 
 */
async function set(message, args) {
    if (!args) {
        const emoji1 = State.get('suggestionEmojis1')
        const emoji2 = State.get('suggestionEmojis2')

        return message.channel.send(`${f()} Os emojis estão configurados como: ${emoji1} ${emoji2}`)
    }

    if (!args[1] && !args[2]) {
        return message.channel.send(`${f()} É preciso escolher os dois emojis.`)
    }

    const emojis = args.slice(1, 3)

    for (const emoji of emojis) {
        try {
            await message.react(message.client.emojis.cache.get(emoji) || emoji)
        } catch (error) {
            return message.channel.send(`${f()} O emoji ${emoji} não foi reconhecido, por favor, tente novamente.`)
        }
    }

    emojis.forEach((emoji, index) => State.set(`suggestionEmoji${index + 1}`, emoji))
    return message.channel.send(`${f()} Os emojis foram salvos com sucesso!`)
}

module.exports = set