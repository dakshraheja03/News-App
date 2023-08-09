import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <News pageSize={18}/>
    </div>
    </>
  );
}

export default App;
