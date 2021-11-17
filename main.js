const Discord = require('discord.js');

const { Client, Collection } = require('discord.js');
const client = new Client({ intents: [
    'GUILDS',
    'DIRECT_MESSAGES',
    'GUILD_MESSAGES',
    'GUILD_VOICE_STATES',
    'GUILD_MEMBERS',
]});
module.exports = client;

const { createAudioPlayer } = require('@discordjs/voice');
// const { DisTube } = require('distube');

client.commands = new Collection();
client.events = new Collection();

client.player = new createAudioPlayer();

// client.distube = new DisTube(client, {
//     leaveOnFinish: true,
//     emitNewSongOnly: true,
//     emitAddSongWhenCreatingQueue: true,
// });

['Commands', 'Events'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

require('dotenv').config();
client.login(process.env.token);