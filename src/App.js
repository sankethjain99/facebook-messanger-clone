import React, { useEffect, useState } from 'react';
import { Button, FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
import './App.css'
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input,setInput] = useState(''); 
  const [messages,setMessages] = useState([
   
]);
  const [username,setuserName] =useState('');
  

  useEffect(() => {
    db.collection('text').orderBy('timestamp', 'desc')
    .onSnapshot(snapshot=>{
       setMessages(snapshot.docs.map(doc=> ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    
    setuserName(prompt('Please enter your name'));
    
  }, [])
  
  const sendMessage = (event) =>{
    event.preventDefault();

    db.collection('text').add({
      text: input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
     setInput('');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
      <h1>Sanketh Clever Programmer</h1>
      <h2>Welcome {username}</h2>
      <form className= "san">
      <FormControl className="app__formcontrol">
        <Input className="app__input" placeholder ='Enter a message ...'value={input} onChange={event => setInput(event.target.value)} aria-describedby="my-helper-text" />
        <IconButton className="app__icon" disabled={!input} type="submit" onClick={sendMessage} variant="contained" color="primary">
            <SendIcon></SendIcon>
        </IconButton>
      </FormControl>
      </form> 

      <FlipMove>
      {
        messages.map(({id ,message}) => (
          <Message key={id} username = {username} message={message}  />
          
          //<p>{message}</p>s
        ))
      }

      </FlipMove>

    </div>
  );
}

export default App;
