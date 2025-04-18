import Discord, { EmbedBuilder } from "discord.js";
import { RinBot } from "../../structures/client/index.js";

export default {
    name: "prevnames",
    type: "2",
    /**
     * @param {RinBot} client
     * @param {Discord.Interaction} interaction
     */
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: true });
        const color = await client.db.get(`color_${interaction.guild.id}`) || client.config.color
        const targetId = interaction.targetId
        const user = client.users.cache.get(targetId)
        const author = interaction.targetId === interaction.user.id
        const prev = await client.api.prevget(targetId);
        if (prev.prevnames.length === 0) {
            return interaction.editReply({
                content: author ? "Vous n'avez pas de prevname." : `${user.username} n'a pas de prevname.`
            });
        }


        const embed = new EmbedBuilder()
            .setColor(color)
            .setTitle(author ? "Vos Prevname" : `Prevname de ${user.username}`)
            .setDescription(prev.prevnames.map((entry, index) => `**${index + 1} -** <t:${Math.floor(entry.temps)}:d> - [\`${entry.prevname}\`](https://discord.com/users/${user.id})`).join('\n'))
            .setFooter({ text: client.footer.text, iconURL: interaction.guild.iconURL() });

        return interaction.editReply({
            embeds: [embed]
        });


    }
};