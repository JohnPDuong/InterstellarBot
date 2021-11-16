const fs = require('fs');

module.exports = (client) => {
    const event_folders = fs.readdirSync('./events');

    console.log(`Loading events...`);

    for (const folder of event_folders) {
        const event_files = fs.readdirSync(`./events/${folder}`).filter(files => files.endsWith('.js'));
        for (const file of event_files) {
            const event = require(`../events/${folder}/${file}`);

            if (event.once) {
                client.once(event.name, (...args) => event.execute(client, ...args));
            } else {
                client.on(event.name, (...args) => event.execute(client, ...args));
            }

            console.log(event.name);
        }
    }

    console.log('Done loading events.\n');
}