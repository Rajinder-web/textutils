//import logo from './logo.svg';
 //import './App.css';
 import Navbar from "./Components/Navbar";
 import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import {useState} from 'react'; 
//import { BrowserRouter, Routes, Route} from 'react-router-dom';
 
function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setmode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const showAlert=(message,type)=>{
          setAlert({
            msg:message,
            type:type
          })
          setTimeout(() => {
              setAlert(null);
          }, 1500);
        }
  return (
    <>  
{/* <BrowserRouter>
      {/* Navigation */}
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}        
        </nav> 
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />*/}

      {/* Routes */}
      {/* <Routes>
        <Route exact path="/" element={
          <div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>  
</div>}/>  
        <Route exact path="/about" element={<About />} />        
      </Routes> */}
   {/* </BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
<div className="container my-3">
  <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>  
</div>

 {/* <div className="container my-3">
  <About/>
</div> */}
   </>
  );
}

export default App;