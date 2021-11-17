const { MessageButton, MessageActionRow, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'slap',
    description: 'Kinda like a poke but yikes',
    execute(client, interaction) {
        const response = new MessageEmbed()
        .setColor('DARK_BUT_NOT_BLACK')
        .setDescription('SLAP!');

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('fronthand')
                .setLabel('FRONT HAND')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('backhand')
                .setLabel('BACK HAND')
                .setStyle('SUCCESS'),
        );

        interaction.followUp({embeds: [response], components: [row]});
    }
}