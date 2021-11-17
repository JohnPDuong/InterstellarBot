const fs = require('fs');

module.exports = (client) => {
    const command_folders = fs.readdirSync('./commands/');
    const commands_arry = [];

    console.log('Loading commands...');

    for (const folder of command_folders) {
        const command_files = fs.readdirSync(`./commands/${folder}`).filter(files => files.endsWith('.js'));

        for (const file of command_files) {
            const command = require(`../commands/${folder}/${file}`);

            client.commands.set(command.name, command);
            commands_arry.push(command);
            console.log(`-${command.name}`);
        }
    }

    client.on('ready', () => {
        client.guilds.cache.get('828680113167925269').commands.set(commands_arry);
    });

    console.log('Done loading commands.\n');
}