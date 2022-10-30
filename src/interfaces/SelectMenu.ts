import { SelectMenu, SelectMenuOption } from 'better-discord-builders';
export interface LocaleSelectMenu extends SelectMenu {
    options: LocaleSelectMenuOption[];
    translations?: {
        [key: string]: {
            placeholder?: string;
        }
    };
}
export interface LocaleSelectMenuOption extends SelectMenuOption {
    translations?: {
        [key: string]: {
            label?: string;
            description?: string;
        }
    };
}
