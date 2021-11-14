const Discord = require('discord.js');

const client = new Discord.Client({ intents: [8] });

const prefix = '-';

client.once('ready', () => {
    console.log('To the moon!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong!')
    }
    else {
        message.channel.send('Command not recognized.');
    }
});

client.login('OTA5MzY1NTkzMjYwNTU2Mjg4.YZDOtA.uttzQQlkQDj9s6s4qexO-_kqZA0');