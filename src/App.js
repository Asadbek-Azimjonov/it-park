import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Komp from './components/pages/komp_savod';
import Home from './components/pages/Home';
import Services from './components/Cards'
import Front from './components/pages/frontend'
import Design from './components/pages/design'
import Backend from './components/pages/backend'
import ITenglish from './components/pages/itenglish'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";



function App() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className='App'>
      {
        loading ?(
        <GridLoader
        bingBoxLoader className='loader'
        color={"#63BD04"} loading={loading}  size={30} />)
        : (
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/komp_savod' exact component={Komp} />
          <Route path='/frontend' exact component={Front} />
          <Route path='/design' exact component={Design} />
          <Route path='/backend' exact component={Backend} />
          <Route path='/itenglish' exact component={ITenglish} />
        </Switch>
      </Router>
        )
    
      }
     </div>
  );
}


export default App;



 