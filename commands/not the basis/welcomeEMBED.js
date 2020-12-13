module.exports = {
    name: '86',
    description: '?',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setTitle("Информация сервера")
        .setDescription(`**Приветствуем вас на нашем сервере Basic сервер.** \n Этот сервер предназначен для лампового комьюнити. \n Вы тут найдёте развлекательных ботов, интересные роли с уровнями, интересными возможностьями и многое другое! `)
        .setImage("https://media1.tenor.com/images/46cf8801a50fe43770acaf78ef760c64/tenor.gif?itemid=11627087")
        .setColor("#33353c")
    message.channel.send(embed)
        }
    }