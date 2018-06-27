const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Couldn't find that user..");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient permission..!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't kick that person!");

    let kickEmbed = new DiscordRichEmbed()
    .setDescription("Kicking Asses~")
    .setColor("#e56b09")
    .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
    .addField("Kicking User", `${message.author} with ID: ${message.author.id}`)
    .addField("Kicking Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickschannel = message.guild.channels.find(`name`, "moderation_log");
    if(!kickschannel) return message.channel.send("Couldn't find moderation_log..");

    message.guild.member(kUser).kick(kReason);
    kickschannel.send(kickEmbed);
}

module.exports.help = {
  name: "kick"
}
