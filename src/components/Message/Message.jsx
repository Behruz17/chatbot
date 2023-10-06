import { useState, useEffect } from "react"; 

export default function Message({text, sender}) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      let currentIndex = 0;
      const typingInterval = 1;
  
      const typingTimer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prevText) => prevText + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingTimer);
        }
      }, typingInterval);
  
      return () => {
        clearInterval(typingTimer);
      };
    }, [text]);
  
   
    const parseResponseText = () => {
      return displayedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, link) => {
          const fullLink = `https://ilmhona-api.hf.space/${link}`
        return `<a href="${fullLink}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      });
    };

  return (
<>
{
    sender === 'user' ? (
        <div className="user-message">
        {text}
      </div>
    ) : (
        <div className="bot-message">
        <p dangerouslySetInnerHTML={{ __html: parseResponseText() }} />
      </div>
    )
}
</>
  )
}
