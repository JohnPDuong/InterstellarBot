const {
    joinVoiceChannel,
	createAudioResource,
	StreamType,
} = require('@discordjs/voice');

const { join } = require('path');

module.exports = {
    name: 'wth',
    description: 'Use when you are super duper upsetty wetty',
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

        const resource = createAudioResource(join(__dirname, '../audio/wth.mp3'), {
            inputType: StreamType.Arbitrary,
            inlineVolume: true,
        });

        resource.volume.setVolume(0.2);

        await new Promise(res => setTimeout(() => res(2), 500));

        client.player.play(resource);

        client.player.on("idle", () => {
            try {
                client.player.stop();
                connection.destroy();
            } catch (e) {

            }
        });

        message.channel.send('What the :rage: is even that!')
    }
}