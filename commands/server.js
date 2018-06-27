const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let servicon = message.guild.iconURL;
    let servembed = new DiscordRichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(servicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("Joined On", message.member.joinedAt)
    .addField("Number of Lolicons", message.guild.memberCount);

    message.channel.send(servembed);

}

module.exports.help = {
  name: "server"
}
