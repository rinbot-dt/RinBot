import { EmbedBuilder } from "discord.js";
import { RinBot } from "../../structures/client/index.js";


export default {
  name: "ready",
  /**
   * 
   * @param {RinBot} client 
   */
  run: async (client) => {
    const ownerbot = [
        ...(await client.db.get(`owner`)) || [],
        ...(client.config.buyers || [])
    ];

    const time = Math.floor(Date.now() / 1000);
    const embed = new EmbedBuilder()
      .setColor(client.config.color)
      .setFooter(client.footer)
      .addFields(
        { name: `<t:${time}:R>`, value: "> **Je viens de démarrer à l'instant**" },
        { name: "*Besoin d'aide ?*", value: `[Mon support est là pour vous](${client.support})` }
      );

    const messageLeave = ownerbot.map(async (ownerID) => {
        const ownerUser = await client.users.fetch(ownerID); 
        if (ownerUser) {
          // return ownerUser.send({ embeds: [embed]}).catch(() => {});
        }
        return Promise.resolve();
    });

    await Promise.all(messageLeave).catch((e) => { console.log(e) });
  }
};