import { useEffect, useState } from "react";
import { makeMessage } from "./GeneratorFun";
import { Namesgenerater } from "./GeneratorFun";

const LiveChat = () => {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const handleChat = () => {
    setChat((prev) => [
      { chat: Namesgenerater() + " : " + makeMessage(10) },
      ...prev,
    ]);
  };

  const handleInput = () => {
    setChat((prev) => [{ chat: "Madhu" + " : " + input }, ...prev]);
    setInput(" ");
  };

  const handleMsg = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const id = setInterval(() => {
      handleChat();
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Live Chat</h1>
        <ul className="chat">
          {chat.map((msg) => {
            return <li>{msg.chat}</li>;
          })}
        </ul>
        <input type="text" onChange={handleMsg} value={input} />
        <button onClick={handleInput}>Send</button>
      </div>
    </div>
  );
};

export default LiveChat;

// onChange((e)=>setInput(e.target.value))
