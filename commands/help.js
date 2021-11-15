module.exports = {
    name: 'help',
    description: 'Display all messages',
    execute(client, message, args, Discord){
        retVal = "This is a list of all commands: \n";

        client.commands.forEach(element => {
            retVal = retVal.concat("-", element.name, ": ", element.description, "\n");
        });

        message.channel.send(retVal);
    }
}