const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'userinfo',
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
        .setAuthor(`${target.user.username}`, target.user.displayAvatarURL({dynamic: true}))
        .setThumbnail(target.user.displayAvatarURL({dynamic: true}))
        .setColor('NOT_QUITE_BLACK')
        .addField('UserID', `${target.user.id}`, false)
        .addField('Roles', `${target.roles.cache.map(r => r).join(' ')}`)
        .addField('Server Member Since', `${moment(target.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(target.joinedAt).startOf('day').fromNow()}`)
        .addField('Discord User Since', `${moment(target.user.createdAt).format('MMMM Do YYYY, h:mm:ss')}\n**-** ${moment(target.user.createdAt).startOf('day').fromNow()}`);

        interaction.followUp({embeds: [response]});
    }
}