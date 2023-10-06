import "./App.css";
import ChatInput from "./components/ChatInput/ChatInput";
import { useState, useEffect, useRef } from "react"; 
import axios from "axios";
import ChatModalBtn from "./components/ChatModalBtn/ChatModalBtn";
import Message from "./components/Message/Message";
import Loader from "./components/Loader/Loader";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatBotModal, setChatBotModal] = useState('inactiveChatBotModal');
  const bottomRef = useRef(null);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    console.log(1);
  }, [messages]);

  const handleChatBotModal = () => { 
    if(chatBotModal === 'activeChatBotModal'){
setChatBotModal('inactiveChatBotModal')
    }else{
      setChatBotModal('activeChatBotModal')
    }
  }

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);
    setIsLoading(true); 

    const requestData = {
      student_id: 0,
      student_profile: {
        name: "Qurbon",
        age: 18,
        education_level: "Highschool education",
        learning_style: "Active learning style",
        metadata: {
          favorite_subject: "Math",
          hobbies: ["Coding", "Reading"]
        }
      },
      message: message,
      target_language: "tg"
    };
    
    axios
      .post("https://ilmhona-api.hf.space/educator_response", requestData)
      .then((response) => {
        console.log("Server Response:", response.data);
        setMessages([
          ...messages,
          { text: message, sender: "user" },
          { text: response.data.translated_response, sender: "bot" },
        ]);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  };

  return (
    <div>
      <div id="chatPopup" className={chatBotModal}>
    <div className="settings-nav">
    <LanguageSelect />
    </div>
  <div className="chat-container">
  {messages.map((message, index) => (
<Message key={index} text={message.text} sender={message.sender} />
        ))}
        {isLoading && <Loader />}
        <div ref={bottomRef} />
  </div>
  <ChatInput onSendMessage={handleSendMessage} />
</div>
      <ChatModalBtn  handleBtn = {handleChatBotModal}/>
    </div>
  );
}

export default App;
