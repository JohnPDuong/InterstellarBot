const {
    joinVoiceChannel,
	createAudioResource,
	StreamType,
} = require('@discordjs/voice');

module.exports = {
    name: 'radio',
    description: 'Vibe out',
    async execute(client, message, args, Discord){
        const channel = message.member?.voice.channel;

        console.log(channel.id);

        if (!channel) return message.channel.send('You need to be in a channel to execute this command!');

        client.connection = new joinVoiceChannel({
            channelId: channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        });

        client.connection.subscribe(client.player);

        //example: https://streams.ilovemusic.de/iloveradio109.mp3
        const resource = createAudioResource(('https://streams.ilovemusic.de/iloveradio109.mp3'), {
            inputType: StreamType.Arbitrary,
            inlineVolume: true,
        });

        resource.volume.setVolume(0.2);

        await new Promise(res => setTimeout(() => res(2), 500));

        client.player.play(resource);

        message.channel.send('Playing music!')
    }
}