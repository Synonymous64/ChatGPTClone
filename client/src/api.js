export const fetchResponse = async (chat) => {
    try {
        const response = await fetch("http://localhost:5000/", {
            method: 'POST',
            Headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: chat.map((message) => message.message).join("\n"),
            })
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}