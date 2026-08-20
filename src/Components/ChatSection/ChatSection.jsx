import React, { useEffect, useRef, useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import "./ChatSection.css";


const ChatSection = ({ summary, videoId, setAction }) => {

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);



  useEffect(() => {

    if (!summary) {
      return;
    }

    setMessages([
      {
        id: Date.now(),
        sender: "ai",
        text: summary
      }
    ]);

  }, [summary]);



  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [messages, loading]);



  const handleSendMessage = async () => {

    const question = input.trim();


    if (!question) {
      return;
    }


    if (!videoId) {

      console.error(
        "Video ID is missing."
      );

      return;
    }


    const userMessage = {
      id: Date.now(),
      sender: "me",
      text: question
    };


    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage
    ]);


    setInput("");

    setLoading(true);


    try {



      const response = await fetch(
        "https://recapai-backend-8b8n.onrender.com/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            video_id: videoId,
            question: question
          })
        }
      );




      if (!response.ok) {

        const errorText =
          await response.text();

        throw new Error(
          `Backend returned ${response.status}: ${errorText}`
        );
      }



      const data =
        await response.json();

setAction(data.action || null);




      const aiMessage = {

        id: Date.now() + 1,

        sender: "ai",

        text: data.answer

      };


      setMessages((previousMessages) => [
        ...previousMessages,
        aiMessage
      ]);


    } catch (error) {

      console.error(
        "Chat error:",
        error
      );


      const errorMessage = {

        id: Date.now() + 1,

        sender: "ai",

        text: "Sorry, I couldn't process your question."

      };


      setMessages((previousMessages) => [
        ...previousMessages,
        errorMessage
      ]);


    } finally {

      setLoading(false);

    }

  };


  const handleKeyDown = (event) => {

    if (event.key === "Enter") {

      handleSendMessage();

    }

  };


  return (

    <div className="chat-section">

      <div className="chat-container">

        <div className="messages">

          {messages.map((message) => (

            <div
              key={message.id}
              className={`message-row ${
                message.sender === "me"
                  ? "my-message-row"
                  : "other-message-row"
              }`}
            >

              <div
                className={`message-bubble ${
                  message.sender === "me"
                    ? "my-message"
                    : "other-message"
                }`}
              >

                <p>

                  <span>
                    {message.sender === "me"
                      ? "You:"
                      : "AI:"
                    }
                  </span>

                  {" "}

                  {message.text}

                </p>

              </div>

            </div>

          ))}


          {loading && (

            <div className="message-row other-message-row">

              <div className="message-bubble other-message">

                <p>

                  <span>
                    AI:
                  </span>

                  {" "}
                  Thinking...

                </p>

              </div>

            </div>

          )}




          <div ref={messagesEndRef} />

        </div>

      </div>



      <div className="chat-input-container">

        <input
          type="text"
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Chat with your Video..."
          disabled={
            loading || !videoId
          }
        />


        <button
          className="send-button"
          onClick={handleSendMessage}
          disabled={
            loading ||
            !input.trim() ||
            !videoId
          }
        >

          <LuSendHorizontal />

        </button>

      </div>


    </div>

  );

};


export default ChatSection;