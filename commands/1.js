exports.run = (client, message, args) => {
    message.author.sendMessage('\nTo join the guild you must message anyone from the team such as'
		    + ' the Leader or the Moderator. Reply with "!pp 2" to see who is currently in charge.');
};