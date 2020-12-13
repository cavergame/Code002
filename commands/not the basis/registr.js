module.exports = {
    name: 'reg',
    description: '?',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        message.delete()
        message.member.roles.add("681974065019486213");

    }
}