import React from "react";
import './App.css';
import Navbar from "./Navbar";
import ItemsList from "./ItemsList";
import { ItemProvider } from "./ItemContext";
import AddItem from './AddItem';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LowStock from "./LowStock";

function App() {
  return (
    <BrowserRouter>
      <ItemProvider>
        <div className="App">
        <div>
          <Navbar />
        </div>
          <Switch>
            <Route path='/' exact render={props =>
                <>
                  <AddItem />
                  <ItemsList />
                </>
                } />
            <Route path="/low" component={LowStock} />
          </Switch>
        </div>
      </ItemProvider>
    </BrowserRouter>
  );
};

export default App;
