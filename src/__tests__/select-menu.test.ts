import { LocaleSelectMenuBuilder } from '../components/SelectMenu'
import { LocaleActionRowBuilder } from '../components/ActionRow'
test("select-menu-builder", () => {
    const components = new LocaleActionRowBuilder({ userLocale: "de", guildLocale: "en", useLocale: "user" }, [
        new LocaleSelectMenuBuilder({
            type: 3,
            custom_id: "test",
            placeholder: "test",
            options: [
                {
                    label: "test",
                    value: "test",
                }
            ]
        })
    ])
})