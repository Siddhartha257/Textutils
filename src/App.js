import React, { useState } from 'react';
import Navbar from './components/nav';
import TextFrom from './components/TextFrom';
import About from './components/about';
import Example from './components/example';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';

function App() {

  const [mode,setmode] = useState('light')

  const toogleMode =()=>{
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#343a40'
      document.title='TextUtiles - Dark mode'
   
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white' 
      document.title='TextUtiles - Light mode'
    }
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element:<> <Navbar title='Text Converter' mode={mode} toogleMode={toogleMode}/> <TextFrom mode={mode} heading='Enter your Text'/></>
    },
  
    {
      path:'/about',
      element:<> <Navbar title='Text Converter' mode={mode} toogleMode={toogleMode}/><About mode={mode}/></>
      
    },
    {
      path:'/example',
      element:<> <Navbar title='Text Converter' mode={mode} toogleMode={toogleMode}/> <Example mode={mode}/></>
    },
  ])
  return (
    <>  
      <RouterProvider router={router}/>
    </>
  );
}


export default App;
