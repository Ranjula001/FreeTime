import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import './input.css'
import { AppProvider } from "./context/appContextProvider"; 
import Chat from "./pages/chat";
import Blank from "./pages/noNotification";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/chat" element={<Chat/>} />
            <Route path="/" element={<Blank/>} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
