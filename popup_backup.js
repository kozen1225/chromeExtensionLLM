// document.getElementById('generate').addEventListener('click', () => {
//     const requestData = {
//         model: "llama3.2",
//         prompt: "Why is the sky blue?"
//     };

//     fetch('http://172.20.2.243:11434/api/generate', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.response) {
//             alert(`后端返回的消息: ${data.response}`);
//         } else {
//             alert('后端未返回有效的 response 字段');
//         }
//     })
//     .catch(error => console.error('请求错误:', error));
// });


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("sendRequest");
  if (button) {
    button.addEventListener("click", async () => {
      const apiKey = ""; // 替换为你的 API Key
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
        // 提取 content 值
        const content = result.choices[0].message.content;
        console.log("Response Content:", content);
        alert(content); // 显示 content 值
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send POST request.");
      }
    });
  } else {
    console.error("Button with id 'sendRequest' not found.");
  }
});
