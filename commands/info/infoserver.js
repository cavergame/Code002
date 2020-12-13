module.exports = {
    name: "infoserver",
    description: "",
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        let Embed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle(`*${message.guild.name} Информация*`)
        .addField(`Участников`,`Пользователей: ${message.guild.members.cache.filter(m => !m.user.bot).size} | Ботов: ${message.guild.members.cache.filter(m => m.user.bot).size} | Всего: ${message.guild.memberCount}`,true)
        .addField(`Уровень защиты`,message.guild.verificationLevel,true)
        .addField(`Количество ролей`,message.guild.roles.cache.size,true)
        .addField(`Каналы`,`Текстовые: ${message.guild.channels.cache.filter(ch => ch.type=="text").size} | Голосовые: ${message.guild.channels.cache.filter(ch => ch.type=="voice").size} | Категорий: ${message.guild.channels.cache.filter(ch => ch.type=="category").size} | Всего: ${message.guild.channels.cache.size}`,true)
        .addField(`Создатель`,`${message.guild.owner} (${message.guild.ownerID})`,true)
        .addField(`Сервер`,`${message.guild.name} (${message.guild.id})`,true)
        .setThumbnail(message.guild.iconURL())
        message.channel.send(Embed)
},
    }
