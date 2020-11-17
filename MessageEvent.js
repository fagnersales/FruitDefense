const { Message } = require("discord.js")

const State = require('./State')

const welcomeChannelSet = require('./methods/welcome/set')
const welcomeChannelRemove = require('./methods/welcome/remove')

const suggestionChannels = require('./methods/suggestion')
const suggestionChannelSet = require('./methods/suggestion/set')
const suggestionChannelRemove = require('./methods/suggestion/remove')
const suggestionChannelEmojis = require('./methods/suggestion/emojis')

const stateReset = require('./methods/state/reset')
const stateSend = require('./methods/state/send')

/**
 * @param {Message} message
 */
function run(message) {

    if (!message.member.permissions.has('ADMINISTRATOR') || message.channel.type === 'dm' || message.author.bot) return

    const prefix = 'fruit.'

    if (message.content.startsWith(prefix)) {

        const commandName = message.content.slice(prefix.length).split(' ')[0].toLowerCase()

        const args = message.content.toLowerCase().split(' ').slice(1)

        if (commandName === 'ping') message.reply(`Ping: ${message.client.ws.ping}`)

        if (commandName === 'welcome') {
            if (args[0] === 'set') welcomeChannelSet(message, args)
            if (args[0] == 'remove') welcomeChannelRemove(message, args)
            if (args[0] === 'emit') message.client.emit('guildMemberAdd', message.member)
        }

        if (commandName === 'suggestion') {
            if (!args[0]) suggestionChannels(message, args)
            if (args[0] === 'set') suggestionChannelSet(message, args)
            if (args[0] === 'remove') suggestionChannelRemove(message, args)
            if (args[0] === 'emojis') suggestionChannelEmojis(message, args)
        }

        if (commandName === 'state') {
            if (args[0] === 'send') stateSend(message, args)
            if (args[0] === 'reset') stateReset(message, args)
        }
    }
}

module.exports = run