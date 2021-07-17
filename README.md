<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0; border-radius: 25px;" alt="Karma" src="https://cdn.discordapp.com/attachments/826512246834200606/866068901452054548/HwP9FKOsXQflAAAAAElFTkSuQmCC.png"> 

# 𝗜𝗻𝘁𝗲𝗿𝗮𝗰𝘁𝗶𝗼𝗻 𝗛𝗮𝗻𝗱𝗹𝗲𝗿

  <p align="left">
    A simple slash-command handler for Discord.JS, (requires discord.js@dev)
    <br />
  <a href="https://github.com/larkify/Interaction-Handler/"><strong><i>Explore the docs »</i></strong></a>
    <br />
    <br />
  </p>
</p>

## 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝗮𝘁𝗶𝗼𝗻 
- Add `interaction.js` to a folder within your root directory.
- Add the snippet of code (`ready-event-snippet.js`) to your ready event.
- Create a folder called "interactions" and add all of your code there for slash commands. 

## 𝗙𝗶𝗹𝗲 𝗦𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲
*You don't have to have your like this, but it's how I've set it up in the code so if you wish to edit it, you can :D*
```
root/
├─ index.js
|
├─ interactions/
│  ├─ ping.js
│  ├─ foobar.js
|
├─ handlers/
│  ├─ interaction.js
|
├─ events/
│  ├─ ready.js

```

## 𝗘𝘅𝘁𝗿𝗮 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻
I've added the module.export example in the example folder that you need in **all** of your slash command files (`interactions/`) in order for them to register.

