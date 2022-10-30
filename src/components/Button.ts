import { ButtonBuilder } from "better-discord-builders";
import { Settings } from "../index";
import { LocaleButton } from "../interfaces/Button";
export class LocaleButtonBuilder extends ButtonBuilder {
  public translations?: {
    [key: string]: {
      label: string;
    }
  };
  constructor(data: LocaleButton | LocaleButtonBuilder, settings?: Settings) {
    super(data);
    this.translations = data.translations;
    if (settings && data.translations) {
      const locale = settings.useLocale === "user" ? settings.userLocale : settings.guildLocale;
      this.label = data.translations[locale].label;
      this.data.label = this.label;
    }
    if (settings) {
      delete this.translations;
    }
  }
}
