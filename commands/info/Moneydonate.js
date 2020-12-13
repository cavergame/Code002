module.exports = {
    name: 'helping',
    description: 'поддержка бота',
    aliases: ["donate"],
    public: true,
    async execute(bot, message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor("#33353c")
    .setTitle('продвижение бота')
    .setTimestamp()
    .setThumbnail('https://img.icons8.com/color/96/000000/network-drive.png')
    .addField('Помощь', `Нажми - [**сайт**](https://boosty.to/supportkazrim)`)
    .setAuthor('Code002')
    message.channel.send(embed);
}
}