const { MessageEmbed } = require('discord.js');

const {
    joinVoiceChannel,
	createAudioResource,
	StreamType,
} = require('@discordjs/voice');

module.exports = {
    name: 'radio',
    description: 'Vibe out',
    async execute(client, interaction){
        const channel = interaction.member?.voice.channel;

        if (!channel) return interaction.channel.send('You need to be in a channel to execute this command!');

        const response = new MessageEmbed()
        .setColor('ORANGE')
        .setDescription(`Playing music! :musical_note:`);

        interaction.followUp({embeds: [response]});

        client.connection = new joinVoiceChannel({
            channelId: channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator
        });

        client.connection.subscribe(client.player);

        //example: https://streams.ilovemusic.de/iloveradio109.mp3
        const resource = createAudioResource(('https://streams.ilovemusic.de/iloveradio109.mp3'), {
            inputType: StreamType.Arbitrary,
            inlineVolume: true,
        });

        resource.volume.setVolume(0.01);

        client.player.play(resource);
    }
}