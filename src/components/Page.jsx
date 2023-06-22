import React,{useContext} from 'react'
import Header from './Header'
import Main from './Main'
import { Context } from '../Context';

function Page() {
  // console.log('page: ',props);
  // const {darkmode,handleDarkmode} = props;
  
  const {handleDarkmode,darkmode} = useContext(Context);
  return (
    <div  className={darkmode ? 'darkmode' : 'App'}>
      <Header 
        // darkmode = {darkmode}
        // handleDarkmode = {handleDarkmode}
        />
      <Main 
      // darkmode={darkmode}
      />
    </div>
  )
}

export default Page