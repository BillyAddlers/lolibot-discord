const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Couldn't find that user..");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Insufficient permission..!");
    if(bUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You can't ban that person!");

    let banEmbed = new DiscordRichEmbed()
    .setDescription("Banning Asses~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("Banning User", `${message.author} with ID: ${message.author.id}`)
    .addField("Banning Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banschannel = message.guild.channels.find(`name`, "moderation_log");
    if(!banschannel) return message.channel.send("Couldn't find moderation_log..");

    message.guild.member(bUser).kick(bReason);
    banschannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
