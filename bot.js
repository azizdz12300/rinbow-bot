const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  function Rainbow() {
    client.guilds.get('ايدي سيرفرك').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(Rainbow, 1000);
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
