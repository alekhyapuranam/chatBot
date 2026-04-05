import { useState } from 'react';
import './App.css';
import { ChatMessageComponent } from "./components/chatmesaage-component";
import { InputComponent } from "./components/input-component";

function App() {
  const [loading,setLoading]=useState(false);
            const [inputMessage, setInput]=useState([])
          //setInput{[...inputMessage],[{image:'sender',message:'what is the time now?',key:crypto.randomUUID()}]}
          return <div className='app-component'>
            
            <ChatMessageComponent setInput={setInput} inputMessage={inputMessage} loading={loading} setLoading={setLoading}/>
            <InputComponent setInput={setInput} inputMessage={inputMessage} loading={loading} setLoading={setLoading} />
            {/*inputMessage.map((input)=>(
             
              <ChatMessageComponent image={input.image} message={input.message}/>)
            )*/}
            </div>
}

export default App
