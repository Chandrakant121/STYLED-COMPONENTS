import './App.css'
import { Flex } from "./components/flex"
import { Button, Button1 } from './components/button'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState("dark")


  return (
    <div className="App">

      <div>
        <h2>Theme is: {theme}</h2>

        <Button1 theme={theme}>
          Clicked Me
        </Button1>

        <Button1
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light")
          }}
        >Change Theme</Button1>

      </div>



      <Button>SignIn</Button>
      <Button>LogIn</Button>

      <h3>Without flex</h3>

      <div>
        <Button>One</Button>
      </div>
      <div>
        <Button>Two</Button>
      </div>

      <h3>Using flex</h3>
      <Flex>
        <div>
          <Button>One</Button>
        </div>
        <div>
          <Button>Two</Button>
        </div>
      </Flex>
    </div>

  )
}

export default App
