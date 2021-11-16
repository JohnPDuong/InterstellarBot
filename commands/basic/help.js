const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Display all commands',
    execute(client, interaction) {
        display_val = "This is a list of all commands: \n";

        client.commands.forEach(element => {
            display_val = display_val.concat("/", element.name, ": ", element.description, "\n");
        });

        const response = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${display_val}`);
    
        interaction.followUp({embeds: [response]});
    }
}