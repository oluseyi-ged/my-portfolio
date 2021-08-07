import "./App.css"
import Header from "./Header"
import Intro from "./Intro"
import Menu from "./Menu"
import Projects from "./Projects"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <div className="app__left">
            <Intro />
            <Menu />
          </div>
          <div className="app__right">
            <Switch>
              <Route path="/">
                <Projects />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
