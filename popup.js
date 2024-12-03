document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("sendRequest");
    if (button) {
        button.addEventListener("click", async () => {
            const data = {
                model: "llama3.1",
                prompt: "What is your name?",
                stream: false
            };

            const url = "your_API_address";
            //change to your api address

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                // get the content value
                const content = result.response || "No content available";
                console.log("Response Content:", content);
                alert(content); // show the content value
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to send POST request.");
            }
        });
    } else {
        console.error("Button with id 'sendRequest' not found.");
    }
});