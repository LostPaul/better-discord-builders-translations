import { SelectMenuOptionBuilder } from 'better-discord-builders';
import { LocaleSelectMenuOption } from '../interfaces/SelectMenu';
import { Settings } from '../index';
export class LocaleSelectMenuOptionBuilder extends SelectMenuOptionBuilder {
    public translations?: {
        [key: string]: {
            label?: string;
            description?: string;
        }
    };
    constructor(data: LocaleSelectMenuOptionBuilder | LocaleSelectMenuOption, settings?: Settings) {
        super(data);
        this.translations = data.translations;
        if (data instanceof LocaleSelectMenuOptionBuilder && settings && data.translations) {
            const locale = settings.useLocale === "user" ? settings.userLocale : settings.guildLocale;
            if (data.translations[locale]) {
                this.label = data.translations[locale].label ?? this.label ?? "";
                this.description = data.translations[locale].description ?? this.description ?? "";
                this.data.label = this.label;
                this.data.description = this.description;
            }
        }
        if (settings) {
            delete this.translations;
        }
    }
}
