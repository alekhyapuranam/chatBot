   import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './input-component.css';
    export function InputComponent({setInput, setLoading}){
          const [message,saveMessage]=useState('');
         
          function updateMessage(){
            setInput(saveInput=>[...saveInput,{image:'sender',message:message,key:crypto.randomUUID()}]);
            setLoading(true);
            let chatBotResponse= Chatbot.getResponse(message);
            setTimeout(()=>{
                setInput(saveInput=>[...saveInput,{image:'robot',message:chatBotResponse,key:crypto.randomUUID()}]);
                setLoading(false);
            },2000);
           
           saveMessage('');
          }

          function getInput(event){
            saveMessage(event.target.value);
            console.log(message);
           

          }
           
            return <div className='input-component'>
            <input type="text" placeholder='enter a message' value={message} onChange={getInput} className="input-box"/>
            <button onClick={updateMessage} className='input_button'>send</button>
            </div>
        }