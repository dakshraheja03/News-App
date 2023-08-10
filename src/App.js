import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <div className="container">
            <Routes>
                <Route exact path='/' element={<News pageSize={6} category='general'/>}></Route>
                <Route exact path='/business' element={<News pageSize={6} category='business'/>}></Route> 
                <Route exact path='/entertainment' element={<News pageSize={6} category='entertainment'/>}></Route> 
                <Route exact path='/health' element={<News pageSize={6} category='health'/>}></Route> 
                <Route exact path='/science' element={<News pageSize={6} category='science'/>}></Route> 
                <Route exact path='/sports' element={<News pageSize={6} category='sports'/>}></Route> 
                <Route exact path='/technology' element={<News pageSize={6} category='technology'/>}></Route> 
            </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
