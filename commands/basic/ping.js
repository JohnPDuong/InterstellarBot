const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'This is a ping command!',
    execute(client, interaction){
        const response = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${client.ws.ping} ms`);

        interaction.followUp({embeds: [response]});
    }
}