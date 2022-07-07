// create an express app
const express = require("express")
const app = express()

// discord integrations
const { Client, Intents } = require('discord.js');
const config = require('./config.json');
const client = new Client({ disableEveryone: true, intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));


client.on("ready", async () => {
    console.log(`${client.user.username} sudah online`);
    client.user.setActivity("asng.netlify.app", { type: "PLAYING" });
});


client.on("message", async (message, args) => {
    let prefix = config.prefix
    const sentence = message.content.substring(6);
    console.log(message);

    if (message.author.id == "816166240682115072" && message.content == `${prefix}asng ${sentence}`) {
        message.reply("?afk");
        return;
    }
    if (message.author.id == "816166240682115072" && message.content == `${prefix}ASNG ${sentence}`) {
        message.reply("?afk");
        return;
    }
    if (message.author.discriminator == "0011" && message.content == `${prefix}asng ${sentence}`) {
        message.reply("BALI NOMOR LIMA LIMA ALOK MARI KITA KOCOK YA GES YA");
        return;
    }
    if (message.author.discriminator == "0011" && message.content == `${prefix}ASNG ${sentence}`) {
        message.reply("BALI NOMOR LIMA LIMA ALOK MARI KITA KOCOK YA GES YA");
        return;
    }
    if (message.author.discriminator == "7558" && message.content == `${prefix}asng ${sentence}`) {
        message.reply("?av yuyu");
        return;
    }
    if (message.author.discriminator == "7558" && message.content == `${prefix}ASNG ${sentence}`) {
        message.reply("?av yuyu");
        return;
    }
    // if (message.author.discriminator == "3371" && message.content == `${prefix}asng ${sentence}`) {
    //     message.reply("MOH, YA MENURUT LU AJA");
    //     return;
    // }
    // if (message.author.discriminator == "3371" && message.content == `${prefix}ASNG ${sentence}`) {
    //     message.reply("MOH, YA MENURUT LU AJA");
    //     return;
    // }

    if (message.content == `${prefix}asng ${sentence}` || message.content == `${prefix}ASNG ${sentence}`) {
        const reverseString = (str) => {
            const splitString = str.split("");

            const reverseArray = splitString.reverse();
            const joinArray = reverseArray.join("");

            return joinArray;
        };

        const toASNG = (txt) => {
            const reversed = reverseString(txt.toUpperCase());
            const strArr = reversed.split("");

            const idx = strArr.findIndex((str) => {
                return (
                    str.includes("A") ||
                    str.includes("I") ||
                    str.includes("U") ||
                    str.includes("E") ||
                    str.includes("O")
                );
            });

            strArr[idx] = strArr[idx] + "GNSA";

            return reverseString(strArr.join(""));
        };

        const toASNGSentence = (sentence) => {
            const arr = sentence.split(" ");

            const asngArr = arr.map((a) => {
                return toASNG(a);
            });

            return asngArr.join(" ");
        };
        message.reply(toASNGSentence(sentence));
        return;
    };
});

client.login(config.token); 