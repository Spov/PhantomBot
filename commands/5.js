exports.run = (client, message, args) => {
    message.author.sendMessage("\n**Music Bot Functionality**"
    	    + "\n**Play a song**" +
    	    "\n To play a song you can either play it with the song name: **!play Hangover - Dynoro**"
    	    + " or you can play it with its link such as: **!play https://www.youtube.com/watch?v=d6hTHNEW4rE**"
    	    + " both of these commands will play the same song. *Note: Once you use the **!play** command,"
    	    + " the music bot will automatically join your voice channel.*"
    	    + "\n\n**Skip a song** "
    	    + "\nTo simply skip a song type the following command: **!skip**."
    	    + "\n\n**Search for a song**."
    	    + "\nTo search for a song use the **!search** command and the name of the song after it."
    	    + "\nThis will return a list of youtube videos with the specified song name and you can"
    	    + " enter the number next to the video to start playing that song."
    	    + "\n\n**Find song lyrics**"
    	    + "\nTo find song lyrics use the following command: **!lyrics** and the song name. This will"
    	    + " try and find the lyrics for the specified song."
    	    + "\n\n**Additional information**"
    	    + "\nThe music bot can also play youtube playlists."
    	    + " For a full list of commands which the music bot supports visit the following site:"
    	    + " https://rythmbot.co/features");
};