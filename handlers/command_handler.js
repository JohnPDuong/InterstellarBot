const fs = require('fs');

module.exports = (client, Discord) => {
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    console.log('Loading commands...');

    for (const file of command_files) {
        const command = require(`../commands/${file}`);

        console.log(`-${command.name}`);

        if (command.name) {
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }

    console.log('Done loading commands.\n');
}