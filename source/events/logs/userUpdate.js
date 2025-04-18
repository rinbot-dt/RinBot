import { RinBot } from "../../structures/client/index.js";
import { User } from "discord.js";

export default {
    name: "userUpdate",
    /**
     * 
     * @param {RinBot} client 
     * @param {User} oldUser
     * @param {User} newUser
     * @returns 
     */
    run: async (client, oldUser, newUser) => {
        if (oldUser.username !== newUser.username) {
            if (oldUser.bot) return;
            const prevname = oldUser.username;
            const userId = oldUser.id;
            console.log(`NEW PREVNAME: ${oldUser.username} --> ${newUser.username}`)
            await client.api.prevadd(userId, prevname)
        } if(oldUser.globalName !== newUser.globalName) {
            const prevname = oldUser.globalName;
            const userId = oldUser.id;
            console.log(`NEW PREVNAME: ${oldUser.globalName} --> ${newUser.globalName}`)
            await client.api.prevadd(userId, prevname)
        }
    },
};
