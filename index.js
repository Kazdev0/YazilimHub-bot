const express = require("express"), const app = express(); app.listen(80)
import {Client,IntentsBitField} from "discord.js";
import config from "./config.js";

const client = new Client({
    intents:[IntentsBitField.Flags.MessageContent, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.GuildMembers,IntentsBitField.Flags, IntentsBitField.Flags.Guilds]
});

client.on("guildMemberAdd", (member) => {

    member.roles.add(config.roles.members).catch((err) => {
        return console.log(err);
    }).finally(() => {
        console.log("Sunucuya Birisi Dahil oldu : \n", member)
    })

})


client.login(config.token).then(() => {console.log("BOT Running")})