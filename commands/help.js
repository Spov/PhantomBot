exports.run = (client, message, args) => {
    message.author.sendMessage("Hello, I'm the **Phantom bot**. You recently asked for help in the help text"
    	+ " channel. Below are some scenarios I can help you with. Reply with **'!pp'** and the number next to the question"
    	+ " in order for me to respond. ie. Type **'!pp 1'** if you need help joining the PhantomPain guild."
    	+ "\n**[1]** **_ How can I join the PhantomPain guild on Kenji 2 ?_**"
    	+ "\n**[2]** **_Who is managing the PhantomPain guild ?_**"
    	+ "\n**[3]** **_What are the requirements to join PhantomPain ?_**"
    	+ "\n**[4]** **_Does PhantomPain also have a TeamSpeak server ?_**"
    	+ "\n**[5]** **_How can I use the music bot ?_**"
    	+ "\n**[6]** **_How can I use the LoL bot ?_**")
		  switch (command) {
		  case "1" :
		    message.channel.send('\nTo join the guild you must message anyone from the team such as'
		    + ' the Leader or the Moderator. Reply with "!pp 2" to see who is currently in charge.');
		    break;
		  case "2" :
		    message.channel.send('\nThis is the current PhantomPain team:\n [Leader]Kazuhira'
		    + '\n [Leader]Escanor' );
		    break;
}
};