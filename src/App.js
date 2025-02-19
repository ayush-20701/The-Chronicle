import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './Components/News';
import Navbar from './Components/Navbar';
// import About from './about';
import LoadingBar from "react-top-loading-bar";
import { useState } from 'react';

function App() {
  const api = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress = {setProgress} category = "general" key = "general" country = "us" pageSize={6} apiKey = {api} />} />
          {/* <Route path="/about" element={<About/>} /> */}
          <Route path="/sports" element={<News setProgress = {setProgress} category = "sports" key = "sports" country = "us" pageSize={6} apiKey = {api} />} />
          <Route path="/business" element={<News setProgress = {setProgress} category = "business" key = "business" country = "us" pageSize={6} apiKey = {api} />} />
          <Route path="/technology" element={<News setProgress = {setProgress} category = "technology" key = "technology" country = "us" pageSize={6} apiKey = {api} />} />
          <Route path="/entertainment" element={<News setProgress = {setProgress} category = "entertainment" key = "entertainment" country = "us" pageSize={6} apiKey = {api} />} />
          <Route path="/science" element={<News setProgress = {setProgress} category = "science" key = "science" country = "us" pageSize={6} apiKey = {api} />} />
          <Route path="/health" element={<News setProgress = {setProgress} category = "health" key = "health" country = "us" pageSize={6} apiKey = {api} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
