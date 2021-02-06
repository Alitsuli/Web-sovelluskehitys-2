/*import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = ()  => {
  const [tyontekijat, setTyontekijat] = useState([])
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/tyontekijat')
      .then(response => {
        setTyontekijat(response.data)
      })
  }, [])

  return (
    
    <div>
      {tyontekijat.map(tyontekija => {
        return (
          <li>
            Nimi: {tyontekija.firstName} {tyontekija.lastName}<br/>
            {tyontekija.numbers.map(number => {
              return (
                <>
                  Numero (koti): {number.home}
                  {number.work ? <><br/>Numero (työ): {number.work}</> : null}
                </>
              )
            })}
            <br/>
            Osoite: {tyontekija.address}
          </li>
        )
      })}
    </div>
    
  )
}*/
import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'

import Add from './components/Add'
import Home from './components/Home'
import List from './components/List'
const App = () => {

  const padding = {
      padding: 5
  }

  return (
      <div className="container">
          <Router>
              <div>
                  <Link style={padding} to="/">home</Link>
                  <Link style={padding} to="/add">add</Link>
                  <Link style={padding} to="/list">list</Link>
              </div>

              <Switch>
                  <Route path="/add">
                      <Add />
                  </Route>
                  <Route path="/list">
                      <List />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </Router>
      </div>
  )
}
export default App