const Discord = require("discord.js-selfbot-v11"); 
const chalk = require("chalk"); 
const keepAlive = require("./server");
require("dotenv").config(); 
const client = new Discord.Client({
  ws: { properties: { $browser: "Discord iOS" } },
}); 

client.on("ready", () => {
  console.clear();
  console.log(chalk.magentaBright`connected on ${client.user.tag}`);
});
keepAlive();
client.login(process.env.TOKEN);
