const {Client, GatewayIntentBits , Collection} = require('discord.js');
const dotenv = require('dotenv')

const prefix = "m!"; // Change Prefix here!

console.log(`[WORKER] : Starting`);

dotenv.config();

console.log(`[CLIENT] : Creating instance`);
const client = new Client(
    {
        intents:[
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ]
    }
);

console.log(`[CLIENT] : Finish create instance`);

console.log('[CLIENT] : Loading commands');
// Readcommandfile
const fs = require("fs");
let CommandCount = 0;
let FolderCount = 0;

client.commands = new Collection();

const commandFolders = fs.readdirSync(`./Commands/`)

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));
    FolderCount=FolderCount+1;

    for (const file of commandFiles) {
        const props = require(`./Commands/${folder}/${file}`);
        //console.log(`[FS] : Loaded ${file}`)
        CommandCount=CommandCount+1;
        client.commands.set(props.config.name, props)
    }

}
console.log(`[FS] : Successfully loaded ${FolderCount} folders`);
console.log(`[FS] : Successfully loaded ${CommandCount} commands`);

client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!cmd.startsWith(prefix)) return;

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

// ---------------------------------------------------------------------

// Web UI
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/Assets')))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Assets/index.html")
})

app.listen(5555)

console.log("----------")
console.log('[SERVICE] : Now online at port : 5555 | localhost:555')

client.on('ready', ()=>{
    console.log(`[API] : Connected ${client.user.tag} successfully !`)
    console.log("[WORKER] : Finished")
})

console.log('[API] : Connecting to Discord network');
client.login(process.env.TOKEN)
