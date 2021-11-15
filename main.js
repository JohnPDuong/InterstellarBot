const Discord = require('discord.js');

const client = new Discord.Client({ intents: [
    'GUILDS',
    'DIRECT_MESSAGES',
    'GUILD_MESSAGES'
]
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

require('dotenv').config();

client.login(process.env.token);