const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'stop',
    description: 'Stops music.',
    execute(client, interaction) {
        if (client.connection) {
            client.player.stop();
            client.connection.destroy();
    
            const response = new MessageEmbed()
            .setColor('PURPLE')
            .setDescription(`Stopping music! :smile:`);
    
            interaction.followUp({embeds: [response]});
        } else {
            interaction.followUp()
        }
    }
}