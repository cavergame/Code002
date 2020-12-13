module.exports = {
  name: 'ping',
  description: 'Просмотреть информацию о задержки бота',
  aliases: [],
  public: true,
  async execute(bot, message, args) {
    let startDate = Date.now();
    let a = new Discord.MessageEmbed()
   .setDescription(`бот работает: ${Date.now() - message.createdTimestamp}мс\nОтвет api Discord: ${bot.ping | 0 }мс`)
    .setColor('GREEN')
    message.channel.send(a)
  }
}
