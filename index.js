require('dotenv').config()

const { Client } = require('discord.js')

const client = new Client()

const State = require('./State')
const f = require('./methods/general/randomFruit')

client.on('ready', _ => console.log(`Ready to work.`))

client.on('guildMemberAdd', member => {
    if (member.user.bot) return 

    const welcomeChannelID = State.get('welcomeChannel')

    if (welcomeChannelID) {
        client.channels.fetch(welcomeChannelID)
        .then(channel => channel.send(`Bem-vindo(a) ao Fruit World :grapes:, ${member}`))
    }

})

const MessageEvent = require('./messageEvent.js')
client.on('message', MessageEvent)

client.login(process.env.TOKEN)