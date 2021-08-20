import "./App.css"
import Header from "./Header"
import Intro from "./Intro"
import Menu from "./Menu"
import Projects from "./Projects"
import Skills from "./Skills"
import Clones from "./Clones"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Resume from "./Resume"
import Error from "./Error"

function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=0.1" />
        {/* <meta name="viewport" content="width=1024" /> */}
        <title>Oluseyi's portfolio website</title>
      </Helmet>
      <Router>
        <Header />
        <div className="app__body">
          <div className="app__left">
            <Intro />
            <Menu />
          </div>
          <div className="app__right">
            <Switch>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/clones">
                <Clones />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route exact path="/">
                <Projects />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
