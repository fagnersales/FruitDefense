require('dotenv').config()

const { Client } = require('discord.js')

const client = new Client()

const State = require('./State')

client.on('ready', _ => console.log(`Ready to work.`))

client.on('guildMemberAdd', member => {
    if (member.user.bot) return 

    const welcomeChannelID = State.get('welcomeChannel')

    if (welcomeChannelID) {
        client.channels.fetch(welcomeChannelID)
        .then(channel => channel.send(`Olá ${member} seja bem-vindo à Fruit World!`))
    }

})

client.login(process.env.TOKEN)