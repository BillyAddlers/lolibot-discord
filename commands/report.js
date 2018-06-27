const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find that user..");
    let rReason = args.join(" ").slice(22);

    let reportEmbed = new DiscordRichEmbed()
    .setDescription("Report Card")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reporting User", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rReason);

    let reportschannel = message.guild.channels.find(`name`, "moderation_log");
    if(!reportschannel) return message.channel.send("Couldn't find moderation_log..");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
