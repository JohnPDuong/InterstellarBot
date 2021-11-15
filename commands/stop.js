module.exports = {
    name: 'stop',
    description: 'Stops music.',
    execute(client, message, args, Discord){
        client.player.stop();
        client.connection.destroy();

        message.channel.send('Stopping music...');
    }
}