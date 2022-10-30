import { SelectMenuBuilder } from "better-discord-builders";
import { Settings } from "../index";
import { LocaleSelectMenu } from "../interfaces/SelectMenu";
import { LocaleSelectMenuOptionBuilder } from "./SelectMenuOption";
export class LocaleSelectMenuBuilder extends SelectMenuBuilder {
    public translations?: {
        [key: string]: {
            placeholder?: string;
        }
    };
    declare public options: LocaleSelectMenuOptionBuilder[];
    constructor(data: LocaleSelectMenu | LocaleSelectMenuBuilder, settings?: Settings) {
        super(data);
        this.translations = data.translations;
        if (settings && data.translations) {
            const locale = settings.useLocale === "user" ? settings.userLocale : settings.guildLocale;
            if (data.translations[locale].placeholder) {
                this.placeholder = data.translations[locale].placeholder ?? "";
                this.data.placeholder = this.placeholder;
            }
            data.options.map((option) => {
                if (option.translations) {
                    this.options = data.options.map((option) => {
                        return new LocaleSelectMenuOptionBuilder(option, settings);
                    });
                }
            });
        }
        if (settings) {
            delete this.translations;
        }
    }
}
