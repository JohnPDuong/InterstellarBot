const { MessageEmbed } = require('discord.js');

const {
    joinVoiceChannel,
	createAudioResource,
	StreamType,
} = require('@discordjs/voice');

const { join } = require('path');

module.exports = {
    name: 'cc',
    description: 'That was a close call OWO',
    async execute(client, interaction) {
        const channel = interaction.member?.voice.channel;

        if (!channel) return interaction.channel.send('You need to be in a channel to execute this command!')

        const response = new MessageEmbed()
        .setColor('PURPLE')
        .setDescription(`ONII CHAN PLEASE :scream:`);

        interaction.followUp({embeds: [response]});

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator
        });

        connection.subscribe(client.player);

        //example: https://streams.ilovemusic.de/iloveradio109.mp3
        const resource = createAudioResource(join(__dirname, '../../audio/cc.mp3'), {
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
    }
}