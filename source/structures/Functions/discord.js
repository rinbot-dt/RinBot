import config from "../../../config/config.js";

export async function getProfile() {
   const response = await fetch("https://discord.com/api/v10/applications/@me", {
    method: "PATCH",
    headers: {
        Authorization: "Bot "+ config.token,
        //"Content-Type": "application/json"
    },

})
    //body: JSON.stringify({name: "dz", description: "fzz"})

return response.json()
}