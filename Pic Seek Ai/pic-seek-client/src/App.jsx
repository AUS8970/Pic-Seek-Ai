import { Route, Routes } from "react-router"
import Root from "./layouts/Root"
import Home from "./pages/Home"
import GenerateImage from "./pages/GenerateImage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Root/>}>
        <Route index element={<Home />} />
        <Route path="generate-image" element={<GenerateImage />} />
      </Route>
    </Routes>
  )
}

export default App
