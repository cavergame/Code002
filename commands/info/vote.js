module.exports = {
  name: 'vote',
  description: 'проголосовать за бота',
  aliases: [],
  public: true,
  async execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor("#33353c")
    .setTitle('Проголосовать за бота')
    .setTimestamp()
    .setThumbnail('https://img.icons8.com/bubbles/100/000000/work.png')
    .addField('Помощь', `Нажми - [**сайт 1**](https://bots.server-discord.com/644225531814084609)`)
    .addField('Помощь', `Нажми - [**сайт 2**](https://top.gg/bot/644225531814084609/vote)`)
    message.channel.send(embed);
}
}
//.
        //https://bots.server-discord.com/644225531814084609
        //https://top.gg/bot/644225531814084609/vote