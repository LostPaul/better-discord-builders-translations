import { Button } from 'better-discord-builders';
export interface LocaleButton extends Button {
    translations?: {
        [key: string]: {
            label: string;
        }
    };
}
