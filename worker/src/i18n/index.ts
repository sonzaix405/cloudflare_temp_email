import { LocaleMessages } from "./type";
import en from "./en";
import { Context } from "hono";

export default {
    getMessages: (
        locale: string | null | undefined
    ): LocaleMessages => {
        // fallback language
        return en;
    },
    getMessagesbyContext: (
        c: Context<HonoCustomType>
    ): LocaleMessages => {
        // fallback language
        return en;
    }
}
