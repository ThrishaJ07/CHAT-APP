import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

function Conversations() {
  const {loading, conversations} = useGetConversations();
  console.log("CONVERSATIONS:", conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation,idx)=> (
        <Conversation 
          key={Conversation._id}
          conversation = {conversation}
          emoji = {getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  );
};

export default Conversations

// STATER CODE FOR Conversations

// import React from 'react';
// import Conversation from './Conversation';

// function Conversations() {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   );
// };

// export default Conversations
