import "./App.css"
import Header from "./Header"
import Intro from "./Intro"
import Menu from "./Menu"
import Projects from "./Projects"
import Skills from "./Skills"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Helmet } from "react-helmet"

function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=1024" />
        <title>My Title</title>
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
              <Route path="/skills">
                <Skills />
              </Route>
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
