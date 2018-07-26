exports.run = (client) => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  	// status
    client.user.setStatus('Online');
    // set game
    client.user.setActivity('Kazuhira is my master!')
}