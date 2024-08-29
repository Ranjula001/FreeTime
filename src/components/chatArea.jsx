import React, { useState } from "react";
import { Box, Paper, List, ListItem, ListItemText, TextField, Button } from "@mui/material";
import Header from "../layout/header";
import { LuSendHorizonal } from "react-icons/lu";

function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, currentMessage]);
    setCurrentMessage("");
  };

  return (
    <Paper>
      <Header/>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message} />
          </ListItem>
        ))}
      </List>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "78.5vw",
        position:"fixed",
        overflow: "auto", // Ensures no scrollbars are shown
        margin: 0, // Remove any default margin
        padding: 0, // Remove any default padding
      }}>
        <TextField
          sx={{marginLeft:5,}}
          fullWidth
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <Button onClick={handleSendMessage}> <LuSendHorizonal size={30} color="gray"/> </Button>
      </Box>
    </Paper>
  );
}

export default ChatArea;
