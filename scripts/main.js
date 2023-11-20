async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatbotResponse = document.getElementById('chatbot-response');

    const response = await getChatbotResponse(userInput);

    // 显示用户消息和聊天机器人的响应
    chatHistory.innerHTML += `<div>User: ${userInput}</div>`;
    chatbotResponse.value = `Chatbot: ${response}`;

    document.getElementById('user-input').value = '';
}

async function getChatbotResponse(userInput) {
    const tokenizer = await AutoTokenizer.from_pretrained("Qwen/Qwen-7B-Chat-Int4", { trust_remote_code: true });
    const model = await AutoModelForCausalLM.from_pretrained("Qwen/Qwen-7B-Chat-Int4", { trust_remote_code: true });
    const { response } = await model.chat(tokenizer, userInput, history=null);
    return response;
}
