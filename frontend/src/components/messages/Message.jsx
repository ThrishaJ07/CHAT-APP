import React from 'react';
import {useAuthContext} from '../../context/AuthContex';
import useConversation from '../../zustand/useCoversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";


  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt="Tailwind CSS chat bubble component" src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
        <div className='chat-footer capacity-50 text-xs flex gap-1 items-center'>{formatedTime}</div>
      
    </div>
  )
}

export default Message

//STATER CODE

// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//             </div>
//         </div>
//         <div className={'chat-bubble text-white bg-blue-500'}>Hi! What is up?</div>
//         <div className='chat-footer capacity-50 text-xs flex gap-1 items-center'>12:42</div>
      
//     </div>
//   )
// }

// export default Message
