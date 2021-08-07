import "./App.css"
import Header from "./Header"
import Intro from "./Intro"
import Menu from "./Menu"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <div className="app__left">
          <Intro />
          <Menu />
        </div>
        {/* <Projects /> */}
      </div>
    </div>
  )
}

export default App
