import {ActionRowBuilder, ButtonBuilder, ButtonStyle} from '../index'
test("locale-button", () => {
    const buttons = new ActionRowBuilder({ userLocale: "e", guildLocale: "e", useLocale: "user" }, [
        new ButtonBuilder({
          style: ButtonStyle.Link,
          label: "Support Server",
          url: "https://discord.gg/EbBsuxVNYT"
        }),
        new ButtonBuilder({
          style: ButtonStyle.Link,
          label: "Invite Link",
          url: "https://discord.com/api/oauth2/authorize?client_id=887939311373267005&permissions=1610632320&scope=bot%20applications.commands"
        }),
        new ButtonBuilder({
          style: ButtonStyle.Link,
          label: "Website",
          url: "https://about.emojiguardian.xyz"
        })
      ])
    console.log(buttons.components)
 });