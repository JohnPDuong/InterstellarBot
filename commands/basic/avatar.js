const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Display user information',
    options: [
        {
            name: 'target',
            description: 'Select a target',
            type: 'USER',
            required: true
        },
    ],
    execute(client, interaction) {
        const target = interaction.options.getMember('target');

        const response = new MessageEmbed()
        .setAuthor(`${target.user.username}`)
        .setImage(target.user.displayAvatarURL({dynamic: true}))

        interaction.followUp({embeds: [response]});
    }
}