const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Total Commands: ${client.commands.size}`)
  .setDescription(commands)
  .setFooter("My prefix is ?")
  message.channel.send({embeds: [embed]})
}

exports.name = "help"