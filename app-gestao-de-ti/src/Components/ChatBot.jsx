import React, { useState } from 'react';
import axios from 'axios'; // Certifique-se de ter o axios instalado no projeto

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const chatbotHandler = async () => {
        if (inputText.trim() === '') return;

        setMessages([...messages, { text: inputText, isUser: true }]);
        setInputText('');

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
                prompt: inputText,
                max_tokens: 50,
            }, {
                headers: {
                    'Authorization': `Bearer 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`, // Substitua com sua chave da OpenAI
                    'Content-Type': 'application/json',
                },
            });

            const botMessage = response.data.choices[0].text.trim();
            setMessages([...messages, { text: botMessage, isUser: false }]);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            chatbotHandler();
        }
    };

    return (
        <div className="ml-16 fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-300">
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-md w-full space-y-2 mb-4">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-md rounded-lg p-3 ${message.isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-700 self-start'}`}>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full">
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Digite sua mensagem..."
                    />
                    <button onClick={chatbotHandler} className="mt-2 w-full sm:w-auto px-4 py-2 sm:py-1 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
