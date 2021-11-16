// const { channel } = require('diagnostics_channel');
// const { CommandInteraction, MessageEmbed, Guild } = require('discord.js');

// module.exports = {
//     name: 'music',
//     description: 'Complete music system',
//     options: [
//         {
//             name: 'play',
//             description: 'Play a song',
//             type: 'SUB_COMMAND',
//             option: [{ name: 'query', description: 'Provide a name or a url for the song', type: "STRING", required: true,}]
//         },
//         {
//             name: 'volume',
//             description: 'Alter the volume',
//             type: 'SUB_COMMAND',
//             option: [{ name: 'percent', description: 'xx = xx%', type: 'NUMBER', required: true,}]
//         },
//         {
//             name: 'settings',
//             description: 'Select an option',
//             type: 'SUB_COMMAND',
//             options: [{ name: 'options', description: 'Select an option', type: 'STRING', required: true,
//             choices: [
//                 {name: 'queue', value: 'queue'},
//                 {name: 'skip', value: 'skip'},
//                 {name: 'pause', value: 'pause'},
//                 {name: 'resume', value: 'resume'},
//                 {name: 'stop', value: 'stop'},
//             ]}]
//         }
//     ],
//     execute(client, message, args, Discord){
//         const { options, member, guild, channel } = message;
//         const VC = member.voice.channel;

//         if (!VC) {
//             return message.channel.send('You must be in a voice channel to play music.');
//         }

//         if (guild.me.voice.channelId && VC.id !== guild.me.voice.channelId) {
//             return message.channel.send(`I'm already playing music in ${guild.me.voice.channelId}`);
//         }

//         try {
//             switch(this.options.getSubCommand()) {
//                 case 'play' : {
//                     client.distube.playVoiceChannel( VC, options.getString('query'), { textChannel: channel, member: member });
//                     return message.reply('Request received');
//                 }
//             }
//         } catch (error) {
//             throw(error);
//         }
//     }
// }