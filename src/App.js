import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React,{useState} from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress,setProgress] = useState(10);
  const progressSet=(value)=>{
    setProgress(value)
  }
  return (
    <>
    <Router>
    <Navbar/>
      <div>
      <LoadingBar color="#FFFFFF" progress={progress} />
      </div>
    <div className="container">
            <Routes>
                <Route exact path='/' element={<News progressSet={progressSet} pageSize={8} category='general'/>}></Route>
                <Route exact path='/business' element={<News progressSet={progressSet} pageSize={8} category='business'/>}></Route> 
                <Route exact path='/entertainment' element={<News progressSet={progressSet} pageSize={8} category='entertainment'/>}></Route> 
                <Route exact path='/health' element={<News progressSet={progressSet} pageSize={8} category='health'/>}></Route> 
                <Route exact path='/science' element={<News progressSet={progressSet} pageSize={8} category='science'/>}></Route> 
                <Route exact path='/sports' element={<News progressSet={progressSet} pageSize={8} category='sports'/>}></Route> 
                <Route exact path='/technology' element={<News progressSet={progressSet} pageSize={8} category='technology'/>}></Route> 
            </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
