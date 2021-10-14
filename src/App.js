// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './components/navBar';
import Home from './components/Home'
import SkuContainer from './containers/SkuContainer'
import OrderContainer from './containers/OrderContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div>
      <NavBar />

      <Route
        exact path="/" render={(routerProps)=>
          <Home routerProps={routerProps}/> }
      />

      <Route
        path="/skus" 
        render={routerProps => <SkuContainer {...routerProps}/>}
      />

      <Route
        path="/orders" 
        render={routerProps => <OrderContainer {...routerProps}/>}
      />
        
      </div>
    </div>
  );
}

export default App;
