import React from 'react';
import css from './styles/ChatMessage.module.css'

const ChatMessage = ({ message, user}) => {
  return (
    <div className={`${css.messagebox}`}id={user === 'gpt'?'gpt':'me'}>
      <div
        className={`${css.avatar}`}>
          {user === 'gpt'?  <img src={require('../assets/download.png')} alt="avatar.jpg" />
          :<img src={require('../assets/Multiavatar-sfdsdfsdffffffffff.png')} alt="avatar.jpg" /> }
      </div>
      <div className={`${css.message}`} id={user === 'gpt'?'gpt':''}>
        {message}
        </div>
    </div>
  )
}

export default ChatMessage;


  // ${message.user === "gpt" && "chatgpt"}