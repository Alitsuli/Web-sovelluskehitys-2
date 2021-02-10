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

import Saainfo from './components/Saainfo'
const App = () => {

  const padding = {
      padding: 5
  }

  return (
      <div className="container">
          <Router>
              <div>
                  <Link style={padding} to="/Kartta">Kartta</Link>
                  <Link style={padding} to="/Saainfo">Sää tiedot</Link>
              </div>

              <Switch>
                  <Route path="/Saainfo">
                      <Saainfo />
                  </Route>
              </Switch>
          </Router>
      </div>
  )
}
export default App