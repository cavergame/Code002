module.exports = {
    name: '87',
    description: '?',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setTitle("Регистрация на сервер")
        .setDescription(`**Чтобы пройти регистрацию ведите команду** >>?reg`)
        .setImage("https://media1.tenor.com/images/46cf8801a50fe43770acaf78ef760c64/tenor.gif?itemid=11627087")
        .setColor("#33353c")
    message.channel.send(embed)
        }}