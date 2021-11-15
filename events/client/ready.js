module.exports = (NULL, client, Discord) => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('Running tests...', {type: "PLAYING"});
}