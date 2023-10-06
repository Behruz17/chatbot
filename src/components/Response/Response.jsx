import React, { useState, useEffect } from "react";

function Response({ responseText }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = 1;

    const typingTimer = setInterval(() => {
      if (currentIndex < responseText.length) {
        setDisplayedText((prevText) => prevText + responseText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, typingInterval);

    return () => {
      clearInterval(typingTimer);
    };
  }, [responseText]);

 
  const parseResponseText = () => {
    return displayedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, link) => {
        const fullLink = `https://ilmhona-api.hf.space/${link}`
      return `<a href="${fullLink}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    });
  };

  return (
    <div className="bot-message">
      <p dangerouslySetInnerHTML={{ __html: parseResponseText() }} />
    </div>
  );
}

export default Response;
