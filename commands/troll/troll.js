const { MessageEmbed } = require('discord.js');

const {
    joinVoiceChannel,
	createAudioResource,
	StreamType,
} = require('@discordjs/voice');

const { join } = require('path');
const fs = require('fs');

module.exports = {
    name: 'troll',
    description: 'Play troll sounds',
    options: [
        {
            name: 'audio',
            description: 'Name of audio',
            type: 'STRING',
            required: true,
        }
    ],
    async execute(client, interaction) {
        const channel = interaction.member?.voice.channel;

        if (!channel) return interaction.channel.send('You need to be in a channel to execute this command!')

        const target = interaction.options.get('audio');

        response = new MessageEmbed();

        if (fs.existsSync(join(__dirname, `../../audio/${target.value}.mp3`)))
        {
            response = new MessageEmbed()
            .setColor('PURPLE')
            .setDescription(`Don't mind me... :trolleybus:`);

            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator
            });

            connection.subscribe(client.player);

            const resource = createAudioResource(join(__dirname, `../../audio/${target.value}.mp3`), {
                inputType: StreamType.Arbitrary,
                inlineVolume: true,
            });

            client.player.play(resource);

            client.player.on('idle', () => {
                try {
                    client.player.stop();
                    connection.destroy();
                } catch (e) {

                }
            });
        } else {
            response = new MessageEmbed()
            .setColor('PURPLE')
            .setDescription(`Troll does not exist.`);
        }

        interaction.followUp({embeds: [response]});
    }
}