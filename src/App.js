import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import MainPage from "./pages/Main";
import Detail from "./pages/Detail";
import AddCard from "./pages/AddCharacter";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/add_person" element={<AddCard/>} />       
            <Route path="/:id" element={<Detail />}/>   
            <Route path="/" element={<MainPage />}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
