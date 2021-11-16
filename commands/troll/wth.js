const { MessageEmbed } = require('discord.js');
const {
    joinVoiceChannel,
	createAudioResource,
	StreamType,
} = require('@discordjs/voice');

const { join } = require('path');

module.exports = {
    name: 'wth',
    description: 'Use when you are super duper upsetty wetty',
    async execute(client, interaction){
        const channel = interaction.member?.voice.channel;

        if (!channel) return interaction.channel.send('You need to be in a channel to execute this command!');

        const response = new MessageEmbed()
        .setColor('RED')
        .setDescription(`What the :rage: is even that?!`);

        interaction.followUp({embeds: [response]});

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator
        });
        
        connection.subscribe(client.player);

        const resource = createAudioResource(join(__dirname, '../../audio/wth.mp3'), {
            inputType: StreamType.Arbitrary,
            inlineVolume: true,
        });

        client.player.play(resource);

        client.player.on("idle", () => {
            try {
                client.player.stop();
                connection.destroy();
            } catch (e) {

            }
        });
    }
}