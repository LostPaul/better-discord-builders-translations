import { EmbedBuilder } from "../index";
test("embed-builder", () => {
    const embed = new EmbedBuilder({
        title: "Test",
        description: "Test",
        color: "#ff0000",
        translations: {
            de: {
                title: "deutsch",
                description: "deutsch",
            }
        }
    }, { userLocale: "de", guildLocale: "en", useLocale: "user" });
    console.log(embed);
    expect(embed).toBeDefined();
})