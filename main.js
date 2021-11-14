const Discord = require('discord.js');

const client = new Discord.Client({ intents: [] });

const prefix = '-';

require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    /*if (!message.content.startsWith(prefix)) message.channel.send('I GOT IT!');

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong!');
    }
    else {
        message.channel.send('Command not recognized.');
    }*/

    if (message.content === "ping") {
        message.reply("pong");
    }
});

client.login(process.env.token);