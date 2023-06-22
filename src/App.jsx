import { useState ,useContext } from 'react'
import Page from './components/Page'
import './App.css'
import { Context } from './Context';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const handleDarkmode = () =>{
    setDarkmode(!darkmode);
    console.log(darkmode);
  }

  return (
    <>
    <Context.Provider value={{darkmode,setDarkmode,handleDarkmode}}>
      <Page 
        // darkmode = {darkmode}
        // handleDarkmode = {handleDarkmode}
      />
    </Context.Provider>
      
    </>
  )
}

export default App
