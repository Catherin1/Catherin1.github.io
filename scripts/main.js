async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatHistory = document.getElementById('chat-history');

    // Your chatbot logic here
    const response = await getChatbotResponse(userInput);

    // Display user message and chatbot response
    chatHistory.innerHTML += `<div>User: ${userInput}</div>`;
    chatHistory.innerHTML += `<div>Chatbot: ${response}</div>`;

    // Clear the input field
    document.getElementById('user-input').value = '';
}

async function getChatbotResponse(userInput) {
    // Your chatbot model loading and response logic here
    // Example using the provided code
    const tokenizer = await AutoTokenizer.from_pretrained("Qwen/Qwen-7B-Chat-Int4", { trust_remote_code: true });
    const model = await AutoModelForCausalLM.from_pretrained("Qwen/Qwen-7B-Chat-Int4", { trust_remote_code: true });
    const { response } = await model.chat(tokenizer, userInput, history=null);
    return response;
}
