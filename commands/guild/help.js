module.exports = {
    name: "help",
    description: "Описания команд",
    aliases: ["h"],
    public: true,
    async execute(bot, message, args) {
        function list(cat, cname) {
            return `**${cname}**: ${bot.commands.filter(cmd => cmd.category == cat).map(cmd => `\`${cmd.name}\``).join(", ")}`;
        }
      let embed = new Discord.MessageEmbed()
      .setColor(config.color)
      .setDescription(`${list("economy", "Economy")}\n${list("guild", "Guild")}\n${list("fan", "Fan")}\n${list("music", "Music")}\n${list("info", "Info")}\n${list("NSFW", "NSFW")}\n${list("vimeworld", "Vimeworld")}`)
      .setFooter(`>>Всего комманд: ${bot.commands.size} | by Cost`)
      .addField(`>>Разработчики:`,`${config.owner.map(x => bot.users.cache.get(x).tag).join('\n')}`)
        message.channel.send(embed)
    }
};
