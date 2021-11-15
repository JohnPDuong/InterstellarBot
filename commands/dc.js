const {
    joinVoiceChannel,
	createAudioResource,
	StreamType,
} = require('@discordjs/voice');

const { join } = require('path');

module.exports = {
    name: 'dc',
    description: 'Use when people are angy wangy',
    async execute(client, message, args, Discord){
        const channel = message.member?.voice.channel;

        console.log(channel.id);

        if (!channel) return message.channel.send('You need to be in a channel to execute this command!')

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        });

        connection.subscribe(client.player);

        connection.on('ready', () => {
            console.log('Ready to play audio!');
        });

        //example: https://streams.ilovemusic.de/iloveradio109.mp3
        const resource = createAudioResource(join(__dirname, '../audio/dc.mp3'), {
            inputType: StreamType.Arbitrary,
            inlineVolume: true,
        });

        resource.volume.setVolume(0.2);

        await new Promise(res => setTimeout(() => res(2), 500));

        client.player.play(resource);

        client.player.on('idle', () => {
            try {
                client.player.stop();
                connection.destroy();
            } catch (e) {

            }
        });

        message.channel.send('Daddy please chill :sob:')
    }
}