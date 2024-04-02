import logo from './logo.svg';
import './App.css';
import ImageShareComponent from './ImageShare';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ImageShareComponent pageURL={"https://sharing-app-lzgr.onrender.com/post?id=1"} />
       <ImageShareComponent pageURL={"https://sharing-app-lzgr.onrender.com/post?id=2"} />
      </header>
    </div>
  );
}

export default App;
