import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Page1 from "./pages/page";
import { AppProvider } from "./context/appContextProvider"; // Import the AppProvider

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/page" element={<Page1 />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
