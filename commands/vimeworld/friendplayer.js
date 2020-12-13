module.exports = {
    name: "friend",
    description: "Команда позволяющая узнать описание других, не круто ли?",
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        const vime = new vimeworld(config.vimetoken);
        const userName = args.join(" ");
        if(!userName) return message.reply(`Вы ввели неверный никнейм игрока\n\nПример: !user Vlad_Cyphersky | !user DimoshaTyan | !user LoganFrench`);
		vime.getUsersbyName(userName).then((result) => {
			var id = result[0].id;
            var nick = result[0].username;
            var rank = result[0].rank;
		vime.getSession(id).then((result) => {
    var status = result.online.value ? "Онлайн | "+result.online.message : "Оффлайн";
            vime.getFriends(id).then((result) => {
                var friends_list = "";
                result.friends.forEach(friend => {
                    friends_list += ("`LVL: " + friend.level + " " + vime.returnReadable(friend.rank).prefix + " " + friend.username) + " | " + status + "`\n";
                });
		    
		    return message.channel.send("Список друзей игрока `" + vime.returnReadable(rank).prefix + " " + nick + "`: \n\n" + friends_list).catch(err => {
					let embed = new Discord.MessageEmbed().setDescription(ayy + ` ` + err + `\n\nЗа описанием ошибки, обратитесь на сервер тех. поддержки: **https://invite.gg/bloodproject**`);
                    return message.reply(embed);
            })
        })
        })    })
    }
}