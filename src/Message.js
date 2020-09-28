import React, {forwardRef} from 'react'
import FlipMove from 'react-flip-move';
import { CardContent,Card,Typography } from '@material-ui/core';
import './Message.css'
const  Message = forwardRef(({message, username}, ref) => {

    const isUser= username === message.username;
    return (
        <div ref={ref}  className={`message ${isUser && 'message__user'}`}>
          <Card  className={isUser ? "message_userCard" : "message_questCard"}>
        <CardContent >
          <Typography 
          color="white"
          variant="h5"
          component="h2"
          >
            {!isUser && `${message.username || 'unknown user'}:`}{message.text}
          </Typography>

        </CardContent>
      </Card>

        </div>

    
            
        
    )
})


export default Message
