import React,{useState , useContext} from 'react'
import { Context } from '../Context';

function Header() {
  // const {darkmode,handleDarkmode} = props;
  // console.log(darkmode);
  const {handleDarkmode} = useContext(Context);
  return (
    <header>
      <h1>header</h1>
      <button onClick={handleDarkmode}>DarkMode</button>
    </header>
  )
}

export default Header