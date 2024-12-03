document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("sendRequest");
    if (button) {
        button.addEventListener("click", async () => {
            const data = {
                model: "llama3.1",
                prompt: "What is your name?",
                stream: false
            };

            const url = "https://test.riyti1xhl.nyat.app:19007/api/generate";
            //change to your server address

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

/////////////////
// for OpenAI API
/////////////////

// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("sendRequest");
//   if (button) {
//     button.addEventListener("click", async () => {
//       const apiKey = "Your_API"; // 替换为你的 API Key
//       const url = "https://api.openai.com/v1/chat/completions";

//       const data = {
//         model: "gpt-4o-mini",
//         messages: [
//           {
//             role: "user",
//             content: "Answer in only 3 numbers."
//           }
//         ]
//       };

//       try {
//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${apiKey}`
//           },
//           body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }


//         const result = await response.json();
//         // 提取 content 值
//         const content = result.choices[0].message.content;
//         console.log("Response Content:", content);
//         alert(content); // 显示 content 值
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Failed to send POST request.");
//       }
//     });
//   } else {
//     console.error("Button with id 'sendRequest' not found.");
//   }
// });
