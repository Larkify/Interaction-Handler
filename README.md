<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0; border-radius: 25px;" alt="Karma" src="https://cdn.discordapp.com/attachments/826512246834200606/866068901452054548/HwP9FKOsXQflAAAAAElFTkSuQmCC.png"> 

# ๐๐ป๐๐ฒ๐ฟ๐ฎ๐ฐ๐๐ถ๐ผ๐ป ๐๐ฎ๐ป๐ฑ๐น๐ฒ๐ฟ

  <p align="left">
    A simple slash-command handler for Discord.JS, (requires discord.js@latest)
    <br />
  <a href="https://github.com/larkify/Interaction-Handler/"><strong><i>Explore the docs ยป</i></strong></a>
    <br />
    <br />
  </p>
</p>

> **NOTE:** This is a little outdated, and the code quality isn't so good. However, it should still work!
 
## ๐๐ป๐๐๐ฎ๐น๐น๐ฎ๐๐ถ๐ผ๐ป 
- Add `interactionEvent.js.js` to a folder within your root directory.
- Add the snippet of code (`ready-event-snippet.js`) to your ready event.
- Create a folder called "interactions" and add all of your code there for slash commands. 

## ๐๐ถ๐น๐ฒ ๐ฆ๐๐ฟ๐๐ฐ๐๐๐ฟ๐ฒ
*You don't have to have your like this, but it's how I've set it up in the code so if you wish to edit it, you can :D*
```
root/
โโ index.js
|
โโ interactions/
โ  โโ ping.js
โ  โโ foobar.js
|
โโ events/
โ  โโ ready.js
|  โโ interactionEvent.js

```

## ๐๐๐๐ฟ๐ฎ ๐๐ป๐ณ๐ผ๐ฟ๐บ๐ฎ๐๐ถ๐ผ๐ป
1. I've added the module.export example in the example folder that you need in **all** of your slash command files (`interactions/`) in order for them to register.
2. If you need any help, [join my discord](https://larkx.xyz/discord) or open up an issue on this repository.
3. Let me know of any suggestions or improvements you have, but yeh! Enjoy :)

