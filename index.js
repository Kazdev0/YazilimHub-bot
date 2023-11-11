import {Client,IntentsBitField} from "discord.js";
import config from "./config.js";

const client = new Client({
    intents:[IntentsBitField.Flags.MessageContent, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.GuildMembers]
});

// ENTER CODE HERE


client.login(config.token).then(() => {console.log("BOT Running")})
