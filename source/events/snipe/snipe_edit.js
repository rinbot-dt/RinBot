import { RinBot } from "../../structures/client/index.js";
import { Message } from "discord.js";

export default {
    name: "messageUpdate",
    /**
     * @param {RinBot} client
     * @param {Message} message
     */
    run: async (client, message, newmessage) => {
        if (!message.guild || message.bot || !message.author || !message.author.id) return;
        if (!message.content === undefined || !newmessage.content === undefined) return;
        const channelId = message.channel.id;

        client.SnipeEdit.set(channelId, {
            origin: message.content,
            new: newmessage.content,
            author: message.author.id,
            timestamp: Date.now(),
        })
    }
};
