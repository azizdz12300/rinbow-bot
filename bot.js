const Discord = require("discord.js");
const client = new Discord.Client();

Client.login("NTE1OTY0MTk2MDM5NTU3MTQz.D398sg.2LtpZ5q20yDG0UjaKfgikCb2k5Q").then(async () => {
    console.log(`Ligado em ${Client.user.tag}`)
})
Client.on('message', async message => {
    if (message.author.id === '515964196039557143') {
        let prefix = 'G'
        const args = message.content.slice(prefix.length).trim().split(' ') 
        if (message.content.startsWith(`${prefix}avatar`)) {
            Client.user.setAvatar(args[1]).then(async () => {
                await message.reply(Client.user.displayAvatarURL)
            })
        }
    }
})

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
