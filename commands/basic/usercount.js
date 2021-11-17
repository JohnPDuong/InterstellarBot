const { MessageEmbed } = require('discord.js');
require('dotenv').config();

module.exports = {
    name: 'usercount',
    description: 'Displays how many users are in the server',
    async execute(client, interaction){
        members = await client.guilds.cache.get(process.env.guild).members.fetch();

        const response = new MessageEmbed()
        .setColor('GREEN')
        .setImage(interaction.guild.iconURL({ dynamic: true }))
        .setDescription(`${interaction.guild} has ${members.size} members`);

        interaction.followUp({embeds: [response]});
    }
}