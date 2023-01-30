export const fetchResponse = async (chat) => {
    try {
        const response = await fetch("https://openchat-server.onrender.com/", {
            method: 'POST',
            Headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: chat.map((message) => message.prompt)
            })
        });

        const data = await response.json();
        return data.bot.trim();
    } catch (err) {
        console.log(err);
    }
}