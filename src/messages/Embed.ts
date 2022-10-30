import { EmbedBuilder } from "better-discord-builders";
import { Settings } from "../index";
import { LocaleEmbed } from "../interfaces/Embed";
export class LocaleEmbedBuilder extends EmbedBuilder {
    public translations?: {
        [key: string]: {
            title?: string;
            description?: string;
            fields?: {
                name?: string;
            }[];
        }
    };
    constructor(data: LocaleEmbed, settings?: Settings) {
        super(data);
        this.translations = data.translations;
        if (settings && data.translations) {
            const locale = settings.useLocale === "user" ? settings.userLocale : settings.guildLocale;
            if (data.translations[locale]) {
                this.title = data.translations[locale].title ?? this.title ?? "";
                this.description = data.translations[locale].description ?? this.description ?? "";
                if (data.translations[locale].fields && this.fields) {
                    this.fields = this.fields?.map((field, index) => {
                        if (data?.translations && data.translations[locale]) {
                            const translations = data.translations[locale].fields;
                            if (translations) {
                                const translation = translations[index];
                                field.name = translation.name ?? field.name;
                            }
                        }
                        return field;
                    });
                }
                this.data.title = this.title;
                this.data.description = this.description;
                this.data.fields = this.fields;
            }
        }
        if (settings) {
            delete this.translations;
        }
    }
}
