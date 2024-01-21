// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import Alert from './components/Alert';
import './App.css';
import { useState } from 'react';
// import About from './components/About';


function App() {
  const[mode,setMode]= useState('light'); //whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils-Dark Mode"
      setInterval(() => {
        document.title="TextUtils is Amazing Mode"
      }, 2000);
      setInterval(() => {
        document.title="Install Textutils now"
      }, 1500);
     
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
      document.title="TextUtils-Light Mode"
    }
   
  }
  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" mode={mode} toggleMode={toggleMode}>
<TextForm heading="Enter the text to analyze below "  showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>
{/* <About/> */}
</div>

    </>
  );
}

export default App;
