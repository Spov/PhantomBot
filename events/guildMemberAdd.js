exports.run = (client, member) => {
  const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
  member.guild.channels.get('471662735248064522').send("Welcome to the help channel!"); 
  member.guild.channels.get('471662735248064522').send("If you need help then reply with '!pp helpme'"
  + "and the bot will send you a message"); 
}