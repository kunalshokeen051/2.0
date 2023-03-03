import React, { useState} from 'react';
import css from './App.module.css';
import ChatMessage from './components/ChatMessage'
import { BiRightArrowCircle } from "react-icons/bi";
  
function App() {

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "Hi, I am ChatGPT and you."
  }
  ]);

function clearChat(){
  setChatLog([{ user: "gpt", message: "I think you have too many questions but don't worry I will answer all."}]);
}

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];
     setInput("")
  setChatLog([...chatLogNew,])

     const messages =chatLogNew.map((item) => item.message).join("\n")
    const response = await fetch("http://localhost:3080/", {
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages,
      })
  })
  const data = await response.json();
  setChatLog([...chatLogNew, {user: 'gpt', message: `${data.message}`}])
  // console.log(data.message);
}

return (
  <div className={css.app}>
    <aside className={css.sidemenu}>
      <div className={css.sidemenu_button} onClick={clearChat}>
        New Chat <BiRightArrowCircle size={30} />
      </div>
      <div className={css.previous_queries}>
      </div>
    </aside>
    <section className={css.chatbox}>
      <div className={css.chatbox_log}>
        {chatLog.map((e, index) => {
          return (<ChatMessage key={index} message={e.message} user={e.user} />)
        })}
      </div>
      <div className={css.input}>
        <form onSubmit={handleSubmit}>
          <input
            name=""
            value={input}
            onChange={(e) => { setInput(e.target.value) }}
            cols="30"
            rows="1"
            className={css.textarea}
            placeholder="Type your Question Here...">
          </input>
        </form>
      </div>
    </section>
  </div>
);
}

export default App;
