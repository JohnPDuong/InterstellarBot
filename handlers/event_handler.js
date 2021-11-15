const fs = require('fs');

module.exports = (client, Discord) => {
    const load_dir = (dirs) => {
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        console.log(`Loading events...`);

        for (const file of event_files) {
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];

            console.log(`Loading ${event_name}.`);
            
            client.on(event_name, event.bind(null, Discord, client));
        }

        console.log('Done loading events.\n');
    }

    ['client', 'guild'].forEach(e => load_dir(e));
}