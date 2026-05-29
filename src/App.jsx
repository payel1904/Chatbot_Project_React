import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import { ChatMessages } from './components/ChatMessages';
import { WelcomeMessage } from './components/WelcomeMessage';
import './App.css'
function App() {
       const [chatMessages, setChatMessages]=useState([]);

        /* [
        {
          message: "Hello, Chatbot!",
          sender: "user",
          id: 'id1'
        },
        {
          message: "Hello,how can I help you?",
          sender: "robot",
          id: 'id2'
        },
        {
          message: "What is the date today?",
          sender: "user",
          id: 'id3'
        },
        {
          message: "Today is may 26",
          sender: "robot",
          id: 'id4'
        }
      ] */
      
      // const chatMessages=array[0];
      //`const setChatMessages=array[1];
      
      return (
        <div className="App-container">
          <WelcomeMessage/>
         
          <ChatMessages
            chatMessages={chatMessages}
          />
           <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />

        </div>

      );
    }


export default App
