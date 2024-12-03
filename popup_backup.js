//This is a backup file for popup.js
//for OpenAI GPT-4o-mini API

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("sendRequest");
  if (button) {
    button.addEventListener("click", async () => {
      const apiKey = ""; // replace with your OpenAI API key
      const url = "https://api.openai.com/v1/chat/completions";

      const data = {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: "Answer in only 3 numbers."
          }
        ]
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }


        const result = await response.json();
        // get the content value
        const content = result.choices[0].message.content;
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
