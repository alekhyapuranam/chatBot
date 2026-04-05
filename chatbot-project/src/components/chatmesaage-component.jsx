  import { useEffect, useRef } from "react";
import robot from "../assets/robot.png";
import user from "../assets/user.png";
import './chatmessage-component.css';
export function ChatMessageComponent({ inputMessage, loading}){
          let chatElement=useRef(null);
          

          //let chatBotResponse= Chatbot.getResponse(message);
          useEffect(()=>{
            console.log(chatElement.current);
            chatElement.current.scrollTop=chatElement.current.scrollHeight;

          },[inputMessage])
          
          return <div className="messages-component" ref={chatElement}>
          {inputMessage.map(input=>(
            <div className={input.image==='robot'?'message-robot':'message-user'} >
            {input.image==='robot'&& <img src={robot} alt="image" width="50"/>}
            <div className="message-box">{input.message}</div>
            {input.image==='sender' && <img src={user} alt='userImage' width='50'></img>}
            
         </div>
          ))}
           {loading && <div className='message-robot'>
            <div  >
             <img src={robot} alt="image" width="50"/>
             </div>
            <div className="message-box, loader">  </div>
          </div> }
          </div>
          // return  <div>
           // {image==='robot'&& <img src="robot.png" alt="image" width="50"/>}
           // <>{message}</>
           // {image==='sender' && <img src='user.png' alt='userImage' width='50'></img>}
          //  
         //</div>
        }