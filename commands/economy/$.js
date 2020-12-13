module.exports = {
  name: 'pf',
  description: 'Просмотр своего баланса.',
  aliases: ["profile","$","balance","bal"],
  public: true,
  async execute(bot, message, args) {
    let member = message.guild.member(message.mentions.users.first() || message.author)
    if(member.user.bot) return message.reply(`Боты не люди.`)
    User.findOne({guildID: message.guild.id, userID: member.user.id}, (err,data) => {
    if(!data){
      let errorMess = new Discord.MessageEmbed()
      .setColor('RED')
      .setDescription(`К сожелению **${member.user.tag}** нету в базе-данных.`)
      return message.channel.send(errorMess)
    }
    let pf = new Discord.MessageEmbed()
    .setTitle(`Профиль пользователя: ${member.user.username}`)
    .setDescription(`[💸] CodeCoins: ${data.money || 0}\n[📤] Уровень: ${data.level || 1}\n[🎇] Опыта:${data.xp || 0}/${config.upXP}\n[📧] Всего сообщений: ${data.messages || 0}\n[🎉] Биография:\n${data.bio || data.prefix + `bio <текст>`}\n\n[📌] Предупреждений: ${data.warn || 0}/${config.warn}`)
    message.channel.send(pf)
    })
  }
}
