const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

// {}
// []
app.get("/", (req, res) => {
  res.send("Hello world!");
})
//Slash commands
const Discord = require("discord.js");
const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});
const fs = require("fs");
const prefix = "?"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName =  file.split(".")[0]
  const command = require(`./src/commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
if(message.content.startsWith(prefix)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift()
  const command = client.commands.get(commandName)
  if(!command) return
  command.run(client, message, args)
}  
}) 
//Status
client.on("ready", () => {
client.user.setActivity('Minecraft', { type: 'PLAYING'})
})


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); // Log a message when the bot is ready

  // Announce that the bot is online
  client.channels.cache.get('Channel_ID_Here').send(`I'm online!`);
});

client.on('disconnect', () => {
  // Announce that the bot is offline
  client.channels.cache.get('Channel_ID_Here').send(`I'm offline :(`);
});
//reply's
client.on("messageCreate", message => {
  if(message.content.toLowerCase() === "boob") {
    message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase() === "bob") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "b o o p") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "b o p") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase() === "beep") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "bep") {
      message.channel.send("it's boop!")
      }

      if (message.content === "BOOP") {
      message.channel.send("calm down, just say boop!")
      }

      if (message.content.toLowerCase()  === "boopers") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "poop") {
      message.channel.send("how disrespectful, it's boop!")
      }

      if (message.content.toLowerCase()  === "pop") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "noob") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "nob") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "loop") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "lop") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "bap") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "noop") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "nop") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "baap") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "poob") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "pob") {
      message.channel.send("it's boop!")
      }

      if (message.content.toLowerCase()  === "i'll be back") {
      message.channel.send("Alright!")
      }

      if (message.content.toLowerCase()  === "ill be back") {
      message.channel.send("Alright!")
      }

      if (message.content.toLowerCase()  === "i love you▫️") {
      message.channel.send("I love you too <3")
      }

      if (message.content.toLowerCase()  === "▫️i love you") {
      message.channel.send("I love you too <3")
      }

      if (message.content.toLowerCase()  === "im back") {
      message.channel.send("Welcome back!")
      }

      if (message.content.toLowerCase()  === "i'm back") {
      message.channel.send("Welcome back!")
      }

      if (message.content.toLowerCase()  === "hello boopbot") {
      message.channel.send("Hello!")
      }

      if (message.content.toLowerCase()  === "hello boopbot!") {
      message.channel.send("hello!")
      }

      if (message.content.toLowerCase()  === "hi boopbot") {
      message.channel.send("hello!")
      }

      if (message.content.toLowerCase()  === "hi boopbot!") {
      message.channel.send("hello!")
      }

      if (message.content.toLowerCase()  === "i hate you") {
      message.channel.send("Calm down, it's not that serious!")
      }

      if (message.content.toLowerCase()  === "boopbot help") {
      message.channel.send("When you want to talk to me, change my name (boopbot) to ▫️. example: boopbot i love you = ▫️i love you")
      }

      if (message.content.toLowerCase()  === "your hot") {
      message.channel.send("Thank you!")
      }

      if (message.content.toLowerCase()  === "😭") {
      message.channel.send("Oww comn, don't cry...")
      }

      if (message.content.toLowerCase()  === "ur mom") {
      message.channel.send("DANGGG CALM DOWN")
      }

      if (message.content.toLowerCase()  === "▫️how you doing") {
      message.channel.send("I'm good, thanks for asking!")
      }

      if (message.content.toLowerCase()  === "▫️how you doing?") {
      message.channel.send("I'm good, thanks for asking!")
      }

      if (message.content.toLowerCase()  === "▫️what you doing") {
      message.channel.send("correcting people that say boop wrong imo!")
      }

      if (message.content.toLowerCase()  === "▫️what are you doing") {
      message.channel.send("correcting people that say boop rong imo!")
      }

      if (message.content.toLowerCase()  === "▫️what you doing?") {
      message.channel.send("correcting people that say boop wrong imo!")
      }

      if (message.content.toLowerCase()  === "▫️what are you doing?") {
      message.channel.send("correcting people that say boop wrong imo!")
      }

      if (message.content.toLowerCase()  === "▫️are you married with anyone") {
      message.channel.send("Yes! With Flaismie :D")
      }

      if (message.content.toLowerCase()  === "🧍‍♂️") {
      message.channel.send("That's Gioweedori. I don't like him :D")
      }

      if(message.content === "RGIPH1678yugUHLF1fuh64ZFHR"){
      if(message.author.id === "User_ID_Here"){
      message.reply("Working ✅")
      }else{
      return; //will return with nothing
      }
      }

      if (message.content.toLowerCase()  === "bp") {
      message.channel.send("it's boop!")
      }
    })

client.login(process.env.token);
