const schema = mongoose.Schema({
    guildID: String,
    prefix: { type: String, default: config.prefix },
    //role: {type: String, default: `null`}
});
module.exports = mongoose.model("Guild", schema)
