import { Embed } from "better-discord-builders";
export interface LocaleEmbed extends Embed {
    translations?: {
        [key: string]: {
            title?: string;
            description?: string;
            fields?: {
                name?: string;
            }[];
        }
    };
}
